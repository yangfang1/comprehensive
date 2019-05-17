import{combineReducers} from 'redux';
import Home from './Home';
import Login from './Login';
import GetLogin from './GetLogin';
import Setting from './Setting'
export default combineReducers({
    Home,
    Login,
    GetLogin,
    Setting
})