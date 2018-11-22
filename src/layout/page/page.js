import React  from 'react';
import PrevNav from 'layout/prevNav/PrevNav'
import Footer from 'layout/footer/Footer'
import TopTitle from 'layout/topTitle/TopTitle'

import S from './style.scss'

export default class Page extends React.Component {
    
    render(){
        let {nowDate,location:{search},navData} = this.props   
        let isPrev = search?false:true     
        return (
            <div className={S.layout}>
                {isPrev && (<PrevNav/>)}
                {navData && (<TopTitle {...navData} />)}
                <div className={S.page}>
                    {this.props.children}
                </div>
                <Footer {...{
                    nowDate
                }}/>
            </div>    
          
           
           
        )
    }
}