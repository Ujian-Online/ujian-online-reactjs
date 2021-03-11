import * as types from '../types/exam.type'


const initialState = {
    exam:[],
    isLoading: false,
    errMessage: null
}

const reducer = (state=initialState,action={})=>{
    switch (action.type){
        case types.GET_EXAM:return{
            ...state,
            exam:action.exam,
            isLoading:false,
            errMessage:null,
        }
        case types.EXAM_FAILED:return{
            ...state,
            isLoading:false,
            errMessage:action.errMessage
        }
        case types.EXAM_LOADING:return{
            ...state,
            isLoading:true,
            errMessage:null,
        }
        case types.DETAIL_EXAM_SHOW:return{
            ...state,
            detailExam:action.detailExam,
            isLoading:false,
            errMessage:null
        }
        case types.START_EXAM:return{
            ...state,
            isStart:action.isStart,
            isLoading:false,
            errMessage:null
        }
        
        default:return state
    }
}


export default reducer
