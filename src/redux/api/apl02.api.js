import { API } from './middleware.api'


export const getApl02 = async (token ) => {

    return await API({
        url : '/api/apl02/1' ,
        method : 'GET',
        headers : {
            'Content-Type':'application/json',
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}


export const postApl012 = async (token , payload ) => {

    const formData = new FormData()
    formData.set('id' , payload.id )
    formData.set('value' , payload.value )

    return await API({
        url : '/api/apl02' ,
        method : 'POST',
        data : formData ,
        headers : {
            'Content-Type':'application/json',
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}


export const getDetailApl02 = async (token , sertifikasiId ) => {

    return await API({
        url : '/api/apl02/'+ sertifikasiId ,
        method : 'GET',
        headers : {
            'Content-Type':'application/json',
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}

