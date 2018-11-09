import S from './style.scss'
import D3 from 'd3'
export default class extends React.Component {
    componentDidUpdate(){
        let {barData} = this.props
        let bar = this.refs.bar
        console.log(bar);
        let svgW = bar.offsetWidth;
        let svgH = bar.offsetHeight;

        let colors = ['#168BF8','#4651C4','#D65054','#03BE71','#FEDB64','#FE9364','#50D66C','#46BDC4','#506CD6','#165DFD','#D650CE','#50B8D6','#FC7133']

        let rectW = 15
        let size = localStorage.getItem('rem');

        let padding = {top:0,right:0,bottom:.35*size,left:0}

        let xScale = d3.scale.ordinal()
                            .domain(d3.range(barData.length))
                            .rangeRoundBands([0,svgW])




        let xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient('bottom')
                    .tickSize(.10*size,0);

        let yScale = d3.scale.linear()
                      .domain([0,d3.max(barData.map(elt=>{
                        return elt.value
                      }))])
                      .range([svgH-padding.bottom-.98*size,0])
        let yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient('left')




        let svg = d3.select(bar).append('svg')


        let xg = svg.append('g')
                .attr('class','axis')
                .attr('transform','translate('+(0.03*size)+','+(svgH-padding.bottom)+')')
                .call(xAxis)
                .selectAll('text')
                .text((d)=>{
                    return barData[d].name
                })


        // let yg = svg.append('g')
        //         .attr('class','axis')
        //         .attr('transform','translate('+(padding.left+80)+','+(padding.top+.98*size)+')')
        //         .call(yAxis)
        let yg = svg.append('g')
                    .attr('class',S.ygLine)
          let ygLine = yg
                    .append('line')
                    .attr('x1',0.03*size)
                    .attr('y1',0)
                    .attr('x2',0.03*size)
                    .attr('y2',svgH-padding.bottom)
          let xgText = yg.append('text')
                          .attr('x',.15*size)
                          .attr('y',0)
                          .attr('dy','1em')
                          .attr('dx','1em')
                          .attr('font-size','.14rem')
                          .text('(人数)')





          let triangle = yg.append('path')
                            .attr('d','M'+0.03*size+' 0 L'+0.06*size+' '+0.07*size+' L0 '+0.07*size+'Z')
                            .attr('fill','#384863')
                            .attr('stroke-width',1)
                            .attr('stroke','#384863')


        yScale.range([0,svgH-padding.bottom-.98*size])

        var group = svg.append('g')

                    .selectAll('rect')
                    .data(barData)
                    .enter()

        var rect = group.append('rect')
                    .attr('fill',(d,i)=>{
                      return colors[i%13]
                    })
                    .attr('x',(d,i)=>{
                      return padding.left + xScale(i) + (xScale.rangeBand()-0.15*size)/2
                    })
                    .attr('rx',.05*size)
                    .attr('ry',.05*size)
                    .attr('width',xScale.rangeBand()-.76*size)
                    .attr('y',(d,i)=>{
                      return svgH -padding.bottom
                    })
                    .attr('height',(d,i)=>{
                      return  0
                    })
                    .transition()
                    .duration(2000)
                    .attr('y',(d,i)=>{
                      return svgH - yScale(d.value) - padding.bottom
                    })
                    .attr('height',(d,i)=>{
                      return yScale(d.value)
                    })

        let number = 0;
        var text = group.append('text')
                        .attr('stroke','none')
                        .attr('fill',(d,i)=>{
                          return colors[i%13]
                        })
                        .attr('x',(d,i)=>{
                          return padding.left + xScale(i) + (xScale.rangeBand()-0.15*size)/2
                        })
                        .attr('y',(d,i)=>{
                           return svgH  - padding.bottom
                        })
                        .attr('dy','-.19rem')
                        .attr('dx','.5em')
                        .attr('text-anchor','middle')
                        .attr('font-size','.14rem')
                        .text((d,i)=>{
                          return d.value
                        })
                        .transition()
                        .duration(2000)
                        .attr('y',(d,i)=>{
                           return svgH - yScale(d.value) - padding.bottom
                        })


    }
    render(){
        // let svg =
        return (
            <div className={S.overview} ref='bar'>

            </div>
        )
    }
}
