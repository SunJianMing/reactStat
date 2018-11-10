import Home from 'view/home/Home'

import Types from 'view/types/Types'
import Overview from 'view/overview/Overview'
import Pathogen from 'view/pathogen/Pathogen'



import Details from 'view/details/Details'


import {Route} from 'react-router-dom'
export default class extends React.Component {
   render(){
       let {location:{pathname}} = this.props
       let prev = pathname !== '/' ? true:false
     return (
       <div className='root'>

         <Route path='/' exact component={Home}/>
         <Route path='/types' exact component={Types} />
         <Route path='/overview' exact component={Overview}/>
         <Route path='/pathogen' exact component={Pathogen}/>
         <Route path='/details/:name'  component={Details}/>
       </div>
     )
   }
}
