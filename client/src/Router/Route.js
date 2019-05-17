import React,{Component} from "react";
import { BrowserRouter as Router, Route,withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../lib/iconfonts/iconfont.scss';
import HomeContianer from '../HomePage/Container/HomeContainer';
import LoginContainer from '../Login/Container/LoginContainer';
import SettingContainer from '../Setting/Container/SettingContainer';
import {getUserInfo} from '../Redux/modules/GetLogin';
class BasicExample extends Component {
  componentDidMount(){
    this.props.getUserInfo().then(()=>{
      const {pathname}=window.location;
      const {isLogin}=this.props;
      console.log('路由')
      if(pathname!=='/'&&!isLogin){
        this.props.history.push('/login/student');
      }
    })
  }
  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContianer} />
          <Route path="/login/:role" component={LoginContainer} />
          <Route path="/setting" component={SettingContainer} />
        </div>
      </Router>
    );
  }

}
const mapStateToProps = state => ({
    isLogin:state.GetLogin.isLogin
});
const mapDispatchToProps = dispatch => ({
  getUserInfo:bindActionCreators(getUserInfo,dispatch)
});
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(BasicExample));
