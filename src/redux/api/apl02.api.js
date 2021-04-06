import { API } from './middleware.api'


export const getApl02 = async (token ) => {

    return await API({
        url : '/api/apl02' ,
        method : 'GET',
        headers : {
            'Content-Type':'application/json',
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}


export const postApl02 = async (token , payload ) => {

    if( typeof payload.value === 'string'){
        delete payload.value
    }

    const formData = new FormData()
    Object.keys(payload).forEach( key => {
        if(payload[key]){
            formData.set(key , payload[key] )
        }
    })

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

export const deleteAPL02 = async (token , mediaId ) => {

    return await API({
        url : '/api/apl02/'+ mediaId ,
        method : 'DELETE',
        headers : {
            'Content-Type':'application/json',
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}
