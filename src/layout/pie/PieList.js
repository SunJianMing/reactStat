import S from './style.scss'
import Pie from './Pie'
// import Year from 'components/year/Year'
export default class extends React.Component{
  constructor(props){
    super()
    this.state = {
      colors:['#168BF8','#4651C4','#D65054','#03BE71','#FEDB64','#FE9364','#50D66C','#46BDC4','#506CD6','#165DFD','#D650CE','#50B8D6','#FC7133']
    }
   
  }
  
  
  render(){
    let {pieData,details,hasDeta} = this.props;
    let {colors} = this.state;
    let pies = pieData.map((elt,i)=>{
     
      let color = (typeof elt.value  === 'object')?['#396FA6','#50B8D6']:[colors[i%13]]
      return <Pie {...{
        name:elt.name,
        value:elt.unusual,
        sum:elt.value,
        color:color,
        details:elt.details,
        secret:elt.secret,
        hasDeta
      }}
      key={i}
    />
    })
    let mt = pieData.length>7?S.mt:''
    return (
      <div className={`${S.pieBox} ${mt}`}>
          
          {pies}
      </div>
    )
  }

}
