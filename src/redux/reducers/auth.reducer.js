import { persistReducer } from 'redux-persist'
import * as types from '../types/auth.type'
import storage from 'redux-persist/lib/storage'

const initialState = {
    user: '',
    token: null,
    isLoading: false,
    errMessage: null,
}

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'user']
}

export default persistReducer(persistConfig, (state = initialState, action = {}) => {
    switch (action.type) {
        case types.ON_LOGIN: return {
            ...state,
            isLoading: true,
        }
        case types.LOGIN_SUCCESS: return {
            ...state,
            isLoading: false,
            token: action.token,
            errMessage: null
        }
        case types.LOGIN_ERROR: return {
            ...state,
            isLoading: false,
            errMessage : action.errMessage,
        }
        default: return state
    }

})