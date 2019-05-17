import React,{Component} from 'react';
import './setting.scss';
import HeaderContainer from '../lib/Components/Header/Container/HeaderContianer';
import Footer from '../lib/Components/Footer/Footer'
class Setting extends Component{
    render(){
      const {info}=this.props
      console.log('name',info.name)
        return(
            <div className='setting-root'>
              <div className='setting-mongolia'>
                <HeaderContainer></HeaderContainer>
                <div className='setting-contianer'>
                  <div className='title'>学生个人信息设置</div>
                  <div className='setting'>
                    <div className='img'>
                      <img src={info.avator} alt='头像'></img>
                    </div>
                    <div className='name'>
                     <p>{info.name}</p>
                    </div>
                    <div className='items'>
                      <div className='item'>
                         <div className='title'>班级</div>
                         <div className='text'>{info.class}</div>
                      </div>
                      <div className='item'>
                         <div className='title'>学号</div>
                         <div className='text'>{info.id_number}</div>
                      </div>
                      <div className='item'>
                         <div className='title'>联系方式</div>
                         <div className='text'>QQ:{info.contact}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer></Footer>
              </div>
            </div>
        )
    }
}
export default Setting;
