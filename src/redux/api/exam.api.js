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

export const answerQuestionAPI = async (token, id, answer) => {
    const formData = new FormData();
    formData.set('id', id);
    formData.set('answer', answer)

    return await API({
        url: `/api/ujian/jawaban`,
        method: 'POST',
        headers : {
            Authorization : 'Bearer ' + token
        },
        data: formData
    }).then(res => res.data)
}

export const finishExamAPI = async (token,id) => {
    return await API({
        url : `/api/ujian/${id}/finish`,
        method : 'POST',
        headers : {
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}
