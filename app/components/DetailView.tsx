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


import { Rating, RatingProps } from "@fluentui/react-components";


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
  query?:string,
  answer:string,
  rate:string,
  rate_reason:string,
  date:string,
}

export default function DetailView(props:DetailViewProps) {
  const styles = useStyles();
  const items = [
    {
      id: 37,
      query:"querstion"
    }

  ]
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
            <TableCell className="w-20">질문</TableCell>
            <TableCell>{props.query}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>답변</TableCell>
            <TableCell><Textarea className="w-full h-48" value={props.answer}></Textarea></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>AI 평가</TableCell>
            <TableCell>
              <div className="flex flex-row justify-between">
              <div><RateIcon rate={props.rate} /></div>
              <Button>평가하기</Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>평가 이유</TableCell>
            <TableCell>{props.rate ? props.rate_reason : <Text className="text-red-600">아직 평가되지 않았습니다</Text>}</TableCell>
          </TableRow>
          { 
          /*
          <TableRow>
            <TableCell>별점</TableCell>
            <TableCell><Rating/></TableCell>
          </TableRow>
          */
          }
          <TableRow>
            <TableCell>등록일</TableCell>
            <TableCell>{props.date}</TableCell>
          </TableRow>

        </TableBody>
      </Table>
      :
      <></>
      }
    </Card>
  )
}