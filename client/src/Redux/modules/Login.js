import { get } from '../../common/fetch_helper';
// 为Home创建reducer
const initialState={
    loading:false,
    FAIL:false,
    relData:{}
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
                FAIL:false
            }
        }
        case LOGIN_SUCCESS:{
            return{
                ...state,
                loading:false,
                FAIL:false,
                relData:action
            }
        }
        case LOGIN_FAIL:{
            return{
                ...state,
                loading:true,
                FAIL:false
            }
        }
        default:
        return state
    }
}
export function login(name,password){
    // const data={
    //     name,
    //     password
    // }
    return{
        types:[LOGIN_LOAD,LOGIN_SUCCESS,LOGIN_FAIL],
        // url:'hello'
        promise:get('/api/test')
    }
}