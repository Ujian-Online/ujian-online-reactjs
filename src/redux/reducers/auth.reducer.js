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
        case types.ON_LOADING: return {
            ...state,
            isLoading: true,
            errMessage: null
        }
        case types.LOGIN_SUCCESS: return {
            ...state,
            isLoading: false,
            token: action.token,
            errMessage: null
        }
        case types.ON_ERROR: return {
            ...state,
            isLoading: false,
            errMessage : action.errMessage,
        }
        case types.REGISTER_SUCCESS: return {
            ...state,
            isLoading: false,
            token: action.token,
            errMessage : null,
        }
        case types.REMOVE_ERROR: return {
            ...state,
            errMessage : null
        }
        default: return state
    }

})