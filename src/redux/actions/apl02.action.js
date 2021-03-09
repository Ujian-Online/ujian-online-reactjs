import { getApl02, getDetailApl02, postApl02 } from '../api/apl02.api'
import * as types from '../types/apl02.type'

export const getApl02Action = (token)=>{
    return async dispatch =>{
        try {
           dispatch({type:types.APL02_LOADING})
           const response = await getApl02 (token)
           dispatch({type:types.GET_APL02 , apl02 : response.data  })
        }catch(err) {
            dispatch({type:types.APL02_FAILED , errMessage : err })
            console.error('[getApl02Action]', err)
        }
    }
}

export const getApl02DetailAction = (token,payload)=>{
    return async dispatch =>{
        try {
           dispatch({type:types.APL02_LOADING})
           const response = await  getDetailApl02 (token,payload)
           dispatch({type:types.SET_DETAIL_SHOW ,  detailApl : response  })

        }catch(err) {
            dispatch({type:types.APL02_FAILED , errMessage : err })
            console.error('[getApl02DetailAction]', err)
        }
    }
}

export const postApl02Action = (token , payload )=>{
    return async dispatch =>{
        try {
           dispatch({type:types.APL02_LOADING})
           await postApl02 (token , payload )
           dispatch({ type:types.APL02_POST_SUCCESS })
        }catch(err) {
            dispatch({type:types.APL02_FAILED , errMessage : err })
            console.error('[postApl02Action]', err)
        }
    }
}

