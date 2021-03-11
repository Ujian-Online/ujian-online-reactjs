import { postApl01 , postCustomData , getApl01, postSignUser } from '../api/apl01.api'
import * as types from '../types/apl01.type'

export const getApl01Action = (token)=>{
    return async dispatch =>{
        try {
           dispatch({type:types.APL01_LOADING})
           const response = await getApl01 (token)
           const customData = response.customdata || []
           dispatch({type:types.GET_APL01 , apl01 : response.data , customData })
        }catch(err) {
            dispatch({type:types.APL01_FAILED , errMessage : err })
            console.error('[getApl01Action]', err)
        }
    }
}


export const postApl01Action = (token , payload , payloadSign )=>{
    return async dispatch =>{
        try {
           dispatch({type:types.APL01_LOADING})
           await postApl01 (token , payload )
           await postSignUser (token , payloadSign )
           dispatch({ type:types.APL01_POST_SUCCESS })
        }catch(err) {
            dispatch({type:types.APL01_FAILED , errMessage : (err && err.response && err.response.data) || err })
            console.error('[postApl01Action]', err)
        }
    }
}

export const postCustomDataAction = (token , payload )=>{
    return async () =>{
        try {
           await postCustomData (token , payload )
        }catch(err) {            
            console.error('[postCustomDataAction]', err)
            const errors = err && err.response && err.response.data && err.response.data.errors
            throw Error( (errors && err.response.data.errors.value.join()) || "An error occured.")
        }
    }
}

