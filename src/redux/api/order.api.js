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