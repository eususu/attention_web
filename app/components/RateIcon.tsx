import {
  Tag,
  makeStyles,
  tokens,
} from '@fluentui/react-components'
type Props = {
  rate:string
}

const table = {
  'YES': { color: 'green'}
}

const useStyles = makeStyles({
  'ANYTHING': {
  },
  'YES': {
    backgroundColor: tokens.colorStatusSuccessBorder1,
    color: 'white'
  },
  'NO': {
    backgroundColor: tokens.colorStatusWarningBorder2,
    color: 'white'
  },
  'ELSE': {
    backgroundColor: tokens.colorPaletteAnchorBackground2,
  },

})
export default function RateIcon(props:Props) {
  const useStyle = useStyles()
  let style = useStyle.ANYTHING;
  switch(props.rate) {
    case 'YES': style = useStyle.YES; break;
    case 'NO': style = useStyle.NO; break;
    case 'ELSE': style = useStyle.ELSE; break;
  }
  
  return (
    <>
    <Tag className={style}>{props.rate}</Tag>
    </>
  )
}