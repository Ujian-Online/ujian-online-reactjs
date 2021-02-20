import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'
import {Button,Modal} from 'react-bootstrap'

export const status_bayar = {
    'waiting_payment' : <span className='badge badge-primary' style={{ fontSize : '12px' }} >Menunggu Pembayaran</span> ,
    'payment_verified' : <span className='badge badge-success' style={{ fontSize : '12px' }} >Terbayar</span>,
    'pending_verification' : <span className='badge badge-warning' style={{ fontSize : '12px' }} >Menunggu Verifikasi</span>,
    'payment_rejected' : <span className='badge badge-danger' style={{ fontSize : '12px' }} >Pembayaran ditolak</span>,
    'canceled' : <span className='badge badge-danger' style={{ fontSize : '12px' }} >Dibatalkan</span>,
    'completed' : <span className='badge badge-success' style={{ fontSize : '12px' }} >Selesai</span>
}

