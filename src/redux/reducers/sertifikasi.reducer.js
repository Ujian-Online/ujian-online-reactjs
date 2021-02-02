import * as types from '../types/sertifikasi.type'

const initialState={
    sertifikasi:[],
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
            id:action.id,
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
// const initialState = {
//     sertifikasi:[],
//     isLoading: false,
//     errMessage: null,
// }

// const persistConfig = {
//     key: 'sertifikasi',
//     storage,
//     whitelist: ['id', 'unitkompetensi']
// }

// export default persistReducer(persistConfig, (state = initialState, action = {}) => {
//     switch (action.type) {
//         case types.GET_SERTIFIKASI:return{
//             ...state,
//             id:action.id,
//             title:action.title,
//             sertifikasi:action.sertifikasi.id,
//             errMessage:null
//         }
//         case types.SERTIFIKASI_SHOW: return{
//             ...state,
//             title:action.title,
//             errMessage:null
//         }
//         case types.SERTIFIKASI_FAILED:return{
//             ...state,
//             isLoading:false,
//             errMessage:null
//         }
//         default: return state
//     }

// })