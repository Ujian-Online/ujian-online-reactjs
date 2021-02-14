import * as types from '../types/order.type'


const initialState = {
    order:[],
    isLoading: false,
    errMessage: null,
}

export default(state=initialState,action={})=>{
    switch (action.type){
        case types.GET_ORDER:return{
            ...state,
            order:action.order,
            isLoading:false,
            errMessage:null
        }
        case types.ORDER_FAILED:return{
            ...state,
            isLoading:false,
            errMessage:action.errMessage
        }
        case types.ORDER_LOADING:return{
            ...state,
            isLoading:true,
            errMessage:null
        }
        case types.ORDER_POST_SUCCESS:return{
            ...state,
            isLoading:false,
            errMessage:null
        }
        default:return state
    }
}



