import { postApl01 , postCustomData , getApl01 } from '../api/apl01.api'
import * as types from '../types/apl01.type'

export const getApl01Action = (token)=>{
    return async dispatch =>{
        try {
           dispatch({type:types.APL01_LOADING})
           const response = await getApl01 (token)
           const asesicustomdata = response.data.asesicustomdata || []
           const customData = (response.customdata || []).map( cmd => {
                const asesiCmd = asesicustomdata.find( ascmd => ascmd.title === cmd.title ) 
                if(asesiCmd) {
                    cmd.value = asesiCmd.value
                    cmd.is_verified = asesiCmd.is_verified
                }
                return cmd
            })
           dispatch({type:types.GET_APL01 , apl01 : response.data , customData })
        }catch(err) {
            dispatch({type:types.APL01_FAILED , errMessage : err })
            console.error('[getApl01Action]', err)
        }
    }
}


export const postApl01Action = (token , payload )=>{
    return async dispatch =>{
        try {
           dispatch({type:types.APL01_LOADING})
           await postApl01 (token , payload )
           dispatch({ type:types.APL01_POST_SUCCESS })
        }catch(err) {
            dispatch({type:types.APL01_FAILED , errMessage : err && err.response && err.response.data || err })
            console.error('[postApl01Action]', err)
        }
    }
}

export const postCustomDataAction = (token , payload )=>{
    return async dispatch =>{
        try {
           dispatch({type:types.APL01_LOADING})
           await postCustomData (token , payload )
           dispatch({ type:types.APL01_POST_SUCCESS })
        }catch(err) {
            dispatch({type:types.APL01_FAILED , errMessage : err })
            console.error('[postCustomDataAction]', err)
        }
    }
}

