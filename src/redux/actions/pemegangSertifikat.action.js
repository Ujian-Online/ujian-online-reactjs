import {pemilikSertifikasiAPI} from '../api/pemegangSertifikat.api'
import * as types from '../types/pemegangSertifikat.type'

export const getHolderSertifikatAction=()=>{
    return async dispatch =>{
        try {
           dispatch({type:types.SERTIFIKASI_HOLDER_LOADING})
           const response = await  pemilikSertifikasiAPI ()
           dispatch({type:types.SERTIFIKASI_HOLDER_SHOW , holder:response.data})
        }catch(err) {
            dispatch({type:types.SERTIFIKASI_HOLDER_FAILED , errMessage : err })
            console.error('[list Pemegang sertifikat]', err)
        }
    }
}