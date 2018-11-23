import React from 'react';
import S from './style.scss'
export default class extends React.Component {
    constructor(){
        super()
        this.state = {
            open:false
        }
        this.changeOpen = this.changeOpen.bind(this)
    }
    changeOpen(){
        let {open} = this.state;
        this.setState({
            open:!open
        })
    }
    render(){
        let {data,checked,changeYear} = this.props;
        let {open} = this.state;
        return (
            <div className={`${S.layout} ${open?S.active:''}`} onClick={
                (ev)=>{
                    ev.stopPropagation()
                    ev.preventDefault()
                    this.changeOpen()
                }
            }>
                <span className={S.value}>{checked}年</span>
                <ul className={S.list}>
                    {data.map((elt,i)=>{
                        return (
                            <li key={i} onClick={
                                ev=>{
                                    changeYear(elt)
                                }
                            }>{elt}年</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}