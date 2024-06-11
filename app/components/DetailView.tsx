"use client"
import {
  FolderRegular,
  EditRegular,
  OpenRegular,
  DocumentRegular,
  PeopleRegular,
  DocumentPdfRegular,
  VideoRegular,
} from "@fluentui/react-icons";


import { InfoLabel, Rating, RatingProps } from "@fluentui/react-components";


import {
  makeStyles,
  Button,
  Caption1,
  Text,
  Textarea,
  tokens,
  Subtitle1,
} from "@fluentui/react-components";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";

import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  PresenceBadgeStatus,
  Avatar,
} from "@fluentui/react-components";
import RateIcon from "./RateIcon";
import llm from "../scripts/llm_api";
import { useEffect, useState } from "react";
import api from "../scripts/api";


const columns = [
  {
    columnKey: "query",
    label:"질문",
  }

]

const useStyles = makeStyles({
  main: {
    gap: "36px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },

  card: {
    width: "100%",
    maxWidth: "100%",
    height: "fit-content",
  },

  section: {
    width: "fit-content",
  },

  title: { margin: "0 0 12px" },

  horizontalCardImage: {
    width: "64px",
    height: "64px",
  },

  headerImage: {
    borderRadius: "4px",
    maxWidth: "44px",
    maxHeight: "44px",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  text: { margin: "0" },
});

type DetailViewProps = {
  id:number,
  query?:string,
  answer:string,
  rate:string|null,
  rate_reason:string|null,
  date:string,
  uuid:string,
}

export default function DetailView(props:DetailViewProps) {
  const styles = useStyles();


  const [direct_rate, setDirectRate] = useState({
    rate: props.rate,
    rate_reason: props.rate_reason,
  })


  return (
    <Card className={styles.card}>
      <CardHeader
        header={ <Text size={500}>상세보기</Text>}
      >

      </CardHeader>

      { props.query ?

      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell className="w-48"><InfoLabel info="문답을 식별하기 위한 번호 입니다">일련번호</InfoLabel></TableCell>
            <TableCell><Text className="w-full">{props.id}</Text></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><InfoLabel info="문답을 정확하게 찾기 위한 식별자 입니다">uuid</InfoLabel></TableCell>
            <TableCell><Text className="w-full">{props.uuid}</Text></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>등록일</TableCell>
            <TableCell>{props.date}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-20">질문</TableCell>
            <TableCell>{props.query}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>답변</TableCell>
            <TableCell><Textarea className="w-full h-48" value={props.answer}></Textarea></TableCell>
          </TableRow>
          <TableRow>
            <TableCell><InfoLabel info={<Text className="w-64">AI를 이용하여 질문과 답변을 평가 한 결과입니다.<br/>YES=적절한 답변<br/>NO=정보부족<br/>ELSE=검토가 필요한 답변</Text>}>AI 평가</InfoLabel></TableCell>
            <TableCell>
              <div className="flex flex-row justify-between">
              <div><RateIcon rate={direct_rate.rate} /></div>
              <Button onClick={async() => {
                const {code, message, rate_type, rate_reason} = await api.rate.rate_single('kaai_poc', props.uuid)
                if (code != 0) {
                  alert(`error ${message}`)
                  return;
                }
                setDirectRate({
                    rate: rate_type,
                    rate_reason: rate_reason
                  })

              }}>평가하기</Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><InfoLabel info={<Text>AI 평가가 YES가 아닌경우, 평가 결과에 대한 상세 이유를 나타냅니다</Text>}>평가 이유</InfoLabel></TableCell>
            <TableCell>{direct_rate.rate ? direct_rate.rate_reason : <Text className="text-red-600">아직 평가되지 않았습니다</Text>}</TableCell>
          </TableRow>
          { 
          /*
          <TableRow>
            <TableCell>별점</TableCell>
            <TableCell><Rating/></TableCell>
          </TableRow>
          */
          }

        </TableBody>
      </Table>
      :
      <></>
      }
    </Card>
  )
}