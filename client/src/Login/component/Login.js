import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';
import {LOGIN_ROLE} from '../../common/const';
import '../login.scss';
class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      password:''
    }
  }
  handleGoPage=path=>{
    this.props.history.push(path)
  }
  setName=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  setPassword=(e)=>{
    this.setState({
      password:e.target.value
    })
  }
  handleLogin=()=>{
    const {name,password}=this.state;
    this.props.onLogin(name,password)
  }
    render(){
      const {role,isLogin,msg}=this.props;
        return(
            <div className='login-root'>
              <div className='login-mongolia'>
                <div className='login-content'>
                <p className='title'>
                    {LOGIN_ROLE[role].name}
                    <span className='iconfont icon-dengchu login-out' onClick={()=>this.handleGoPage('/')}>首页</span>
                </p>
                <div className='form'>
                  <div className='name'>
                    <span className='iconfont iconuser label'></span>
                    <input type='text' placeholder={LOGIN_ROLE[role].placeholder.name} onChange={(e)=>this.setName(e)}></input>
                  </div>
                  <div className='password'>
                    <span className='iconfont iconmima label'></span>
                    <input type='text' placeholder={LOGIN_ROLE[role].placeholder.password} onChange={(e)=>this.setPassword(e)}></input>
                  </div>
                  {!isLogin?(<div className='error'>{`${msg}`}</div>):null}
                  <div className='login'>
                     <span className='login-text' onClick={this.handleLogin}>LOGIN IN</span>
                  </div>
                </div>
                </div>
                <div className='login-description'>
                   <div className='title'>使用须知</div>
                   <div className='text'>
                     <div className='title'>登录</div>
                     <div className='content'>
                       <p>1.学生登录账号为学号，密码为身份证后6位。</p>
                       <p>2.老师登录账号为工号，密码为身份证后6位。</p>
                       <p>3.教务管理员登录账号为工号，密码为身份证后6位。</p>
                     </div>
                   </div>
                   <div className='text'>
                     <div className='title'>操作</div>
                     <div className='content'>
                       <p>1.学生登录之后可以修改设置，数据录入，查看个人详情，查看综合排名，分析结果，综合对比的功能。</p>
                       <p>2.老师登录之后可以录入学生数据，查看综合排名，审核学生自主录入数据，学生详情，学生对比分析详情。</p>
                       <p>3.教务管理员登录之后可以查看学生综合排名，修改综合素质评定元素及成绩。</p>
                     </div>
                   </div>
                </div>
              </div>
            </div>
        )
    }
}
export default withRouter(Login);