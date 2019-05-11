// 为Home创建reducer
const initialState={
    loading:false,
    error:false,
    articList:[]
}
const HOME_LOAD='home/HOME_LOAD';
const HOME_SUCCESS='home/HOME_SUCCESS';
const HOME_ERROR='home/HOME_ERROR';
export default function reducer(state=initialState,action){
    switch(action.type){
        case HOME_LOAD:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case HOME_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                articList:action.payload.articList
            }
        }
        case HOME_ERROR:{
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
export function load(){
    return{
        // type:HOME_LOAD,
        types:[HOME_LOAD,HOME_SUCCESS,HOME_ERROR],
        url:'api/articles.json'
    }
}