import Home from 'view/home/Home'
import Types from 'view/types/Types'
import Overview from 'view/overview/Overview'
import {Route} from 'react-router-dom'
export default class extends React.Component {
   render(){
     return (
       <div className='root'>
         <Route path='/' exact component={Home}/>
         <Route path='/types' exact component={Types}/>
         <Route path='/overview' exact component={Overview}/>
       </div>
     )
   }
}
