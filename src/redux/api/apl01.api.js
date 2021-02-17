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
