import React,{Component} from 'react';
import '../rank.scss';
import Header from '../../lib/Components/Header/Container/HeaderContianer';
import Footer from '../../lib/Components/Footer/Footer'
import Select from '../../lib/Components/Select/Select';
import {CHOSE_YEAR} from '../../common/const';
class Rank extends Component{
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
                 </div>
              </div>
              <Footer></Footer>
            </div>
        )
    }
}
export default Rank;