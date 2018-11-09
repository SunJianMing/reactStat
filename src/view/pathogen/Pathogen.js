import S from './style.scss'
import TopNav from 'layout/topTitle/TopTitle'
import PieCharts from 'layout/pie/PieList'

export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pieData:[]
    }
  }
  componentDidMount(){
    let pieData = [
        {
            name: '影像报告',
            value: 4564,
            sum: 8000,
            url: 'dddddd'
        }, {
            name: 'HIV病毒感染',
            value: 456456,
            sum: 800000,
            isSecret: true
        }, {
            name: '常规体检',
            value: 906456,
            sum: 1000000
        }, {
            name: '免疫组学',
            value: 906456,
            sum: 2000000
        }, {
            name: '无创肠癌筛查',
            value: 1356456,
            sum: 8000000
        }, {
            name: '眼底OCT',
            value: 1806456,
            sum: 8000000
        }]
    this.setState({
      pieData
    })
  }
  render(){
    let {pieData} = this.state

    return (
      <div className={`${S.pathogen} clearfix watermark`}>
          <TopNav {...{
            name:'病原传感染篇',
            english:'The pathogens spread the infection',
            index:'02'
          }}/>
          <PieCharts {...{pieData}}/>
      </div>
    )
  }
}
