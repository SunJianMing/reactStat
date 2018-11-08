import S from './style.scss'


export default function({name,english,index}){
  let serial;
  serial = index?true:false;
  return (
    <div className={S.title}>
      <div className={S.content}>
        {serial && (<div className={S.serial}>{index}</div>)}
        <span className={S.text}>{name}</span>
        <span className={S.english}>{english}</span>
      </div>
    </div>
  )
}
