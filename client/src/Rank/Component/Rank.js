import React,{Component} from 'react';
import '../rank.scss';
import Header from '../../lib/Components/Header/Container/HeaderContianer';
import Footer from '../../lib/Components/Footer/Footer'
import Select from '../../lib/Components/Select/Select';
import {CHOSE_YEAR,CHOSE_CONDITION,MYSELF,RANK_IMG,OTHER,SCHOOL_CONDITION} from '../../common/const';
import Loading from '../../lib/img/loading.svg';
class Rank extends Component{
  generateRankList=(sort)=>{
    let sortList=sort==='myself'?MYSELF:OTHER
    return sortList.map((item,index)=>{
      return (
        <ul key={index}>
          <li>{item.rank<=3?(
            <p className={`iconfont ${RANK_IMG[item.rank]}`}></p>
          ):item.rank}</li>
          <li><p>{item.name}</p></li>
          <li><p>{item.class}</p></li>
          <li><p>{item.comprehensive}</p></li>
          <li><p>{item.course}</p></li>
          <li><p>{item.card}</p></li>
          <li><p>{item.moral}</p></li>
          <li><p>{item.intellectual}</p></li>
          <li><p>{item.sports}</p></li>
          <li><p>{item.aesthetic} </p></li>
        </ul>
      )
    })
  }
    render(){
        return(
            <div className='rank-root'>
              <div className='rank-header'>
                <Header></Header>
              </div>
              <div className='rank-container'>
                 <div className='title'>
                 学生综合素质成绩排行榜
                 </div>
                 <div className='chose'>
                   选择学年度：
                   <div className='select'>
                     <Select list={CHOSE_YEAR}></Select>
                   </div>
                   选择筛选条件：
                   <div className='select'>
                      <Select list={CHOSE_CONDITION}></Select>
                   </div>
                   选择排名范围：
                   <div className='select'>
                     <Select list={SCHOOL_CONDITION}></Select>
                   </div>
                 </div>
                 <div className='myself'>
                   <div className='myself-title'>
                     <ul>
                       <li>综合排名</li>
                       <li>姓名</li>
                       <li>班级</li>
                       <li>综合成绩</li>
                       <li>课程成绩</li>
                       <li>打卡成绩</li>
                       <li>德育成绩</li>
                       <li>智育成绩</li>
                       <li>体育成绩</li>
                       <li>美育成绩</li>
                     </ul>
                    {/* {this.generateRankList()} */}
                   </div>
                   <div className='myself-container'>
                    {this.generateRankList("myself")}
                   </div>
                 </div>
                 <div className='others'>
                   <div className='myself-title'>
                     <ul>
                       <li>综合排名</li>
                       <li>姓名</li>
                       <li>班级</li>
                       <li>综合成绩</li>
                       <li>课程成绩</li>
                       <li>打卡成绩</li>
                       <li>德育成绩</li>
                       <li>智育成绩</li>
                       <li>体育成绩</li>
                       <li>美育成绩</li>
                     </ul>
                    {/* {this.generateRankList()} */}
                   </div>
                   <div className='myself-container'>
                    {this.generateRankList("other")}
                   </div>
                 </div>
                 <img src={Loading} alt='加载'></img>
              </div>
              <Footer></Footer>
            </div>
        )
    }
}
export default Rank;