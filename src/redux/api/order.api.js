import { API } from './middleware.api'


export const orderAPI = async (token) => {
    return await API({
        url : '/api/order' ,
        method : 'GET',
        headers : {
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}

export const postOrderAPI = async (token , order ) => {
    const formData = new FormData()
    Object.keys(order).forEach( key => {
        formData.set(key , order[key] )
    })
    
    return await API({
        url : '/api/order' ,
        method : 'POST',
        data: formData ,
        headers : {
            'Content-Type':'application/json',
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}
