import { get,post } from '../../common/fetch_helper';
// 为Home创建reducer
const initialState={
    loading:false,
    loaded:false,
    isLogin:"",
    info:{},
    msg:""
}
const LOGIN_LOAD='login/LOGIN_LOAD';
const LOGIN_SUCCESS='login/LOGIN_SUCESS';
const LOGIN_FAIL='login/LOGIN_ERROT';
export default function reducer(state=initialState,action){
    switch(action.type){
        case LOGIN_LOAD:{
            return{
                ...state,
                loading:true,
                loaded:false
            }
        }
        case LOGIN_SUCCESS:{
            return{
                ...state,
                loading:false,
                loaded:true,
                isLogin:action.result.isLogin,
                info:action.result.info,
                msg:action.result.msg
            }
        }
        case LOGIN_FAIL:{
            return{
                ...state,
                loading:true,
                loaded:false
            }
        }
        default:
        return state
    }
}
export function login(name,password,role){
    const data={
        name,
        password,
        role
    }
    return{
        types:[LOGIN_LOAD,LOGIN_SUCCESS,LOGIN_FAIL],
        promise:post('/api/login',data)
    }
}
export function loginOut(){
    return{
        types:[LOGIN_LOAD,LOGIN_SUCCESS,LOGIN_FAIL],
        promise:get('/api/loginout')
    }
}