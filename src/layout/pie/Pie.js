import S from './style.scss'
export default class extends React.Component{

  componentDidMount(){
    let {name,value,sum,color} = this.props

    let pieBox = this.refs.svg
    let size = localStorage.getItem('rem')

    let svg = d3.select(pieBox).append('svg')

    let arcPath = d3.svg.arc()
                .innerRadius(0)
                .outerRadius(size/2)
                .startAngle(0)
                .endAngle((d)=>{
                  console.log(d);
                  return (d / sum) * 360 * Math.PI / 180
                })
    let g = svg.append('g')
                .attr('transform','translate('+size/2+','+size/2+')')
                .datum(value)
                .append('path')
                .attr('fill',color)
                .attr('d',d=>{
                  return arcPath(d)
                })


  }

  render(){
    let {name,value,sum} = this.props
    return (
      <div className={S.pie}>
        <div className={S.svg} ref='svg'></div>
        <div className={S.header}>
          <span className={S.name}>{name}</span>
          <span>{value/sum*100+'%'}</span>
        </div>
      </div>
  )
  }
}
