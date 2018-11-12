import S from './style.scss'
import Pie from './Pie'
export default class extends React.Component{
  render(){
    let {pieData,details,hasDeta} = this.props;
    let colors = ['#168BF8','#4651C4','#D65054','#03BE71','#FEDB64','#FE9364','#50D66C','#46BDC4','#506CD6','#165DFD','#D650CE','#50B8D6','#FC7133']
    let pies = pieData.map((elt,i)=>{
      let color = (typeof elt.value  === 'object')?[colors[i%13],colors[i%13+1]]:[colors[i%13]]
      return <Pie {...{
        name:elt.name,
        value:elt.value,
        sum:elt.sum,
        color:color,
        details:elt.details,
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
