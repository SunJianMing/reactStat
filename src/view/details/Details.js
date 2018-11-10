import TopNav from 'layout/topTitle/TopTitle'
import PieList from 'layout/pie/PieList'
import S from './style.scss'
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
              value: 90,
              sum: 200,
              details: true
          }, {
              name: 'HIV病毒感染',
              value: 100,
              sum: 250,
              isSecret: true
          }, {
              name: '常规体检',
              value: 48,
              sum: 200,
              details: true
          }, {
              name: '免疫组学',
              value: 499,
              sum: 2999
          }, {
              name: '无创肠癌筛查',
              value: 54,
              sum: 370
          }, {
              name: '眼底OCT',
              value: 43,
              sum: 250
          }, {
              name: '眼底OCT',
              value: 43,
              sum: 250
          }]
      this.setState({
        pieData
      })
    }
    render(){
        let {pieData} = this.state
        let {match:{params:{name}}} = this.props
        return (
            <div className={`${S.details} clearfix watermark`}>
                <TopNav {...{
                    name,
                    english:'ssss'
                }}/>
                <PieList {...{
                    pieData,
                    hasDeta:true
                }}/>
            </div>
        )
    }
}
