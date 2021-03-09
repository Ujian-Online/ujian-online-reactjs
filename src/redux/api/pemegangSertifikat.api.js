import { API } from './middleware.api'


export const pemilikSertifikasiAPI = async () => {
    return await API({
        url : '/api/pemegang-sertifikasi' ,
        method : 'GET',
    }).then( res => res.data )
}
