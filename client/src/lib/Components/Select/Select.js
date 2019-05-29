import React,{Component} from 'react';
import './select.scss'
class Select extends Component{
    constructor(props){
        super(props);
        this.state={
            isChose:false,
            defaultKey:this.props.list[0].key
        }
    }
    handleChose=()=>{
        this.setState({
            isChose:true
        })
    }
    handLeave=()=>{
        this.setState({
            isChose:false
        })
    }
    render(){
        const {isChose,defaultKey}=this.state;
        return(
            <div className='select-root' onMouseEnter={this.handleChose} onMouseLeave={this.handLeave}>
                <p>{defaultKey}</p>
                <span className={`select-icon iconfont ${isChose?'iconxiangshang':'iconxiangxia'}`}></span>
                <div className='board'></div>
            </div>
        )
    }
}
export default Select;