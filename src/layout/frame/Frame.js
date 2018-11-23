import Home from 'view/home/Home'
import Types from 'view/types/Types'
import Overview from 'view/overview/Overview'
import Group from 'view/group/Group'
import Details from 'view/details/Details'

import Page from 'layout/page/Page.js'

import {Route} from 'react-router-dom'

import url from 'data/config.js'
export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nowDate: null,
            navData: null
        }

    }
    componentDidMount() {
        $.post(`${url}/bhapp/getSystemTime`)
            .then(({data, result}) => {
                if (result === 200) {
                    let D = new Date(data)
                    let y = D.getFullYear()
                    let m = D.getMonth() + 1
                    let d = D.getDate()
                    this.setState({nowDate: `${y}年${m}月${d}日`, pieData: [], navData: null})

                }
            })
    }

    render() {

        let {nowDate} = this.state;
        let navTitle = [
            {
                path: '/pathogen',
                name: '病原传染篇',
                english: 'The pathogens spread the infection',
                index: '02'
            }, {
                path: '/checkups',
                name: '常规体检',
                english: 'Routine checkups',
                index: '03'
            }, {
                path: '/Influence',
                name: '影响和基因',
                english: 'Influence and genetic',
                index: '05'
            }, {
                path: '/across',
                name: '跨组学篇',
                english: 'Light omics article',
                index: '06'
            },
            {
              name:'微量元素与重金属',
              english:'Trace elements and heavy metals',
              path:'/microelement',
              isYear:true
            },
            {
              name:'维生素检测',
              english:'Vitamin testing',
              path:'/vitamin',
              isYear:true
            },
            {
              name:'氨基酸检测',
              english:'Amino acid detection',
              path:'/amino',
              isYear:true
            },
            {
              name:'荷尔蒙激素',
              english:'hormone',
              path:'/hormone',
              isYear:true
            },
            {
              name:'同型半胱氨酸',
              english:'homocysteine',
              path:'/thcy',
              isYear:true
            },
            {
              name:'褪黑素',
              english:'melatonin',
              path:'/melatonin',
              isYear:true 
            }
        ]
        navTitle = navTitle.map((elt, i) => {
            let {name, english, index, path,isYear} = elt;
            
            
            return (
                <Route
                    path={path}
                    exact
                    render={props => (
                    <Page {...props} {...{nowDate,navData:{ name,english,index}}}>
                        <Group {...props} {...{isYear}}/>
                    </Page>
                )}
                    key={i}/>
            )
        })
        return (

            <div className='root'>
                {/* 首页 */}
                <Route path='/' exact component={Home}/> {/* 矩状图 */}
                <Route
                    path='/overview'
                    render={props => (
                    <Page {...props} {...{nowDate}}>
                        <Overview></Overview>
                    </Page>
                )}/> {/* 一级分类 */}
                <Route
                    path='/types'
                    exact
                    render={props => (
                    <Page
                        {...{ nowDate,navData:{ name:'查看相关', english:'Check the related' } }}
                        {...props}>
                        <Types {...props}/>
                    </Page>
                )}/> {/* 二级分类 */}
                <Route
                    path='/metabolic'
                    exact
                    render={props => (
                    <Page
                        {...{ nowDate,navData:{ name:'代谢检测', english:'Metabolic testing', index:'04' } }}
                        {...props}>
                        <Types {...props} />
                    </Page>
                )}/>
                {/* 三级分类 */}
                {navTitle}
                {/* 三级以后 */}
                <Route path='/details/:name' render={
                  props => (
                    <Page {...props} {...{nowDate}}>
                        <Details {...props}/>
                    </Page>
                  )
                } />

                
            </div>
        )
    }
}
