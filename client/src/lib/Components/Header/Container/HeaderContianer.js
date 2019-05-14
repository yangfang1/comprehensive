import React,{Component} from 'react';
import Header from '../Component/Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {loginOut} from '../../../../Redux/modules/Login';
class HeaderContainer extends Component{
    handleLoginOut=()=>{
        this.props.loginOut().then(()=>{
             sessionStorage.setItem("isLogin",null);
             sessionStorage.setItem("info",null);
             this.props.history.push('/');
        })
    }
    render(){
        console.log(sessionStorage.getItem("info"));
        let info=sessionStorage.getItem("info")
        if(info==='null'){
            info={
                userName:"",
                avator:"",
                role:""
            }
        }else{
            info=JSON.parse(info)
        }
        return(
            <Header info={info} onLoginOut={this.handleLoginOut}></Header>
        )
    }
}
const mapStateToProps = state => ({
    isLogin:state.Login.isLogin,
    info:state.Login.info,
    msg:state.Login.msg
  });
const mapDispatchToProps = dispatch => ({
    loginOut:bindActionCreators(loginOut,dispatch)
  });
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer));