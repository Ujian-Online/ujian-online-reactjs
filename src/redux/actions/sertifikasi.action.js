import { sertifikasiAPI,sertifikasiDetailAPI } from '../api/sertifikasi.api'
import * as types from '../types/sertifikasi.type'

export const getSertifikasiAction = () => {
    return async dispatch => {
        try {
            dispatch({ type : types.SERTIFIKASI_LOADING})
            const response = await sertifikasiAPI()
            dispatch({ type : types.GET_SERTIFIKASI , sertifikasi : response.data })
        }catch(err) {
            console.error('[sertifikasi]', err)
        }
    }
}

export const getSertikasiDetailAction=(id)=>{
    return async dispatch=>{
        try{
            dispatch({ type : types.SERTIFIKASI_LOADING})
            const response = await sertifikasiDetailAPI(id) 
            dispatch({ 
                type : types.SERTIFIKASI_SHOW, 
                sertifikasi : response.data })
        }catch(err){
            console.error('[sertifikasi_detail]', err)
        }
    }
}