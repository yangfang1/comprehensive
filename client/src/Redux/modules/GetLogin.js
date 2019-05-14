import { get } from '../../common/fetch_helper';
// 为Home创建reducer
const initialState={
    loading:false,
    loaded:false,
    isLogin:""
}
const ROUTE_LOAD='ROUTE/ROUTE_LOAD';
const ROUTE_SUCCESS='ROUTE/ROUTE_SUCESS';
const ROUTE_FAIL='ROUTE/ROUTE_ERROT';
export default function reducer(state=initialState,action){
    switch(action.type){
        case ROUTE_LOAD:{
            return{
                ...state,
                loading:true,
                loaded:false
            }
        }
        case ROUTE_SUCCESS:{
            return{
                ...state,
                loading:false,
                loaded:false,
                isLogin:action.result.data.isLogin
            }
        }
        case ROUTE_FAIL:{
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
export function getUserInfo(){
    return{
        types:[ROUTE_LOAD,ROUTE_SUCCESS,ROUTE_FAIL],
        promise:get('/api/user/info')
    }
}