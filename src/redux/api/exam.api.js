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

export const detailExamAPI = async (token,id,exam) => {
    return await API({
        url : '/api/ujian/'+id ,
        method : 'GET',
        headers : {
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}
