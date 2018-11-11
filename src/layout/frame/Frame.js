import Home from 'view/home/Home'

import Types from 'view/types/Types'
import Overview from 'view/overview/Overview'
import Pathogen from 'view/pathogen/Pathogen'
import Details from 'view/details/Details'

import Prev from 'layout/prevNav/PrevNav'

import {Route} from 'react-router-dom'

import S from './style.scss'
export default class extends React.Component {
   render(){
     return (
       <div className='root'>

         <Route path='/' exact component={Home}/>
         <Route path='/types' exact render={props=>(
             <div className={S.layout}>
                 <Prev/>
                 <Types/>
             </div>

         )} />
         <Route path='/overview' exact render={
             props=>(
                 <div className={S.layout}>
                     <Prev/>
                     <Overview/>
                 </div>

             )
         }/>
         <Route path='/pathogen' exact render={
             props=>(
                 <div className={S.layout}>
                     <Prev/>
                     <Pathogen/>
                 </div>
             )
         }/>
         <Route path='/details/:name'  component={Details}/>
       </div>
     )
   }
}
