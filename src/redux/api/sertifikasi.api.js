import { API } from './middleware.api'
let draw = 1

export const sertifikasiAPI = async ({offset = 0 , limit = 10 , search = '' }) => {
    const pagination = `?draw=${draw++}&start=${offset}&length=${limit}`
    const columns = `&columns[0][data]=nomor_skema&columns[1][data]=title`
    return await API({
        url : `/api/sertifikasi${pagination}${columns}&search[value]=${search}` ,
        method : 'GET',
    }).then( res => res.data )
}


export const sertifikasiDetailAPI= async (id) => {
    return await API({
        url : '/api/sertifikasi/' + id,
        method : 'GET', 
    }).then( res => res.data )
}