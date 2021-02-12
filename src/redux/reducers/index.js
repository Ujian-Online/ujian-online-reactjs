import authReducer from './auth.reducer'
import sertifikasiReducer from './sertifikasi.reducer'
import orderReducer from './order.reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    auth : authReducer,
    sertifikasi:sertifikasiReducer,
    order:orderReducer
});
