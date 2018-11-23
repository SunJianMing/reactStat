import PieList from 'layout/pie/PieList'
import S from './style.scss'
import url from 'common/data/config.js'

import Year from 'components/year/Year'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navData: {},
            pieData: [],
            name: '',
            yearData: [
                '2017', '2018'
            ],
            selectYear: '2018'
        }
        this.getMetabolicData = this.getMetabolicData.bind(this)
        this.changeYear = this.changeYear.bind(this)
    }
    getMetabolicData(year) {
        this.setState({pieData: []})
        let {name} = this.state
        $.get(`http://172.16.167.85:60000/bee-svr-test/reportoverview/getMetabolicList?businessType=${name}&year=${year}`)
            .then(({result, data}) => {
                if (result === 200) {
                    this.setState({pieData: data})
                }
            })
    }
    changeYear(unusual) {
        this.setState({selectYear: unusual})
        this.getMetabolicData(unusual)
    }
    componentDidMount() {
        let {location: {
                pathname
            }} = this.props

        let name = pathname
            ? pathname.match(/\/(\w*)/)[1]
            : 0

        this.setState({name: name},()=>{
            let {isYear} = this.props;
            let {selectYear} = this.state
            if(isYear){
                this.getMetabolicData(selectYear)
            }
        })

        
        switch (pathname) {
            case '/pathogen':
                this.setState({
                    pieData: [
                        {
                            name: '乙肝表面抗原',
                            unusual: 90,
                            value: 200,
                            details: true
                        }, {
                            name: '丙肝',
                            unusual: 90,
                            value: 200
                        }, {
                            name: '人免疫缺陷病毒抗体',
                            unusual: 90,
                            value: 200
                        }, {
                            name: '梅毒',
                            unusual: 90,
                            value: 200
                        }
                    ]
                })
                break;
            case '/checkups':
                this.setState({
                    pieData: [
                        {
                            name: '空腹血糖',
                            unusual: 90,
                            value: 200,
                            details: true
                        }, {
                            name: 'BMI',
                            unusual: 90,
                            value: 200
                        }, {
                            name: '血压',
                            unusual: 90,
                            value: 200
                        }, {
                            name: '血尿酸',
                            unusual: 90,
                            value: 200
                        }, {
                            name: '甘油三酯',
                            unusual: 90,
                            value: 200
                        }, {
                            name: '低密度胆固醇',
                            unusual: 90,
                            value: 200
                        }, {
                            name: '总胆固醇',
                            unusual: 90,
                            value: 200
                        }, {
                            name: '体脂肪率',
                            unusual: 90,
                            value: 200
                        }, {
                            name: 'C13呼气试验',
                            unusual: 90,
                            value: 200
                        }
                    ]
                })
                break;
            case '/across':
                this.setState({
                    pieData: [
                        {
                            name: '免疫超龄',
                            unusual: 90,
                            value: 200
                        }, {
                            name: '免疫逆龄',
                            unusual: 90,
                            value: 200
                        }, {
                            name: 'HPV基因检测指标阳性',
                            unusual: 90,
                            value: 200
                        }, {
                            name: '眼底阳性',
                            unusual: 90,
                            value: 200
                        }, {
                            name: '颜质逆龄',
                            unusual: 90,
                            value: 200
                        }, {
                            name: '颜质超龄',
                            unusual: 90,
                            value: 200
                        }
                    ]
                })
                break;
            case '/Influence':
                $.get('./assets/influence.json')
                    .then(({result, data}) => {

                        if (result === 200) {
                            this.setState({pieData: data})
                        }

                    })
                    break;
            default:

        }
    }
    render() {
        let {pieData, yearData, selectYear} = this.state
        let {isYear} = this.props
        
        return (
            <div>
                {isYear && (<Year
                    data={yearData}
                    {...{ data:yearData, checked:selectYear, changeYear:this.changeYear }}
                /> )}
                
                    {
                        pieData.length
                        ? (<PieList {...{ pieData }}/>)
                        : (<div className={S.loading}>图表正在生产中...</div>)
                    }
            </div>

        )
    }
}
