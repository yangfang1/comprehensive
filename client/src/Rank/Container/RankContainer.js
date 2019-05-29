import React,{Component} from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Rank from '../Component/Rank';
// import {getInfo} from '../../Redux/modules/Setting';
class RankContainer extends Component{
    render(){
        const {info}=this.props;
        console.log(info);
        return(
            <Rank></Rank>
        )
    }
}
const mapStateToProps = state => ({
    // info:state.Setting.info
});
const mapDispatchToProps = dispatch => ({
    // getInfo:bindActionCreators(getInfo,dispatch)
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RankContainer);