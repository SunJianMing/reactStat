import TopNav from 'layout/topTitle/TopTitle'
import Types from 'components/types/Types'
import Prev from 'layout/prevNav/PrevNav'
import S from './style.scss'



export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      types:[{
        name:'报告情况总览',
        icon:'overview',
        url:'/overview'
      },{
        name:'病原传染篇',
        icon:'pathogen',
        url:'/pathogen'
      },{
        name:'肿瘤篇',
        icon:'tumor',
        url:'/tumor'
      },{
        name:'泛血管篇',
        icon:'blood',
        url:'/blood'
      },{
        name:'跨组学篇',
        icon:'across',
        url:'/across'
      }]
    }
  }
  render(){
    let {types} = this.state;
    let {getGroupData} = this.props

    return (
      <div className={`clearfix ${S.types}`}>
          {/* {state && <Prev {...{history}}/>} */}
          <TopNav {...{
            name:'查看相关',
            english:'Check the related'
          }}/>
          <Types {...{types,getGroupData}}/>
      </div>
    )
  }
}
