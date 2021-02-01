import { API } from './middleware.api'


export const sertifikasiAPI = async () => {
    return await API({
        url : '/api/sertifikasi' ,
        method : 'GET',
    }).then( res => res.data )
}


export const sertifikasiDetailAPI= async (id) => {
    return await API({
        url : '/api/sertifikasi/' + id,
        method : 'GET', 
    }).then( res => res.data )
}