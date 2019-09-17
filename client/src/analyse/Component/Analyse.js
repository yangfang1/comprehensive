import React,{Component} from 'react';
import Header from '../../lib/Components/Header/Container/HeaderContianer';
import Footer from '../../lib/Components/Footer/Footer';
import ReactEcharts from 'echarts-for-react';
import '../analyse.scss'
class Analyse extends Component{
    getOtion=()=>{
        const option = {
    title: {
        text: '过去一月综合素质成绩排名变化'
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['2019-04-1','2019-04-2','2019-04-3','2019-04-4','2019-04-5','2019-04-6','2019-04-7'
                ,'2019-04-8','2019-04-9','2019-04-10','2019-04-11','2019-04-12','2019-04-13','2019-04-14',
                '2019-04-15','2019-04-16','2019-04-17','2019-04-18','2019-04-19','2019-04-20','2019-04-21',
                '2019-04-22','2019-04-23','2019-04-24','2019-04-25','2019-04-26','2019-04-27','2019-04-28',
                '2019-04-29','2019-04-30'
            ]
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '第{value}名'
        }
    },
    series: [
        {
            name:'名次',
            type:'line',
            data:[1, 2, 5, 2,2,7, 8,9,5,4,5, 4,3,5, 2,2,3,6,9,5,4,1,2,5,2,2,5,4,2,1,1],
            
        },
    ]
        };
        return option;
    }
    getOtionRabar=()=>{
        const optionRabar = {
        title: {
            text: '各项成绩对比'
        },
        polar: [{
            indicator: [
                { text: '综合排名'},
                { text: '课程排名'},
                { text: '打卡排名'},
                { text: '德育排名'},
                { text: '智育排名'},
                { text: '体育排名'}
            ]
        }],
        series: [{
            name: "",
            type: "radar",
            data: [{
                value: [1, 5, 6, 2, 8, 3],
                name: "成绩排名"
            }],
            itemStyle: {
                normal: {
                    color: "red"
                }
            }
            }],
            emphasis: {
              label: {
                show: true
              }
           }
       };
        return optionRabar;
    }
    getOtionline=()=>{
        const optionLiner = {
              title: {
                text: '各项成绩分数'
              },
              xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['','综合成绩','平均课程成绩','打卡数据','德育成绩','智育成绩','体育成绩','美育成绩']
            },
            // textStyle:{
            //     x:'center'
            // },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}分'
                }
            },
            series: [
                {
                    name:'分数',
                    type:'bar',
                    data:['',84.38,85.4,89,22,32,18,10],
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color:'#fff',
                            width:'2'
                        }
                    },
                    barWidth : 30
                },
            ]
        };
        return optionLiner;
    }
    render(){
        return(
            <div className='analyse-root'>
              <div className='analyse-header'>
                <Header></Header>
              </div>
              <div className='analyse-container'>
                 <div className='title'>
                   <p className='analyse-title'>学生个人综合分析结果</p>
                   <div className='info'>
                     <div className='info-title'>
                       <ul>
                         <li>综合素质排名</li>
                         <li>课程排名</li>
                         <li>打卡排名</li>
                         <li>德育排名</li>
                         <li>智育排名</li>
                         <li>体育排名</li>
                         <li>美育排名</li>
                         <li>系统评分</li>
                       </ul>
                       <ul>
                         <li>1</li>
                         <li>5</li>
                         <li>10</li>
                         <li>2</li>
                         <li>1</li>
                         <li>5</li>
                         <li>20</li>
                         <li>5.0</li>
                       </ul>
                     </div>
                   </div>
                 </div>
                 <div className='analyse-data'>
                    <p className='analyse-title'>学生个人综合数据分析</p>
                    <div className='line'>
                    <ReactEcharts
                        option={this.getOtion()}
                        style={{height: '350px', width:'100%'}}
                        // className='react_for_echarts' 
                        />
                    </div>
                    <div className='bool'>
                        <ReactEcharts
                            option={this.getOtionRabar()}
                            style={{height: '350px', width:'50%'}}
                            // className='react_for_echarts' 
                        />
                        <ReactEcharts
                            option={this.getOtionline()}
                            style={{height: '350px', width:'50%'}}
                        />
                    </div>
                 </div>
              </div>
              <Footer></Footer>
            </div>
            
        )
    }
}
export default Analyse;