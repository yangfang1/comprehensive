import { get } from '../../common/fetch_helper';
// 为Home创建reducer
const initialState={
    loading:false,
    loaded:false,
    info:{}
}
const SETTING_LOAD='setting/SETTING_LOAD';
const SETTING_SUCESS='setting/SETTING_SUCESS';
const SETTING_FAIL='setting/SETTING_FAIL';
export default function reducer(state=initialState,action){
    switch(action.type){
        case SETTING_LOAD:{
            return{
                ...state,
                loading:true,
                loaded:false
            }
        }
        case SETTING_SUCESS:{
            return{
                ...state,
                loading:false,
                loaded:true,
                info:action.result.data
            }
        }
        case SETTING_FAIL:{
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
export function getInfo(){
    return{
        types:[SETTING_LOAD,SETTING_SUCESS,SETTING_FAIL],
        promise:get('/api/setting')
    }
}