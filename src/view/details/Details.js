import NavTop  from 'layout/topTitle/TopTitle'
import PieList from 'layout/pie/PieList'

export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      navData:null,
      pieData:[]
    }
  }
  componentDidMount(){
   
    let {match:{params:{name}}} = this.props
    let english;
    if(name === 'HPV阳性'){
      english = 'HPV positive'
    }
    let pieData = [
          {
              name: 'HPV16亚型',
              value: 90,
              sum: 200,
              details: true
          }, {
              name: 'HPV31亚型',
              value: 100,
              sum: 250,
              isSecret: true
          }, {
              name: 'HPV35亚型',
              value: 48,
              sum: 200,
              details: true
          }, {
              name: 'HPV45亚型',
              value: 499,
              sum: 2999
          }, {
              name: 'HPV52亚型',
              value: 54,
              sum: 370
          }, {
              name: 'HPV58亚型',
              value: 43,
              sum: 250
          }, {
              name: 'HPV66亚型',
              value: 43,
              sum: 250
          }]
      this.setState({
        pieData,
        navData:{
          name,
          english
        }
      })
  }
  render(){

    let {match:{params:{name}}} = this.props

    let {navData,pieData} = this.state
    return (
      <div className='clearfix watermark'>
        <NavTop {...navData}/>
        <PieList {...{pieData,hasDeta:true}}/>
      </div>
    )
  }
}
