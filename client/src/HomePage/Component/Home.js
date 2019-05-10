import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../Home.scss';
import {STUDENT_FUNCTION_lIST,LOGIN_LIST} from '../../common/const';
import Footer from '../../lib/Components/Footer/Footer'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isFunction:""
    }
  }
  generateFunction=()=>{
    return STUDENT_FUNCTION_lIST.map((item,index)=>{
      const {isFunction}=this.state;
      if(isFunction===index){
        return(
          <li key={index} className='function-special' onMouseLeave={this.unChose}>
            <div className='red-box'>
              <i className={`iconfont ${item.icon}`}></i>
            </div>
            <p className='title'>{item.title}</p>
            <p className='description'>{item.description}</p>
          </li>
        )
      }else{
        return(
          <li key={index} onMouseEnter={()=>this.choseFunction(index)}>
            <div className='red-box'>
              <i className={`iconfont ${item.icon}`}></i>
            </div>
            <p className='title'>{item.title}</p>
          </li>
        )
      }
    })
  }
  generateLogin=()=>{
    return LOGIN_LIST.map((item,index)=>(
      <div className='login-item' key={index}>
        <div className='mongolia'>
          <p>{item.title}</p>
          <p className='description'>
            {item.description}
          </p>
          <div className='btn' onClick={()=>this.handleLogin(item.title)}>
            登录
          </div>
        </div>
        <img src={item.img} alt={item.title}></img>
      </div>
    ))
  }
  choseFunction=index=>{
    this.setState({
      isFunction:index
    })
  }
  unChose=()=>{
    this.setState({
      isFunction:""
    })
  }
  handleLogin=role=>{
    this.props.history.push(`/login/${role}`)
  }
  render() {
    return (
      <div className='root'>
        <div className='first-section'>
         <div className='mongolia'>
          <div className='section-container'>
            <p className='title'>高校大学生综合素质分析系统</p>
            <p className='subTitle'>Comprehensive Quality Analysis System for College Students</p>
          </div>
         </div>
        </div>
        <div className='second-section'>
          <div className='section-container'>
            <p className='title'>Improve our comprehensive quality</p>
            <p className='subTitle'>Student-specific functions</p>
            <ul className='function-list'>{this.generateFunction()}</ul>
          </div>
        </div>
        <div className='login'>
          <p className='section-title'>Students, teachers and administrators login at different levels</p>
          <p className='section-subTitle'>Experience full functionality after login.</p>
          <div className='section-container'>
           {this.generateLogin()}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
