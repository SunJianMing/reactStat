import TopNav from 'layout/topTitle/TopTitle'
import Bar from 'components/overview/OverviewBar'
import S from './style.scss'

import url from 'common/data/config.js'





export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            barData:[]
        }
    }
    componentDidMount(){
        $.get(`${url}/reportoverview/list`)
        .then(({result,data})=>{
           if(result === 200){
               this.setState({
                   barData:data
               })
           } 
        })
    }
  render(){
      let {barData} = this.state
    //   barData = []
    return (
      <div className={`clearfix watermark`}>
          <TopNav {...{
            name:'报告情况总览',
            english:'Overview of the report',
            index:'01'
          }}/>
          {barData.length ? (<Bar {...{
              barData
          }}/>):(<div className={S.loading}>图表正在生产中</div>)}
          
      </div>
    )
  }
}
