import Item from './Item'
import S from './style.scss'
export default function({types}){
  let item = types.map((elt,i)=>{

      let {name,icon,path} = elt;
      return (<Item {...{
        name,
        icon,
        path
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
