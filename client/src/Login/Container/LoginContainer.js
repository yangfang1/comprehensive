import React,{Component} from 'react';
import Login from '../component/Login'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
            if(res.isLogin){
                sessionStorage.setItem("isLogin",this.props.isLogin);
                this.props.history.push('/');
            }else{
                sessionStorage.setItem({
                    isLogin:null
                })
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
    msg:state.Login.msg
  });
const mapDispatchToProps = dispatch => ({
    login:bindActionCreators(login,dispatch)
  });
  export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);