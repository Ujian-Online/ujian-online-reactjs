import { API } from './middleware.api'
import moment from 'moment'

export const orderAPI = async (token) => {
    return await API({
        url : '/api/order' ,
        method : 'GET',
        headers : {
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}

export const postOrderAPI = async (token , order ) => {
    order.training = order.training ? 1 : 0
    if(order.tipe_sertifikasi === 'perpanjang'){
        order.sertifikat_date_old = moment(order.sertifikat_date_old).format('YYYY-MM-DD')
    }else{
        order.sertifikat_number_old = ''
        order.sertifikat_date_old = ''
        order.sertifikat_upload_old = ''
    }
    const formData = new FormData()
    Object.keys(order).forEach( key => {
        formData.set(key , order[key] )
    })
    
    return await API({
        url : '/api/order' ,
        method : 'POST',
        data: formData ,
        headers : {
            'Content-Type':'application/json',
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}

export const getDetailOrderAPI = async (token , orderId ) => {
    return await API({
        url : '/api/order/'+ orderId ,
        method : 'GET',
        headers : {
            Authorization : 'Bearer ' + token
        }
    }).then( res => res.data )
}