import {
  Tag,
  makeStyles,
  tokens,
} from '@fluentui/react-components'
type Props = {
  rate:string|null
}

const table = {
  'YES': { color: 'green'}
}

const useStyles = makeStyles({
  'ANYTHING': {
    backgroundColor: tokens.colorPaletteAnchorBackground2,
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
  const rate = props.rate ?? '미평가';
  let style;
  switch(props.rate) {
    case 'YES': style = useStyle.YES; break;
    case 'NO': style = useStyle.NO; break;
    case 'ELSE': style = useStyle.ELSE; break;
    default: style = useStyle.ANYTHING; break;
  }
  
  return (
    <>
    <Tag className={style}>{rate}</Tag>
    </>
  )
}