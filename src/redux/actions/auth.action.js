import { registerAPI } from '../api/auth.api'
import {loginAPI} from '../api/auth.api'

export const registerUserAction = ({ name = '' , email = '' , password = '', confirm_password = '' }) => {
    return async dispatch => {
        try {
            await registerAPI({ name , email , password , confirm_password })
        }catch(err){
            console.error('register api', err)
        }
        
    }
}

export const loginUserAction = ({ email = '' , password = ''}) => {
    return async dispatch => {
        try {
            await loginAPI({email , password })
        }catch(err){
            console.error('Login api', err)
        }
        
    }
}