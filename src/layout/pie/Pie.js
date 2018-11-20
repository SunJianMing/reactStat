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
    let {name,value,sum,color,secret} = this.props
    let pieBox = this.refs.svg
    let size = localStorage.getItem('rem')

    let svg = d3.select(pieBox).classed(S.secret,function(){
      if(secret){
        d3.select(this).append('div')
      }else{
        d3.select(this).append('svg').attr('viewBox',`0 0 ${size} ${size}`)
      }
      return secret
    })


    let arcPath = d3.arc()
                .innerRadius(0)
                .outerRadius(size/2)

    //转换成圆弧数据
    let arcData
    if(typeof value === 'object'){
      arcData = [{
          startAngle:0,
          endAngle:(value[0] / sum) * 360 * Math.PI / 180
      },{
          startAngle:((value[0] / sum) * 360 * Math.PI / 180),
          endAngle:(value[1] / sum) * 360 * Math.PI / 180+((value[0] / sum) * 360 * Math.PI / 180)
      }]
    }else{
      arcData = [{
          startAngle:0,
          endAngle:(value / sum) * 360 * Math.PI / 180
      }]
    }

    // 圆弧
    let g = svg.select('svg').selectAll('g.arc')
            .data(arcData)
            .enter()
            .append('g')
            .attr('transform','translate('+size/2+','+size/2+')')



    let arcTran = g.append('path')
                .attr('fill',(d,i)=>{
                  return color[i];
                })
                .transition()
                .delay((d,i)=>{
                    return i*(arcData.length>1?1000:2000)
                })
                .duration(arcData.length>1?1000:2000)
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
                .each(function(d,i){
                        if(secret){
                          d3.select(this)
                              .append('span')
                              .attr('style',(d,i)=>{
                                  return `color:${color}`
                              })
                              .text('保密')
                        }else{
                          if(d.length){
                              d3.select(this)
                                  .selectAll('span')
                                  .data(d)
                                  .enter()
                                  .append('span')
                                  .attr('class',S.metabolic)
                                  .attr('style',(d,i)=>{
                                      return `color:${color[i]}`
                                  })
                                  .text(0+'%')
                          }else{
                              d3.select(this)
                                  .append('span')
                                  .attr('style',(d,i)=>{
                                      return `color:${color}`
                                  })
                                  .text(0+'%')
                          }
                        }
                  })
                .transition()
                .duration(2000)
                .tween('text',function(d){
                  if(!secret){
                    if(typeof d === 'object'){
                        return (t)=>{
                            d3.select(this)
                                .selectAll('span')
                                .text((s,i)=>{
                                    return (t*s/sum*100).toFixed(2)+'%'
                                })
                        }
                    }else{
                        return (t)=>{
                            d3.select(this)
                            .select('span')
                            .text((t*d/sum*100).toFixed(2)+'%')
                        }
                    }
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
    let {name,value,sum,details,hasDeta,secret} = this.props
    let {inMouse} = this.state;
    let active = inMouse?S.active:'';
    let hasStat = null;
    if(value.length){
        hasStat = (
            <div className={`${S.stat} ${S.stat_icon}`}>
                <span>偏高人数 <i>{value[0]}</i></span>
                <span>偏低人数 <i>{value[1]}</i></span>
            </div>
        )
    }else{
        hasStat = (
            <div className={S.stat}>
                <span>异常人数 <i>{secret?'保密':value}</i></span>
                <span>统计人数 <i>{sum}</i></span>
            </div>
        )
    }
    return (
      <div className={`${S.pie} ${active}`}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          >
        <div className={S.svg} ref='svg'></div>
        <div className={S.header} ref='header'>
          <span className={S.name}>{name}</span>

        </div>

            {hasStat}

        {details && (<Link to={`/details/${name}`} replace={hasDeta} className={S.details}>详情</Link>)}
      </div>
  )
  }
}
