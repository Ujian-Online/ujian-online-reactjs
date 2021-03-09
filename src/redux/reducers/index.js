import authReducer from './auth.reducer'
import sertifikasiReducer from './sertifikasi.reducer'
import orderReducer from './order.reducer'
import apl01Reducer from './apl01.reducer'
import examReducer from './exam.reducer'
import apl02Reducer from './apl02.reducer'
import holderReducer from './pemegangSertifikat.reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    auth : authReducer,
    sertifikasi:sertifikasiReducer,
    order:orderReducer,
    apl01: apl01Reducer,
    exam:  examReducer,
    apl02:apl02Reducer,
    holder:holderReducer
});
