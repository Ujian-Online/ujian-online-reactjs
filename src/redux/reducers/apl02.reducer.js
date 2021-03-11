import * as types from '../types/apl02.type'


const initialState = {
    apl02 : [] ,
    // detailApl:{},
    isLoading: false,
    errMessage: null,
    isSuccessPost: false
}

const reducer = (state=initialState,action={})=>{
    switch (action.type){
        case types.GET_APL02:return{
            ...state,
            apl02 : action.apl02,
            detail:action.detail,
            isLoading:false,
            errMessage:null,
        }
        case types.APL02_FAILED:return{
            ...state,
            isLoading:false,
            errMessage:action.errMessage
        }
        case types.APL02_LOADING:return{
            ...state,
            isLoading:true,
            errMessage:null,
            isSuccessPost : false
        }
        case types.APL02_POST_SUCCESS:return{
            ...state,
            isLoading:false,
            errMessage:null,
            isSuccessPost : true

        }
        case types.RESET_REDUCER_APL02: return {
            ...state,
            isLoading:false,
            errMessage:null,
            isSuccessPost : false
        }
       case types.SET_DETAIL_SHOW:return{
           ...state,
           isLoading:false,
           detailApl:action.detailApl,
           erMessage:null,
           isSuccessPost:false
       }
        default:return state
    }
}

export default reducer