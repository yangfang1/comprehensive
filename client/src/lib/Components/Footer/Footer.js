import React, { Component } from 'react';
import {STUDENT_FUNCTION_lIST,TEACHER_FUNCTION_lIST,ADMIN_FUNCTION_lIST,CONTACT_LIST} from '../../../common/const'
import './footer.scss';

class Footer extends Component {
    generateList=(list,sort)=>{
      return list.map((item,index)=>{
              return(
                  <li key={index}>
                    {sort?(
                      <div>
                  <span className={`iconfont ${item.icon}`}></span>&nbsp;
                  <span>{item.title}</span>
                      </div>

                    ):<span>{item.title}</span>}

                  </li>
              )
    })
    }
    render(){
        return(
            <div className='footer'>
              <div className='section-container'>
                <div className='function'>
                  <div className='title'>
                    本系统的功能
                  </div>
                  <div className='tab'>
                   <div className='student'>
                    <p className='blog'>student</p>
                    <ul className='list'>
                        {this.generateList(STUDENT_FUNCTION_lIST)}
                    </ul>
                   </div>
                   <div className='teacher'>
                      <p className='blog'>teacher</p>
                      <ul className='list'>
                        {this.generateList(TEACHER_FUNCTION_lIST)}
                      </ul>
                   </div>
                   <div className='admin'>
                      <p className='blog'>administor</p>
                      <ul className='list'>
                        {this.generateList(ADMIN_FUNCTION_lIST)}
                      </ul>
                   </div>
                  </div>  
                </div>
                <div className='contact'>
                  <div className='title'>
                    联系我
                  </div>
                  <div className='tab'>
                   <div className='content'>
                    <p className='blog'>&copy;yangfang（graduation）</p>
                    <ul className='list'>
                        {this.generateList(CONTACT_LIST,'contact')}
                    </ul>
                   </div>
                  </div>  
                </div>
              </div>
              <i className='footer-text'>版权所有&nbsp;杨芳2019湖北文理学院软工1512班毕业设计</i>
            </div>
        )
    }
}
export default Footer;