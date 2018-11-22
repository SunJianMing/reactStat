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
                        icon: 'overview'
                    }, {
                        name: '病原传染篇',
                        icon: 'pathogen'
                    }, {
                        name: '常规体检',
                        icon: 'checkups'
                    }, {
                        name: '代谢检测',
                        icon: 'metabolic'
                    }, {
                        name: '影响与基因',
                        icon: 'Influence'
                    }, {
                        name: '跨组学篇',
                        icon: 'across'
                    }
                ]
                break;
            case '/metabolic':
                types = [
                    {
                        name: '微量元素与重金属',
                        icon: 'elements',
                        english: 'Trace elements and heavy metals'
                    }, {
                        name: '维生素检测',
                        icon: 'vitamin',
                        english: 'Vitamin testing'

                    }, {
                        name: '氨基酸检测',
                        icon: 'amino',
                        english: 'Amino acid detection'
                    }, {
                        name: '荷尔蒙激素',
                        icon: 'hormone',
                        english: 'hormone'

                    }, {
                        name: '同型半胱氨酸',
                        icon: 'homocysteine',
                        engLish: 'homocysteine'

                    }, {
                        name: '褪黑素',
                        icon: 'melatonin',
                        english: 'melatonin'
                    }
                ]
                break;
        }

        this.setState({
          types
        })
    }
    render() {
        let {types} = this.state;
        return (<Types {...{types}}/>)
    }
}
