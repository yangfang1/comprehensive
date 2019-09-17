import React,{Component} from 'react';
import Header from '../../lib/Components/Header/Container/HeaderContianer';
import Footer from '../../lib/Components/Footer/Footer';
import ReactEcharts from 'echarts-for-react';
import {DETAIL_TAB,COURSE_GRADE} from '../../common/const';

import '../detail.scss'
class Detail extends Component{
  constructor(props){
    super(props);
    this.state={
        activeTab:0,
    }
  }
    getOtion=()=>{
        const option = {
    title: {
        text: '过去一周打卡成绩监测'
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
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}次'
        }
    },
    series: [
        {
            name:'打卡次数',
            type:'line',
            data:[25, 25, 25, 26, 27, 28, 29],
            
        },
    ]
        };
        return option;
    }
  generateTab=()=>{
    return DETAIL_TAB.map((item,index)=>{
      const {activeTab}=this.state;
      if(activeTab===index){
        return(
          <li key={index} className='active-tab'>{item}</li>
        )
      }else{
        return(
          <li key={index} onClick={()=>this.chose(index)}>{item}</li>
          )
      }
    })
  }
  generateData=()=>{
    const {activeTab}=this.state;
    if(activeTab===1){
      return(
        <ReactEcharts
          option={this.getOtion()}
          style={{height: '350px', width:'100%'}}
          // className='react_for_echarts' 
        />
      )
    }else{
      return(
        <div className='detail-course'>
          <ul className='detail-course-title'>
          <li>学期</li>
          <li>名称</li>
          <li>级别</li>
          <li>等级</li>
          <li>成绩</li>
          <li>凭证</li>
          <li>状态</li>
        </ul>
        {COURSE_GRADE.map((item,index)=>{
          return(
            <ul className='detail-course-content'>
              <li>{item.year}</li>
              <li>{item.name}</li>
              <li>{item.class}</li>
              <li>{item.sort}</li>
              <li>{item.grade}</li>
              <li className='img'><a href='/'>{item.img}</a></li>
              <li className='img'>{item.state}</li>

            </ul>
          )
        })}
        </div>
      )
    }
  }
  chose=index=>{
    this.setState({
      activeTab:index
    })
  }
    render(){
      // const isLogin=sessionStorage.getItem("isLogin");
      let info=sessionStorage.getItem("info");
      if(!(info==='null')){
        info=JSON.parse(info);
      }else{
        info={
          userName:"",
          avator:"",
          role:""
        }
      }
        return(
            <div className='detail-root'>
              <div className='detail-header'>
                <Header></Header>
              </div>
              <div className='detail-container'>
                 <div className='title'>
                   <p className='detail-title'>学生个人信息</p>
                   <div className='info'>
                     <div className='info-title'>
                       <ul>
                         <li>姓名</li>
                         <li>学号</li>
                         <li>班级</li>
                         <li>联系方式</li>
                       </ul>
                       <ul>
                         <li>杨芳</li>
                         <li>2015117407</li>
                         <li>软工1512班</li>
                         <li>QQ:1223010592</li>
                       </ul>
                     </div>
                   </div>
                 </div>
                 <div className='detail-data'>
                 <p className='detail-title'>学生个人数据详情</p>
                 <div className='tab'>
                   <ul className='tab-list'>
                     {this.generateTab()}
                   </ul>
                 </div>
                 <div className='data'>
                   {this.generateData()}
                 </div>
                 </div>
              </div>
              <Footer></Footer>
            </div>
        )
    }
}
export default Detail;
