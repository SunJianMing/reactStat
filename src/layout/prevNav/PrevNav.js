import S from './style.scss'
import {withRouter} from 'react-router-dom'

 class PrevPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inMouse:false
        }
        this.mouseDown = this.mouseDown.bind(this)
        this.mouseUp = this.mouseUp.bind(this)
    }
    mouseDown(){
        this.setState({
            inMouse:true
        })
    }
    mouseUp(){
        this.setState({
            inMouse:false
        })
    }
    render(){

        let {inMouse} = this.state;
        let active = inMouse?S.active:''
        let {history} = this.props

        return (
            <div
             className={`${S.prev} ${active}`}
             onMouseDown={this.mouseDown}
             onMouseUp={this.mouseUp}
             onClick={history.goBack}
             >返回上一层</div>
         )
    }
}
export default withRouter(PrevPage)
