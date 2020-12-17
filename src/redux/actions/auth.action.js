import { registerAPI } from '../api/auth.api'

export const registerUserAction = ({ name = '' , email = '' , password = '', confirm_password = '' }) => {
    return async dispatch => {
        try {
            await registerAPI({ name , email , password , confirm_password })
        }catch(err){
            console.error('register api', err)
        }
        
    }
}