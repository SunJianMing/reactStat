import TopNav from 'layout/topTitle/TopTitle'
import S from './style.scss'
export default class extends React.Component {
  render(){
    return (
      <div className={`clearfix ${S.overview}`}>
          <TopNav {...{
            name:'报告情况总览',
            english:'Overview of the report',
            index:'01'
          }}/>
      </div>
    )
  }
}
