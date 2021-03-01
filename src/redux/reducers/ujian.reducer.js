import { persistReducer } from 'redux-persist'
import * as types from '../types/ujian.type'
import storage from 'redux-persist/lib/storage'

const initialState = {
    answer: {},
    soal_id: "",
}

const persistConfig = {
    key: 'ujian',
    storage,
    whitelist: ['soal_id', 'answer' ]
}

export default persistReducer(persistConfig, (state = initialState, action = {}) => {
    switch(action.type) {
        case types.SET_ANSWER: 
            return {
                ...state,
                answer: {
                    ...state.answer,
                    [action.id] : action.answer
                }
            }
        case types.CLEAR_ANWSER:
            return {
                ...state,
                answer: {}
            }
        case types.DELETE_ANSWER:
            let newAnswer = state.answer;
            if(newAnswer[action.id]) delete newAnswer[action.id];
            return {
                ...state,
                answer: newAnswer
            }
        case types.SET_SOAL_ID:
            return {
                ...state,
                soal_id: action.id
            }
        default: 
            return state
    }
})