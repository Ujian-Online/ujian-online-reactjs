import { registerAPI } from '../api/auth.api'
import {loginAPI} from '../api/auth.api'
import * as types from '../types/auth.type'

export const registerUserAction = ({ name = '' , email = '' , password = '', confirm_password = '' }) => {
    return async dispatch => {
        try {
            await registerAPI({ name , email , password , confirm_password })
        }catch(err){
            console.error('register api', err)
        }
        
    }
}

export const loginUserAction = ({ username = '' , password = ''}) => {
    return async dispatch => {
        try {
            dispatch({ type : types.ON_LOGIN })
            const response = await loginAPI({username , password })
            dispatch({ 
                type : types.LOGIN_SUCCESS , 
                token : response.data && response.data.token })
        }catch(err){
            const data = err.response && err.response.data && err.response.data
            console.log('[login]', data)
            dispatch({ 
                type : types.LOGIN_ERROR , 
                errMessage : data.error || data.message || 'An Error Occured' })            
        }
        
    }
}