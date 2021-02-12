import { orderAPI } from '../api/order.api'
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
