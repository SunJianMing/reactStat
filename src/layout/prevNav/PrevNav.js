import S from './style.scss'
import {withRouter} from 'react-router-dom'

 class PrevPage extends React.Component {
    constructor(props){
        super(props)

    }


    render(){

        let {history} = this.props

        return (
            <div
             className={`${S.prev}`}
             onClick={history.goBack}
             >返回上一层</div>
         )
    }
}
export default withRouter(PrevPage)
