import React,{Component} from 'react';
import Login from '../component/Login'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {login} from '../../Redux/modules/Login'
// 把页面跟redux联系起来
class LoginContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            role:this.props.match.params.role
        }
    }
    handleLogin=(name,password)=>{
        const {role}=this.state;
        this.props.login(name,password,role).then((res)=>{
            if(res){
                if(res.isLogin){
                    const {info}=this.props;
                    const infoSession=JSON.stringify(info);
                    sessionStorage.setItem("isLogin",this.props.isLogin);
                    sessionStorage.setItem("info",infoSession);
                    this.props.history.push('/');
                }else{
                    sessionStorage.setItem("isLogin",null);
                    sessionStorage.setItem("info",null);
                }
            }else{
                sessionStorage.setItem("isLogin",null);
                sessionStorage.setItem("info",null);
            }
        })
    }
    render(){
        const {role}=this.state;
        const {isLogin,msg}=this.props;
        return(
            <div>
                <Login role={role} onLogin={this.handleLogin} isLogin={isLogin} msg={msg}/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    isLogin:state.Login.isLogin,
    info:state.Login.info,
    msg:state.Login.msg
  });
const mapDispatchToProps = dispatch => ({
    login:bindActionCreators(login,dispatch)
  });
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer));