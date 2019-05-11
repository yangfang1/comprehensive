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
        this.props.login(name,password)
    }
    render(){
        const {role}=this.state;
        console.log(role)
        return(
            <div>
                <Login role={role} onLogin={this.handleLogin}/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    
  });
const mapDispatchToProps = dispatch => ({
    login:bindActionCreators(login,dispatch)
  });
  export default connect(
    mapStateToProps,
      mapDispatchToProps
)(LoginContainer);