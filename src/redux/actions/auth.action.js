import { registerAPI , loginAPI , getProfileAPI } from '../api/auth.api'
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
                errMessage : data.error || data.message || 'An Error Occured' }) 
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
                errMessage : data.error || data.message || 'An Error Occured' })            
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