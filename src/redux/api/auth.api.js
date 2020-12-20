import { API } from './middleware.api'

export const registerAPI = async ({ name, username = '' , email = '' , password = '', confirm_password = '' }) => {
    return await API({
        url : '/api/register' ,
        method : 'POST',
        data : {
            name,
            username,
            email,
            password,
            confirm_password
        }
    }).then( res => res.data )
}