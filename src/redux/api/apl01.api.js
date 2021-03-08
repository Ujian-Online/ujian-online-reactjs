import { API } from './middleware.api'


export const postApl01 = async (token , payload ) => {

    return await API({
        url : '/api/apl01' ,
        method : 'POST',
        data : payload ,
        headers : {
            'Content-Type':'application/json',
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}

export const getApl01 = async (token ) => {

    return await API({
        url : '/api/apl01' ,
        method : 'GET',
        headers : {
            'Content-Type':'application/json',
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}

export const postCustomData = async (token , payload ) => {

    const formData = new FormData()
    Object.keys(payload).forEach( key => {
        formData.set(key , payload[key] )
    })

    return await API({
        url : '/api/apl01/customdata' ,
        method : 'POST' ,
        data : formData ,
        headers : {
            'Content-Type':'application/json',
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}

export const postSignUser = async (token , payload ) => {

    const formData = new FormData()
    Object.keys(payload).forEach( key => {
        formData.set(key , payload[key] )
    })

    return await API({
        url : '/api/user' ,
        method : 'POST' ,
        data : formData ,
        headers : {
            'Content-Type': 'multipart/form-data',
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}
