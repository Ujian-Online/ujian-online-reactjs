import { persistReducer } from 'redux-persist'
import {LOGIN_SUCCESS} from '../types/auth.type'
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

export default persistReducer(persistConfig, (state = initialState, action) => {
    switch(action.type) {
        // case REQUEST_AUTH: return {
        //     // ...state,
        //     //  isLoading: true
        //  }

        case LOGIN_SUCCESS: return {
             ...state,
            isLoading: false,
            user:action.user,
            token:action.token,
            }
        default : return state
    }
    
})