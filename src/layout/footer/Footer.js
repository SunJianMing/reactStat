import S from './style.scss'


export default function Footer(props){
    let {nowDate,noneMargin} = props;
    return (
      <div className={`${S.footer} ${noneMargin?S.margin:''}` }>
        <span>·数据更新截止到{nowDate}·</span>
      </div>
    )
}

Footer.propTypes = {
  nowDate:PT.string
}
