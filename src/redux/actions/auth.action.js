import { registerAPI , loginAPI , getProfileAPI,forgetPasswordAPI,resetPasswordAPI} from '../api/auth.api'
import * as types from '../types/auth.type'

export const registerUserAction = ({  email = '' , password = '' }) => {
    return async dispatch => {
        try {
            dispatch({ type : types.ON_LOADING })
            const response = await registerAPI({ email , password  })
            dispatch({ 
                type : types.REGISTER_SUCCESS , 
                token : response.data && response.data.token })
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
                errMessage : data.err || data.message || 'An Error Occured' })            
        }
        
    }
}

export const getProfileAction = (token) => {
    return async dispatch => {
        try {
            const response = await getProfileAPI(token)
            dispatch({ type : types.SET_USER , user : response.data })
        }catch(err) {
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
            const data = err.response && err.response.data && err.response.data||{}
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

