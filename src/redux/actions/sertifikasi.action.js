import { sertifikasiAPI,sertifikasiDetailAPI } from '../api/sertifikasi.api'
import * as types from '../types/sertifikasi.type'

export const getSertifikasiAction = (query = {}) => {
    return async dispatch => {
        try {
            dispatch({ type : types.SERTIFIKASI_LOADING})
            const response = await sertifikasiAPI(query)        
            dispatch({ 
                type : types.GET_SERTIFIKASI , 
                sertifikasi : response.data , 
                query : { ...query , count : response.recordsTotal  } 
            })
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
                detailSertifikasi : response })
        }catch(err){
            console.error('[sertifikasi_detail]', err)
        }
    }
}