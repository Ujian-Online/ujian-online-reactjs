import { API } from './middleware.api'

export const registerAPI = async ({  email = '' , password = '' }) => {
    return await API({
        url : '/api/register' ,
        method : 'POST',
        data : {
            email,
            password,
        }
    }).then( res => res.data )
}

export const loginAPI = async ({username = '' , password = ''}) => {
    return await API({
        url : '/api/login' ,
        method : 'POST',
        data : {
            email : username,
            password,
        }
    }).then( res => res.data )
}