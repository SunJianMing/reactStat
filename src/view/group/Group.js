import NavTitle from 'layout/topTitle/TopTitle'
import PieList from 'layout/pie/PieList'
import S from './style.scss'
export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      navData:{},
      pieData:[]
    }
  }
  componentDidMount(){
    let {location} = this.props
    let {pathname} = location;
    switch (pathname) {
      case '/pathogen':
        this.setState({
          navData:{
            name:'病原传感染篇',
            english:'The pathogens spread the infection',
            index:'02'
          },
          pieData:[
            {
                name: 'HPV阳性',
                value: 90,
                sum: 200,
                details:true
            }, {
                name: '幽门螺旋杆菌',
                value: 90,
                sum: 200,
                isSecret: true
            }, {
                name: '乙肝病毒感染',
                value: 90,
                sum: 200,
                isSecret: true
            }, {
                name: '丙肝病毒感染',
                value: 90,
                sum: 200,
                isSecret: true
            }, {
                name: 'HIV病毒感染',
                value: 90,
                sum: 200,
                isSecret: true
            }, {
                name: 'EB病毒感染',
                value: 90,
                sum: 200,
                isSecret: true
            }
          ]
        })
        break;
        case '/tumor':
          this.setState({
            navData:{
              name:'肿瘤篇',
              english:'The pathogens spread the infection',
              index:'03'
            },
            pieData:[
              {
                  name: '遗传性肿瘤高风险',
                  value: 90,
                  sum: 200,
                  url: 'dddddd'
              }, {
                  name: '肠癌早晒阳性',
                  value: 90,
                  sum: 200,
                  isSecret: true
              }, {
                  name: '乳腺癌患者',
                  value: 90,
                  sum: 200,
                  isSecret: true
              }, {
                  name: '肿瘤患者',
                  value: 90,
                  sum: 200,
                  isSecret: true
              }, {
                  name: '肺癌患者',
                  value: 90,
                  sum: 200,
                  isSecret: true
              }, {
                  name: '结直肠癌患者',
                  value: 90,
                  sum: 200,
                  isSecret: true
              }
            ]
          })
          break;
          case '/blood':
            this.setState({
              navData:{
                name:'泛血管篇',
                english:'Vitamin testingticle',
                index:'04'
              },
              pieData:[
                {
                    name: '劲动脉斑块',
                    value: 90,
                    sum: 200,
                    url: 'dddddd'
                }, {
                    name: '遗VB1险',
                    value: 90,
                    sum: 200,
                    isSecret: true
                }, {
                    name: '遗传性高血压高风险',
                    value: 90,
                    sum: 200,
                    isSecret: true
                }, {
                    name: '遗传性高血糖高风险',
                    value: 90,
                    sum: 200,
                    isSecret: true
                }, {
                    name: '遗传性高血脂高风险',
                    value: 90,
                    sum: 200,
                    isSecret: true
                }, {
                    name: '高血压',
                    value: 90,
                    sum: 200,
                    isSecret: true
                }, {
                    name: '高血糖',
                    value: 90,
                    sum: 200,
                    isSecret: true
                }, {
                    name: '高尿酸',
                    value: 90,
                    sum: 200,
                    isSecret: true
                }, {
                    name: '高血脂',
                    value: 90,
                    sum: 200,
                    isSecret: true
                }, {
                    name: '肥胖',
                    value: 90,
                    sum: 200,
                    isSecret: true
                }, {
                    name: '过重',
                    value: 90,
                    sum: 200,
                    isSecret: true
                }, {
                    name: '过轻',
                    value: 90,
                    sum: 200,
                    isSecret: true
                }, {
                    name: '非常肥胖',
                    value: 90,
                    sum: 200,
                    isSecret: true
                }, {
                    name: '体脂率超标',
                    value: 90,
                    sum: 200,
                    isSecret: true
                }
              ]
            })
            break;
            case '/across':
              this.setState({
                navData:{
                  name:'跨组学篇',
                  english:'Light omics article',
                  index:'05'
                },
                pieData:[
                  {
                      name: '免疫超龄',
                      value: 90,
                      sum: 200,
                      url: 'dddddd'
                  }, {
                      name: '免疫逆龄',
                      value: 90,
                      sum: 200,
                      isSecret: true
                  }, {
                      name: '颜质超龄',
                      value: 90,
                      sum: 200,
                      isSecret: true
                  }, {
                      name: '颜质逆龄',
                      value: 90,
                      sum: 200,
                      isSecret: true
                  }, {
                      name: '眼底阳性',
                      value: 90,
                      sum: 200,
                      isSecret: true
                  }, {
                      name: '代谢指标',
                      value: [62,88],
                      sum: 200,
                      isSecret: true
                  }
                ]
              })
              break;
      default:

    }
  }
  render(){
    let {navData,pieData} = this.state
    return (
      <div className='clearfix watermark'>
        <NavTitle {...navData}/>
        <PieList {...{
          pieData
        }}/>
      </div>
    )
  }
}
