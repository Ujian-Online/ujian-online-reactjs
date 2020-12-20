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

export default persistReducer(persistConfig, (state = initialState, action={}) => {
    switch(action.type) {
         case types.REQUEST_AUTH: return {
          ...state,
          isLoading: true
        }
        case types.REGISTERING_USER:return{
            ...state,
            isLoading:false,
           user:action.user,
           token:action.token,
           errMessage:action.errMessage,
        }
        case types.REGISTERED_USER:return{
            ...state,
            isLoading:false,
            errMessage:action.errMessage,
        }

        default : return state
    }
})