import { post } from '../../common/fetch_helper';
// 为Home创建reducer
const initialState={
    loading:false,
    error:false,
    relData:{}
}
const LOGIN_LOAD='login/LOGIN_LOAD';
const LOGIN_SUCCESS='login/LOGIN_SUCESS';
const LOGIN_ERROR='login/LOGIN_ERROT';
export default function reducer(state=initialState,action){
    switch(action.type){
        case LOGIN_LOAD:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case LOGIN_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                relData:action
            }
        }
        case LOGIN_ERROR:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        default:
        return state
    }
}
export function login(name,password){
    const data={
        name,
        password
    }
    console.log(data)
    return{
        types:[LOGIN_LOAD,LOGIN_SUCCESS,LOGIN_ERROR],
        // url:'hello'
        promise:post('/login',data)
    }
}