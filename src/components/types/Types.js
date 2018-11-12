import Item from './Item'
import S from './style.scss'
export default function({types}){
  let item = types.map((elt,i)=>{

      let {name,icon,url} = elt;
      return (<Item {...{
        name,
        icon,
        url
      }}
      key={i}
    />)
  })
  return (
    <div className={S.types}>
      {item}
    </div>
  )
}
