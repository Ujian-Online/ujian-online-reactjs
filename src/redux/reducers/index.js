import authReducer from './auth.reducer'
import sertifikasiReducer from './sertifikasi.reducer'
import orderReducer from './order.reducer'
import apl01Reducer from './apl01.reducer'
import ujianReducer from './ujian.reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    auth : authReducer,
    sertifikasi:sertifikasiReducer,
    order:orderReducer,
    apl01: apl01Reducer,
    ujian: ujianReducer
});
