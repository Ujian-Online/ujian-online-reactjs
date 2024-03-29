import { API } from './middleware.api'

export const registerAPI = async ({  email = '' , password = '', recaptcha = '' }) => {
    return await API({
        url : '/api/register' ,
        method : 'POST',
        data : {
            email,
            password,
            "g-recaptcha-response" : recaptcha
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

export const getProfileAPI = async (token) => {
    return await API({
        url : '/api/user/me' ,
        method : 'GET',
        headers : {
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}

export const forgetPasswordAPI = async ({email='',password='',token}) => {
    return await API({
        url : '/api/password/change' ,
        method : 'POST',
        data : {
            email,
            password
        },
        headers : {
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}

export const resetPasswordAPI = async ({email=''}) => {
    return await API({
        url : '/api/password/reset' ,
        method : 'POST',
        data : {
            email
        }
    }).then( res => res.data )
}

export const verifikasiAPI = async (token) => {
    return await API({
        url : '/api/email/verify' ,
        method : 'POST',
        headers : {
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}

export const resendAPI = async (token) => {
    return await API({
        url : '/api/email/resend' ,
        method : 'POST',
        headers : {
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}