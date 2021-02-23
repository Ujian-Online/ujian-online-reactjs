import { API } from './middleware.api'

export const examAPI = async (token) => {
    return await API({
        url : '/api/ujian' ,
        method : 'GET',
        headers : {
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}