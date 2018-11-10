import S from './style.scss'
import {Link} from 'react-router-dom'
export default class extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inMouse:false
        }
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)
    }
  componentDidMount(){
    let {name,value,sum,color} = this.props

    let pieBox = this.refs.svg
    let size = localStorage.getItem('rem')

    let svg = d3.select(pieBox).append('svg')

    let arcPath = d3.svg.arc()
                .innerRadius(0)
                .outerRadius(size/2)

    //转换成圆弧数据
    let arcData = [{
        startAngle:0,
        endAngle:(value / sum) * 360 * Math.PI / 180
    }]
    // 圆弧
    let g = svg.append('g')
                .attr('transform','translate('+size/2+','+size/2+')')
                .data(arcData)

    let arcTran = g.append('path')
                .attr('fill',color)
                .transition()
                .duration(2000)
                .attrTween('d',function(d){
                    let i = d3.interpolate(d.startAngle,d.endAngle)
                    return function(t){
                        d.endAngle = i(t)
                        return arcPath(d)
                    }
                })
    //百分比
    let text = d3.select(this.refs.header)
                .datum(value)
                .append('span')
                .attr('class',S.percentage)
                .text(0)
                .attr('style','color:'+color)
                .transition()
                .duration(2000)
                .tween('text',(d)=>{
                    return function(t){
                        d3.select(this)
                            .text((t*d/sum*100).toFixed(2)+'%')
                    }
                })


  }
  onMouseEnter(){
    this.setState({
        inMouse:true
    })
  }
  onMouseLeave(){
    this.setState({
        inMouse:false
    })
  }
  render(){
    let {name,value,sum,details,hasDeta} = this.props
    let {inMouse} = this.state;
    let active = inMouse?S.active:'';
    console.log(hasDeta);
    return (
      <div className={`${S.pie} ${active}`}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          >
        <div className={S.svg} ref='svg'></div>
        <div className={S.header} ref='header'>
          <span className={S.name}>{name}</span>

        </div>
        <div className={S.stat}>
            <span>异常人数 <i>{value}</i></span>
            <span>统计人数 <i>{sum}</i></span>
        </div>
        {details && (<Link to={`/details/${name}`} replace={hasDeta} className={S.details}>详情</Link>)}
      </div>
  )
  }
}
