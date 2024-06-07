"use client"
import { Text, Card, CardHeader, Button, Caption1 } from "@fluentui/react-components";
import RatePrompt from "./RatePrompt";


type Props = {

}

type DataProps = {
  header:string
  description:string
}

const data:Array<DataProps> = [
  {header: "AI 언어 모델", description: "평가를 위한 AI 모델에 대한 기본 설정"},
  {header: "평가 프롬프트", description: "평가를 위한 AI 모델이 사용하는 프롬프트 정보를 관리합니다"},
]

function Item(props: DataProps) {
  return (
    <>
      <Card appearance="filled-alternative" onClick={() => {
        console.log('click')

      }}>
        <CardHeader
          header={<Text size={400}>{props.header}</Text>}
          description={<Caption1>{props.description}</Caption1>}
          action={<Button appearance="transparent">...</Button>}
        />
      </Card>
    </>
  );
}
export default function SettingsTable() {
  return (
    <>
      <ul>
        {
          data.map((item) => {
            return <li key={item.header}><Item {...item}/></li>
          })
        }
        <li>
        </li>
      </ul>
      <RatePrompt></RatePrompt>
    </>
  );
}
