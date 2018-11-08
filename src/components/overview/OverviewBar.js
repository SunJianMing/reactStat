import S from './style.scss'
import D3 from 'd3'
export default class extends React.Component {
    componentDidUpdate(){
        let {barData} = this.props
        let bar = this.refs.bar
        let svg = d3.select(bar).append('svg')

        let svgW = bar.offsetWidth
        let svgH = bar.offsetHeight

        let fontSize = d3.select('html').attr('style')
        let reg = /font-size:\s(\d+\.\d+)/

        let res = fontSize.match(reg)[1]




        

    }
    render(){
        // let svg =
        return (
            <div className={S.overview} ref='bar'>

            </div>
        )
    }
}
