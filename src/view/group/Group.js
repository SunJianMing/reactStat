import NavTitle from 'layout/topTitle/TopTitle'
import PieList from 'layout/pie/PieList'
import S from './style.scss'
import url from 'common/data/config.js'


export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      navData:{},
      pieData:[]
    }
  }
  componentDidMount(){
    let {location:{pathname}} = this.props
  
    switch (pathname) {
      case '/pathogen':
        this.setState({
          pieData:[
            {
                name: '乙肝表面抗原',
                value: 90,
                sum: 200,
                details:true
            }, {
                name: '丙肝',
                value: 90,
                sum: 200
            }, {
                name: '人免疫缺陷病毒抗体',
                value: 90,
                sum: 200
            }, {
                name: '梅毒',
                value: 90,
                sum: 200
            }
          ]
        })
        break;
        case '/checkups':
          this.setState({
            pieData:[
              {
                  name: '空腹血糖',
                  value: 90,
                  sum: 200,
                  details:true
              }, {
                  name: 'BMI',
                  value: 90,
                  sum: 200
              }, {
                  name: '血压',
                  value: 90,
                  sum: 200
              }, {
                  name: '血尿酸',
                  value: 90,
                  sum: 200
              }, {
                  name: '甘油三酯',
                  value: 90,
                  sum: 200
              }, {
                name: '低密度胆固醇',
                value: 90,
                sum: 200
            }, {
                name: '总胆固醇',
                value: 90,
                sum: 200
            }, {
                name: '体脂肪率',
                value: 90,
                sum: 200
            }, {
                name: 'C13呼气试验',
                value: 90,
                sum: 200
            }
            ]
          })
          break;
          case '/across':
            this.setState({
              pieData:[
                {
                    name: '免疫超龄',
                    value: 90,
                    sum: 200
                }, {
                    name: '免疫逆龄',
                    value: 90,
                    sum: 200,
                }, {
                    name: 'HPV基因检测指标阳性',
                    value: 90,
                    sum: 200,
                }, {
                    name: '眼底阳性',
                    value: 90,
                    sum: 200,
                }, {
                    name: '颜质逆龄',
                    value: 90,
                    sum: 200,
                }, {
                    name: '颜质超龄',
                    value: 90,
                    sum: 200,
                }
              ]
            })
            break;
            case '/Influence':
                $.get('./assets/influence.json')
                .then(({result,data})=>{
                   
                   if(result === 200){
                       this.setState({
                           pieData:data
                       })
                   } 
                    
                })
            
              break;
      default:

    }
  }
  render(){
    let {pieData} = this.state
    return (
     
        
        <PieList {...{
          pieData
        }}/>
     
    )
  }
}
