import {Link} from 'react-router-dom';
import S from './style.scss';
export default function(){
  return (
    <div className={S.home}>
      <div className={S.container}>
        <div className={S.logo}>
          <span><img src={require('./img/logo1.png')} alt=""/></span>
          <i></i>
          <span>
            <img src={require('./img/logo2.png')} alt=""/>
          </span>
        </div>
        <div className={S.content}>
            <div className={S.top_title}>
              <span className={S.top_text}>2018</span>
              <span className={S.top_english}>Accurate<br/> histological evaluation</span>
            </div>
            <div className={S.title}>
              <div>精准组学评估</div>
              <span>Display of positive results</span>
            </div>
            <div className={S.small_title}><i></i><span>阳性结果展示</span><i></i></div>
        </div>
        <Link to='/types' className={S.button}>进入报告</Link>
      </div>
    </div>
  )
}
