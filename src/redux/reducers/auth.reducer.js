import { persistReducer } from 'redux-persist'
import * as types from '../types/auth.type'
import storage from 'redux-persist/lib/storage'

const initialState = {
    user: '',
    token: null,
    isLoading: false,
    errMessage: null,
    needVerify : false,
    succesRegister : false,
    resetPasswordSuccess : false
}

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'user' ]
}

export default persistReducer(persistConfig, (state = initialState, action = {}) => {
    switch (action.type) {
        case types.ON_LOADING: return {
            ...state,
            isLoading: true,
            errMessage: null,
            succesRegister : false ,
            needVerify : false ,
            resetPasswordSuccess:false
        }
        case types.LOGIN_SUCCESS: return {
            ...state,
            isLoading: false,
            token: action.token,
            errMessage: null
        }
        case types.ON_ERROR: return {
            ...state,
            isLoading: false,
            errMessage : action.errMessage,
        }
        case types.REGISTER_SUCCESS: return {
            ...state,
            isLoading: false,
            needVerify: true,
            succesRegister : true ,
            errMessage : null,
        }
        case types.REMOVE_ERROR: return {
            ...state,
            errMessage : null
        }
        case types.SET_USER: return {
            ...state,
            user : action.user
        }
        case types.LOGOUT: return {
            ...state,
            user : null,
            token : null
        }
        case types.RESET_PASSWORD:return{
            ...state,
            token:action.token,
            isLoading:false,
            errMessage:null,
            resetPasswordSuccess:true
        }
        case types.FORGET_PASSWORD: return{
            ...state,
            token:action.token,
            errMessage:null,
            resetPasswordSuccess:true,
            isLoading:false
        }
        case types.EMAIL_ERROR:return{
            ...state,
            errMessage:null
        }
        case types.VERIFIKASI_USER:return{
            ...state,
            token:action.token,
            errMessage:null
        }
        case types.VERIFIKASI_ERROR:return{
            ...state,
            errMessage:null
        }
        case types.RESEND_EMAIL :return{
            ...state,
            needVerify : action.needVerify ,
            errMessage: null
        }
        default: return state
    }

})