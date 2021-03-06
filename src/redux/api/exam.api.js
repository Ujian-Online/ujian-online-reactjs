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

export const detailExamAPI = async (token,id) => {
    return await API({
        url : '/api/ujian/detail/'+id ,
        method : 'GET',
        headers : {
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}


export const detailQuestionExamAPI = async (token,id) => {
    return await API({
        url : '/api/ujian/soal/'+id ,
        method : 'GET',
        headers : {
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}

export const startExamAPI = async (token,id) => {
    return await API({
        url : `/api/ujian/${id}/start`,
        method : 'POST',
        headers : {
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}


