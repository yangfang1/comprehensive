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
    generateList=()=>{
        const {list}=this.props;
        return list.map((item,index)=>{
            return (
                <li key={index}>{item.key}</li>
            )
        })
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
                <p>{defaultKey}               
                    <span className={`select-icon iconfont ${isChose?'iconxiangshang':'iconxiangxia'}`}></span>
                </p>
                {isChose?(
                    <div className='board'>
                    <ul className='list'>
                        {this.generateList()}
                    </ul>
                    </div>
                ):null}
            </div>
        )
    }
}
export default Select;