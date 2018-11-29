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
            selectYear: ''
        }
        this.getMetabolicData = this.getMetabolicData.bind(this)
        this.changeYear = this.changeYear.bind(this)
    }
    getMetabolicData(yearVal) {
        let {selectYear,name} = this.state;
          
        if(yearVal === selectYear) return;
        this.setState({pieData: []})
        let pathurl = '';

        if(name === 'across'){
            pathurl = `${url}/reportoverview/getCrossGroup?year=${yearVal}`
        }else{
            pathurl = `${url}/reportoverview/getMetabolicList?businessType=${name}&year=${yearVal}`
        }

        $.get(pathurl)
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
            if(isYear){
                this.getMetabolicData('2018')
                this.setState({
                    selectYear:'2018'
                })
            }
        })

        
        switch (pathname) {
            case '/pathogen':
            //病原
           
            
                $.get(`${url}/reportoverview/getpathogenyView`)
                .then(({result,data})=>{
                   if(result === 200){
                       this.setState({
                           pieData:data
                       })
                   }
                    
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
