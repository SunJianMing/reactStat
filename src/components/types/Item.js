import S from './style.scss'
import {Link} from 'react-router-dom'
export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active:false
    }
    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
  }
  mouseEnter(){
      this.setState({
        active:true
      })
  }
  mouseLeave(){
      this.setState({
        active:false
      })
  }
  render(){
    let {name,icon,url} = this.props

    let {active} = this.state
    return (
      <Link to={{
        pathname:url,
        state:{
            isBack:true
        }
      }}>
        <div className={`${S.item} ${active?S.active:''}`} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
          <b></b>
          <div className={S.content}>
            <i className={S[icon]}></i>
            <span>{name}</span>
          </div>
        </div>
      </Link>
    )
  }
}
