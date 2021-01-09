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

export const verifiedEmailAPI = async (token) => {
    return await API({
        url : '/api/email/verify' ,
        method : 'POST',
        headers: {
            Authorization : 'Bearer ' +token
        }
    }).then( res => res.data )
}

export const getProfileAPI = async (token) => {
    return await API({
        url : '/api/me' ,
        method : 'GET',
        headers : {
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}

// export const forgetPasswordAPI = async ({email=''}) => {
//     return await API({
//         url : '/api/email/resend' ,
//         method : 'POST',
//         data : {
//             email
//         }
//     }).then( res => res.data )
// }

export const resendEmailAPI = async (token) => {
    return await API({
        url : '/api/email/resend' ,
        method : 'POST',
        headers : {
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}

