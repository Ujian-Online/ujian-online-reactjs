import { createUseStyles } from 'react-jss'
import {Link, useHistory} from 'react-router-dom'
import UploadForm from './uploadBuktiForm'
import UploadBuktiDetailInformasi from './uploadBuktiDetailInformasi'
import { useEffect } from 'react'
import { getDetailOrderAction } from '../../../redux/actions/order.action'
import { useDispatch, useSelector } from 'react-redux'

const UploadPembayaranPage = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const auth = useSelector( state => state.auth )
    const order = useSelector( state => state.order )
    const { id } = props.match.params

    
    useEffect(() => {
        dispatch(getDetailOrderAction( auth.token , id ))
    }, [] )

    return (<div className='col-12 col-sm-10 ml-auto mr-auto card my-4'  >
                <h2 className="text-center mb-3 mb-lg-5 col-md-12 mt-3">
                    Upload Pembayaran
                </h2>
                <div className='row '>
                <div className={`col-md-6 col-sm-6`} >
                    <UploadBuktiDetailInformasi order={order.detailOrder}  />
                </div>
                <div className="col-md-6 col-sm-6">
                    <UploadForm />
                </div>
                <div className="form-group col-sm-4 col-md-4 ml-auto mr-auto">
                    <button type="submit" className="btn btn-primary btn-block">
                        Upload Pembayaran
                    </button>
                    <button type="submit" className="btn btn-light bg-gray btn-block" onClick={()=>history.push('/member/menunggu-pembayaran')}>
                            Kembali
                    </button>
                </div>
        </div>
    </div>)
}
export default UploadPembayaranPage