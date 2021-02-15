import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { resetReducerOrderAction  } from '../../redux/actions/order.action'

const SuccessRegisterUjiSertifikasi = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetReducerOrderAction())
    }, [])

    return (
    <div className={`container-fluid`}  >
        <div className='row h-100'>
            <div className="container-fluid  bg-white col-md-12 col-xs-6 mb-5 mt-4">
                <div className="col-md-12 text-center ml-auto mr-auto mb-3 mt-3">
                    <img src='/assets/img/mailbox.png' alt='logo' />
                    <div className="col-md-6 text-center ml-auto mr-auto">
                        <h1 className="mb-lg-5">Check email anda!</h1>
                    <p>
                        Register Uji Sertifikasi Anda berhasil. Untuk proses selanjutnya silakan periksa email Anda untuk mendapatkan invoice pembayaran mengikuti sertifikasi.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default SuccessRegisterUjiSertifikasi