import TopNav from 'layout/topTitle/TopTitle'
import Bar from 'components/overview/OverviewBar'
import S from './style.scss'



export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            barData:[]
        }
    }
    componentDidMount(){
        let barData = [
            {
                name: '影像报告',
                value: 456456,
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
            }, {
                name: 'HPV分型基因',
                value: 3156456,
                sum: 8000000
            }, {
                name: '肠道微生物',
                value: 3606456,
                sum: 8000000
            }, {
                name: '生化报告',
                value: 4056456,
                sum: 8000000
            }, {
                name: '睡眠报告',
                value: 4506456,
                sum: 8000000
            }, {
                name: '无创肠癌筛查',
                value: 1356456,
                sum: 8000000
            }, {
                name: '眼底OCT',
                value: 1806456,
                sum: 8000000
            }, {
                name: 'HPV分型基因',
                value: 3156456,
                sum: 8000000
            }, {
                name: '肠道微生物',
                value: 3606456,
                sum: 8000000
            }]
        this.setState({
            barData
        })
    }
  render(){
      let {barData} = this.state
    return (
      <div className={`clearfix ${S.overview} watermark`}>
          <TopNav {...{
            name:'报告情况总览',
            english:'Overview of the report',
            index:'01'
          }}/>
          <Bar {...{
              barData
          }}/>
      </div>
    )
  }
}
