import { orderAPI , postOrderAPI } from '../api/order.api'
import * as types from '../types/order.type'

export const getOrderAction=(token)=>{
    return async dispatch =>{
        try {
           dispatch({type:types.ORDER_LOADING})
           const response = await orderAPI(token)
           dispatch({type:types.GET_ORDER, order:response.data})
        }catch(err) {
            console.error('[order]', err)
        }
    }
}

export const postOrderAction=(token , payload )=>{
    return async dispatch =>{
        try {
           dispatch({type:types.ORDER_LOADING})
           await postOrderAPI(token , payload )
           dispatch({type:types.ORDER_POST_SUCCESS })
        }catch(err) {
            dispatch({type:types.ORDER_FAILED , errMessage : err })
            console.error('[postOrderAction]', err)
        }
    }
}
