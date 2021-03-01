import {API} from './middleware.api';

export const DetailUjian = async (token, id) => {
    return await API({
        url : '/api/ujian/' + id ,
        method : 'GET',
        headers : {
            Authorization : 'Bearer ' + token
        }
    }).then(res => res.data)
}

export const submitUjian = async(token, data) => {
    const formData = new FormData();
    Object.keys(data).forEach( key => {
        formData.set(key , data[key] )
    })

    return await API({
        url : '/api/ujian/jawaban' ,
        method : 'POST',
        data: formData ,
        headers : {
            'Content-Type':'application/json',
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}