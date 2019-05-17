import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Setting from '../Setting';
import {getInfo} from '../../Redux/modules/Setting';
class SettingContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            info:JSON.parse(sessionStorage.getItem('info'))
        }
        this.props.getInfo();
    }
    render(){
        const {info}=this.props;
        console.log(info);
        return(
            <Setting info={info}></Setting>
        )
    }
}
const mapStateToProps = state => ({
    info:state.Setting.info
});
const mapDispatchToProps = dispatch => ({
    getInfo:bindActionCreators(getInfo,dispatch)
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingContainer);