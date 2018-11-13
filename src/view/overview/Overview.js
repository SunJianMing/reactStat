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
                value: 5406456
            }, {
                name: '病原报告',
                value: 456456
            }, {
                name: '常规体检',
                value: 456456,
            }, {
                name: '免疫组学',
                value: 5406456
            }, {
                name: '无创肠癌筛查',
                value: 456456
            }, {
                name: '眼底OCT',
                value: 456456
            }, {
                name: 'HPV分型基因',
                value: 5406456
            }, {
                name: '肠道微生物',
                value: 456456
            }, {
                name: '生化报告',
                value: 456456
            }, {
                name: '睡眠报告',
                value: 5406456
            }, {
                name: '体测报告',
                value: 456456
            }, {
                name: '心理测评',
                value: 456456
            }, {
                name: '颜质检测',
                value: 364587
            }]
        this.setState({
            barData
        })
    }
  render(){
      let {barData} = this.state
    return (
      <div className={`clearfix watermark`}>
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
