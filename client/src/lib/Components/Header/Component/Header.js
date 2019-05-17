import React,{Component} from 'react';
import '../Header.scss';
import {STUDENT_FUNCTION_lIST} from '../../../../common/const';
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isShow:false,
        }
    }
    generateToolList=()=>{
        return STUDENT_FUNCTION_lIST.map((item,index)=>{
            return(
              <li key={index}>
                <div className={`iconfont ${item.icon} icon`}></div>
                <div className='des'>{item.description}</div>
              </li>
            )
 
        })
    }
    handleShowTool=()=>{
        this.setState({
            isShow:true
        })
    }
    handleCancelShowTool=()=>{
        this.setState({
            isShow:false
        })
    }
    handleLoginOut=()=>{
        this.props.onLoginOut()
    }
    render(){
        const {isShow}=this.state;
        const {info}=this.props;
        return(
            <div className='header-root'>
              <div className='header-container'>
                <div className='logo-text'>
                  <p className='title'>高校学生综合素质分析系统</p>
                  <p className='description'>Comprehensive Quality Analysis System</p>
                </div>
                <div className='lab'>
                  <div className='tool' 
                    onMouseEnter={this.handleShowTool}
                    onMouseLeave={this.handleCancelShowTool}>
                      工具&nbsp;<span className={`iconfont ${isShow?'iconxiangshang':'iconxiangxia'}`}></span>
                      {isShow?(
                        <div className='bord'>
                        <ul className='tool-list'>
                          {this.generateToolList()}
                        </ul>
                      </div>
                      ):null}
                  </div>
                  <div className='info'>
                    <p className='iconfont iconyidongduanicon- icon'></p>
                    <p>{info.userName}</p>
                  </div>
                  <div className='role'>角色：{info.role}</div>
                  <div className='lgoin-out' onClick={this.handleLoginOut}>退出登录</div>
                </div>
              </div>
            </div>
        )
    }
}
export default Header;