import { detailExamAPI, examAPI, startExamAPI } from '../api/exam.api'
import * as types from '../types/exam.type'

export const getExamAction=(token)=>{
    return async dispatch =>{
        try {
           dispatch({type:types.EXAM_LOADING})
           const response = await examAPI(token)
           dispatch({type:types.GET_EXAM, exam:response})
        }catch(err) {
            dispatch({type:types.EXAM_FAILED , errMessage : err })
            console.error('[list exam]', err)
        }
    }
}

export const getDetailExamAction=(token,payload)=>{
    return async dispatch =>{
        try {
           dispatch({type:types.EXAM_LOADING})
           const response = await detailExamAPI(token,payload)
           dispatch({type:types.DETAIL_EXAM_SHOW, detailExam:response})
        }catch(err) {
            dispatch({type:types.EXAM_FAILED , errMessage : err })
            console.error('[schedule exam]', err)
        }
    }
}

export const postStartExamAction=(token,payload)=>{
    return async dispatch =>{
        try {
           dispatch({type:types.EXAM_LOADING})
           const response = await startExamAPI(token,payload)
           dispatch({type:types.START_EXAM})
        }catch(err) {
            dispatch({type:types.EXAM_FAILED , errMessage : err && err.response && err.response.data || err })
            console.error('[start exam]', err)
        }
    }
}