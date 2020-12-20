import { API } from './middleware.api'

export const registerAPI = async ({  name, email = '' , password = '', confirm_password = '' }) => {
    return await API({
        url : '/api/register' ,
        method : 'POST',
        data : {
            name,
            email,
            password,
            confirm_password
        }
    })
}

export const loginAPI = async ({username = '' , password = ''}) => {
    return await API({
        url : '/api/login' ,
        method : 'POST',
        data : {
            username,
            password,
        }
    }).then( res => res.data )
}