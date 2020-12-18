import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
    username: '',
    token: null,
    isLoading: false,
    errMessage: null,
}

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'username']
}

export default persistReducer(persistConfig, (state = initialState, action) => {
    switch(action.type) {
        // case REQUEST_AUTH: return {
        //     ...state,
        //     isLoading: true
        // }

        default : return state
    }
})