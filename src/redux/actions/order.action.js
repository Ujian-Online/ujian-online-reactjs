import { orderAPI , postOrderAPI, getDetailOrderAPI, sendProofPaymentAPI } from '../api/order.api'
import * as types from '../types/order.type'

export const getOrderAction=(token)=>{
    return async dispatch =>{
        try {
           dispatch({type:types.ORDER_LOADING})
           const response = await orderAPI(token)
           dispatch({type:types.GET_ORDER, order:response.data})
        }catch(err) {
            dispatch({type:types.ORDER_FAILED , errMessage : err })
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
            dispatch({type:types.ORDER_FAILED , errMessage : (err && err.response && err.response.data) || err && err.message})
            console.error('[postOrderAction]', err)
            
        }
    }
}

export const getDetailOrderAction = (token , payload )=>{
    return async dispatch =>{
        try {
           dispatch({type:types.ORDER_LOADING})
           const response = await getDetailOrderAPI(token , payload )
           dispatch({ type:types.SET_DETAIL_ORDER , detailOrder : response })
        }catch(err) {
            dispatch({type:types.ORDER_FAILED , errMessage : err })
            console.error('[getDetailOrderAction]', err)
        }
    }
}

export const sendProofPaymentAction = (token , orderId , payload )=>{
    return async dispatch =>{
        try {
           dispatch({type:types.ORDER_LOADING})
           await sendProofPaymentAPI(token , orderId , payload )
           dispatch({type:types.ORDER_POST_SUCCESS })
        }catch(err) {
            dispatch({type:types.ORDER_FAILED , errMessage : (err && err.response && err.response.data) || err })
            console.error('[sendProofPaymentAction]', err)
        }
    }
}


export const resetReducerOrderAction = () => dispatch => dispatch({ type : types.RESET_REDUCER_ORDER })

