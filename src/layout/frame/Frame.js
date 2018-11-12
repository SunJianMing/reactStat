import Home from 'view/home/Home'
import Types from 'view/types/Types'
import Overview from 'view/overview/Overview'
import Group from 'view/group/Group'
import Details from 'view/details/Details'


import Prev from 'layout/prevNav/PrevNav'
import Footer from 'layout/footer/Footer'
import {Route} from 'react-router-dom'

import S from './style.scss'
import url from 'data/config.js'
export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      nowDate:null
    }

  }


  componentDidMount(){

    $.post(`${url}//bhapp/getSystemTime`)
    .then(({data,result})=>{
      if(result === 200){
        let D = new Date(data)
        let y = D.getFullYear()
        let m = D.getMonth()+1
        let d = D.getDate()
        this.setState({
          nowDate:`${y}年${m}月${d}日`,
          pieData:[],
          navData:null
        })

      }
    })
  }

   render(){
    let {location} = this.props;
    let {nowDate,pieData,navData} = this.state;

    let {search} = location
    let hasPrev = search?'':(<Prev/>);

    let group_url = ['/pathogen','/tumor','/blood','/across'];
    let groups = group_url.map((elt,i)=>{
      return (
        <Route path={elt} render={
          (props)=>(
            <div className={S.layout}>
              {hasPrev}
              <Group {...props}/>
              <Footer {...{
                nowDate
              }}/>
            </div>
          )
        }
          key={i}
        />
      )
    })
     return (
       <div className='root'>
         <Route path='/' exact component={Home}/>
         <Route path='/types' exact render={props=>(
             <div className={S.layout}>
                 {hasPrev}
                 <Types {...{
                   getGroupData:this.getGroupData
                 }}/>
               <Footer {...{
                 nowDate
               }}/>
             </div>

         )} />
         <Route path='/overview' exact render={
             props=>(
                 <div className={S.layout}>
                     {hasPrev}
                     <Overview/>
                     <Footer {...{
                       nowDate
                     }}/>
                 </div>
             )
         }/>
          {groups}
        <Route path='/details/:name' render={
          (props)=>(
            <div className={S.layout}>
              {hasPrev}
              <Details {...props}/>
              <Footer {...{
                nowDate
              }}/>
            </div>
          )
        }/>
       </div>
     )
   }
}
