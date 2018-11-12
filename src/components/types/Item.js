import S from './style.scss'
import {Link,withRouter} from 'react-router-dom'

 class Item extends React.Component {
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
    let {name,icon,url,history} = this.props

    let {active} = this.state
    return (
      <Link to={{
        pathname:url,
      }}
      >
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

export default withRouter(Item)
