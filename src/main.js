import {HashRouter as Router,Route} from 'react-router-dom'
//首页
import Frame from 'layout/frame/Frame';


//css reset
// import 'common/css/common.scss'
import 'common/css/common.css'
import 'common/js/common.js'

ReactDom.render(
    <Router basename='/'>
        <Route path='/' component={Frame} />
    </Router>
  ,document.getElementById('root'))
