import * as types from '../types/pemegangSertifikat.type'

const initialState={
    holder:[],
    isLoading:false,
    errMessage:null
}

export default(state=initialState,action={})=>{
    switch (action.type){
        case types.SERTIFIKASI_HOLDER_SHOW:return{
            ...state,
           holder : action.holder ,
            isLoading:false,
            errMessage:null
        }
        case types.SERTIFIKASI_HOLDER_FAILED:return{
            ...state,
            isLoading:false,
            errMessage:action.errMessage
        }
        case types.SERTIFIKASI_HOLDER_LOADING:return{
            ...state,
            isLoading:true,
            errMessage:null
        }
        default:return state
    }
}
