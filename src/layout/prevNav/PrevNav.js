import S from './style.scss'


export default class PrevPage extends React.Component {
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
        let {history:{go}} = this.props
        return (
            <div
             className={`${S.prev} ${active}`}
             onMouseDown={this.mouseDown}
             onMouseUp={this.mouseUp}
             onClick={()=>go(-1)}
             >返回上一层</div>
         )
    }
}
// PrevPage.defaultProps = {
//     his:function(){
//         history.back()
//     },
//     show:true
// }
