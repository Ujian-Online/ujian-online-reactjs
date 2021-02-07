import * as types from '../types/sertifikasi.type'

const initialState={
    sertifikasi:[],
    detailSertifikasi : {} ,
    isLoading:false,
    errMessage:null
}

export default(state=initialState,action={})=>{
    switch (action.type){
        case types.GET_SERTIFIKASI:return{
            ...state,
            sertifikasi:action.sertifikasi,
            isLoading:false,
            errMessage:null
        }
        case types.SERTIFIKASI_SHOW:return{
            ...state,
            detailSertifikasi : action.detailSertifikasi ,
            isLoading:false,
            errMessage:null
        }
        case types.SERTIFIKASI_FAILED:return{
            ...state,
            isLoading:false,
            errMessage:action.errMessage
        }
        case types.SERTIFIKASI_LOADING:return{
            ...state,
            isLoading:true,
            errMessage:null
        }
        default:return state
    }
}
