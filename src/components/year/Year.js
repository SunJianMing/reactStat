import React from 'react';
import S from './style.scss'
export default class extends React.Component {
    constructor(){
        super()
        this.state = {
            open:false
        }
        this.changeOpen = this.changeOpen.bind(this)
        this.closeOpen = this.closeOpen.bind(this)
    }
    changeOpen(){
        let {open} = this.state;
        this.setState({
            open:!open
        })
    }
    closeOpen(){
        this.setState({
            open:false
        })
    }
    componentDidMount(){
        document.addEventListener('click',this.closeOpen)
    }
    componentWillUnmount(){
        document.removeEventListener('click',this.closeOpen)
    }
    render(){
        let {data,checked,changeYear} = this.props;
        let {open} = this.state;
        return (
            <div className={`${S.layout} ${open?S.active:''}`} onClick={
                (ev)=>{
                    ev.nativeEvent.stopImmediatePropagation()
                    this.changeOpen()
                   
                }
            }>
                <span className={S.value}>{checked}年</span>
                <ul className={S.list}>
                    {data.map((elt,i)=>{
                        return (
                            <li key={i} onClick={
                                ev=>{
                                    console.log(333);
                                    
                                    ev.stopPropagation()
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