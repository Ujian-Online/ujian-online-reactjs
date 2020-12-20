import { registerAPI } from '../api/auth.api'
import * as types from '../types/auth.type'

export const registerUserAction = ({ name = '',username='' , email = '' , password = '', confirm_password = '' }) => {
    return async dispatch => {
        try {
            dispatch({type:types.REQUEST_AUTH})
            dispatch({type:types.REGISTERING_USER})            
            const response =await registerAPI({ name, username , email , password , confirm_password })
            dispatch({ 
                type : types.REGISTERED_USER , 
                token : response.data && response.data.token,
                user:response.data && response.data.user 
            })
        }catch(err){
            dispatch({
                type : types.REQUEST_FAILED , 
                errMessage : err.response && err.response.data && err.response.data.error})

        }
        
    }
}