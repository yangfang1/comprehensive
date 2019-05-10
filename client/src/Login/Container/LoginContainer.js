import React,{Component} from 'react';
import Login from '../component/Login'
class LoginContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            role:this.props.match.params.role
        }
    }
    handleLogin=(name,password)=>{
        console.log(name,password)
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
export default LoginContainer;