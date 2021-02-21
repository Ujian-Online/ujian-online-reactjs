import * as types from '../types/apl01.type'


const initialState = {
    apl01 : {} ,
    customData : [] ,
    isLoading: false,
    errMessage: null,
    isSuccessPost: false
}

export default(state=initialState,action={})=>{
    switch (action.type){
        case types.GET_APL01:return{
            ...state,
            apl01 : action.apl01,
            customData : action.customData,
            isLoading:false,
            errMessage:null,
        }
        case types.APL01_FAILED:return{
            ...state,
            isLoading:false,
            errMessage:action.errMessage
        }
        case types.APL01_LOADING:return{
            ...state,
            isLoading:true,
            errMessage:null,
            isSuccessPost : false
        }
        case types.APL01_POST_SUCCESS:return{
            ...state,
            isLoading:false,
            errMessage:null,
            isSuccessPost : true

        }
        case types.RESET_REDUCER_APL01: return {
            ...state,
            isLoading:false,
            errMessage:null,
            isSuccessPost : false
        }
       
        default:return state
    }
}



