import { registerAPI , loginAPI , getProfileAPI,forgetPasswordAPI,resetPasswordAPI, verifikasiAPI, resendAPI} from '../api/auth.api'
import * as types from '../types/auth.type'

export const registerUserAction = ({  email = '' , password = '', recaptcha = "" }) => {
    return async dispatch => {
        try {
            dispatch({ type : types.ON_LOADING })
            await registerAPI({ email , password, recaptcha  })
            dispatch({ 
                type : types.REGISTER_SUCCESS , 
                succesRegister : true })
        }catch(err){
            const data = err.response && err.response.data && err.response.data
            console.error('[register]', err)
            dispatch({ 
                type : types.ON_ERROR , 
                errMessage : data.err || data.message || 'An Error Occured' }) 
        }
        
    }
}

export const loginUserAction = ({ username = '' , password = ''}) => {
    return async dispatch => {
        try {
            dispatch({ type : types.ON_LOADING })
            const response = await loginAPI({username , password })
            dispatch({ 
                type : types.LOGIN_SUCCESS , 
                token : response.data && response.data.token })
        }catch(err){
            const data = err.response && err.response.data && err.response.data
            console.error('[login]', data)
            dispatch({ 
                type : types.ON_ERROR , 
                errMessage : data.err || data.message || 'Email atau password salah' })            
        }
        
    }
}

export const getProfileAction = (token) => {
    return async dispatch => {
        try {
            const response = await getProfileAPI(token)
            dispatch({ type : types.SET_USER , user : response.data })
        }catch(err) {
            const message = (err.response && (err.response.data && err.response.data.message)) || ''
            if(message === 'Unauthenticated.' || err.response.statusCode === 401 ) {
                dispatch({ type : types.LOGOUT })
            }else {
                dispatch({ type : types.RESEND_EMAIL , needVerify : true  })
            }
            console.error('[login]', err)
        }
    }
}

export const closeErrorMessageAction = () => (dispatch) => dispatch({ type : types.REMOVE_ERROR })

export const logoutAction = () => dispatch => {
    return dispatch({ type : types.LOGOUT })
}

export const forgetPasswordAction = ({  email = '', password='',token}) => {
    return async dispatch => {
        try {
            dispatch({ type : types.ON_LOADING })
            const response = await forgetPasswordAPI({email,password,token})
            dispatch({ 
                type : types.FORGET_PASSWORD , 
                token : response.data && response.data.token })
        }catch(err){
            const data = (err.response && err.response.data && err.response.data) || {}
            console.error('[Lupa_Password]', data)
            dispatch({ 
                type : types.ON_ERROR, 
                errMessage : data.err || data.message || 'An Error Occured' }) 
        }
        
    }
}

export const resetPasswordAction = ({  email = ''}) => {
    return async dispatch => {
        try {
            dispatch({ type : types.ON_LOADING })
            const response = await resetPasswordAPI({email})
            dispatch({ 
                type : types.RESET_PASSWORD, 
                token : response.data && response.data.token})
        }catch(err){
            const data = err.response && err.response.data && err.response.data
            console.error('[Reset_Password]', data)
            dispatch({ 
                type : types.ON_ERROR, 
                errMessage : data.err || data.message || 'An Error Occured' }) 
        }
        
    }
}
export const setTokenAction=(token)=> dispatch=>{
    dispatch({ 
        type : types.LOGIN_SUCCESS , 
        token : token })
}
export const EmailErrorMessageAction=()=>(dispatch)=>dispatch({type:types.EMAIL_ERROR})

export const verifikasiAction = (token) => {
    return async dispatch => {
        try {
            await verifikasiAPI(token)
            dispatch({ type : types.RESEND_EMAIL , needVerify : false  })
        }catch(err) {
            if((err.response.data && err.response.data.error) === "Email sudah di verifikasi.") {
                dispatch({ type : types.RESEND_EMAIL , needVerify : false  })
            }
            console.error('[verifikasi]', err)
        }
    }
}

export const resendAction = (token) => {
    return async dispatch => {
        try {
            await resendAPI(token)
            dispatch({ type : types.RESEND_EMAIL , needVerify : false  })
        }catch(err) {
            console.error('[resend]', err)
        }
    }
}

export const VerifikasiErrorAction=()=>(dispatch)=>dispatch({types:types.VERIFIKASI_ERROR})