import React,{Component} from 'react';
import {getUserInfo} from '../../Redux/modules/GetLogin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Home from '../Component/Home';
class HomeContainer extends Component{
    handleGelLogin=path=>{
        this.props.getUserInfo().then((res)=>{
            if(res){
                if(res.data.isLogin){
                    this.props.history.push(path)
                }else{
                    this.props.history.push('/login/student')
                }
            }else{
                this.props.history.push('/login/student')
            }
        })
    }
    render(){
        return(
            <Home onGetLogin={this.handleGelLogin}></Home>
        )
    }
}
const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
    getUserInfo:bindActionCreators(getUserInfo,dispatch)
});
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer));