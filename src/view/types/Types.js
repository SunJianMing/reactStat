import Types from 'components/types/Types'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            types: []
        }
       
    }
    componentDidMount() {
        let {location: {
                pathname
            }} = this.props
        let types = []
        switch (pathname) {
            case '/types':
                types = [
                    {
                        name: '报告情况总览',
                        icon: 'overview',
                        path:'/overview'
                    }, {
                        name: '病原传染篇',
                        icon: 'pathogen',
                        path: '/pathogen'
                    }, {
                        name: '常规体检',
                        icon: 'checkups',
                        path: '/checkups'
                    }, {
                        name: '代谢检测',
                        icon: 'metabolic',
                        path: '/metabolic'
                    }, {
                        name: '影响与基因',
                        icon: 'Influence',
                        path: '/Influence'
                    }, {
                        name: '跨组学篇',
                        icon: 'across',
                        path: '/across'
                    }
                ]
                break;
            case '/metabolic':
                types = [
                    {
                        name: '微量元素与重金属',
                        icon: 'microelement',
                        path:'/microelement',
                       
                    }, {
                        name: '维生素检测',
                        icon: 'vitamin',
                        path:'/vitamin'

                    }, {
                        name: '氨基酸检测',
                        icon: 'amino',
                        path:'/amino'
                       
                    }, {
                        name: '荷尔蒙激素',
                        icon: 'hormone',
                        path:'/hormone'
                       

                    }, {
                        name: '同型半胱氨酸',
                        icon: 'homocysteine',
                        path:'/thcy'

                    }, {
                        name: '褪黑素',
                        icon: 'melatonin',
                        path:'/melatonin'  
                    }
                ]
                break;
        }
        
        
        this.setState({types})
    }
    render() {
        let {types} = this.state;
      
        
        return (<Types {...{types}} />)
    }
}
