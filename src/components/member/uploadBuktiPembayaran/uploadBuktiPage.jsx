import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDetailOrderAction, sendProofPaymentAction } from '../../../redux/actions/order.action'
import { useDispatch, useSelector } from 'react-redux'
import { createUseStyles } from 'react-jss'
import { Spinner } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const useStyles = createUseStyles({
    detailInformasi: {
        fontSize: '16px'
    }
})


const UploadPembayaranPage = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const order = useSelector(state => state.order || {})
    const detailOrder = order.detailOrder || {}
    const user = detailOrder.user || {}
    const sertifikasi = detailOrder.sertifikasi || {}
    const tuk = detailOrder.tuk || {}
    const bank = tuk.bank || []
    const { id } = props.match.params
    const classes = useStyles()
    const [stateForm, setStateForm] = useState({
        transfer_from_bank_name: '',
        transfer_from_bank_account: '',
        transfer_from_bank_number: '',
        bukti_transfer: '',
        bank_id : '',
        transfer_date: new Date()
    })

    useEffect(() => {
        setStateForm({ ...stateForm , bank_id :  bank[0] && bank[0].id || ''  })
    }, [order ] )

    useEffect(() => {
        dispatch(getDetailOrderAction(auth.token, id))
    }, [])

    useEffect(() => {
        if (order.isSuccessPost) {
            history.push('/member/upload-bukti-pembayaran-detail/sukses')
        }
    }, [order.isSuccessPost])

    const renderLoading = () => (
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    )

    return (<div className='container my-4 ' >
        <div className='row ' >
            <div className='col-12 ' >
                <div className='card p-2 ' >
                    <h4 className='text-center ' >Upload</h4>
                    <h4 className='text-center ' >Pembayaran</h4>
                    <div className='container mt-4 mt-md-5 ' >
                        <div className='row mb-4 ' >
                            <div className={`col-md-6 border-right ` + classes.detailInformasi} >
                                <div className='row px-0 px-md-4 ' >
                                    <div className='col-4  ' >Nama</div>
                                    <div className='col-8 ' >
                                        : <span className='ml-2' >{user.email}</span>
                                    </div>
                                </div>
                                <div className='row mt-2 px-md-4 ' >
                                    <div className='col-4 ' >Sertifikasi</div>
                                    <div className='col-8 ' >
                                        : <span className='ml-2' >{sertifikasi.title}</span>
                                    </div>
                                </div>
                                <div className='row mt-2 px-md-4 ' >
                                    <div className='col-4 ' >TUK</div>
                                    <div className='col-8 ' >
                                        : <span className='ml-2' >{tuk.title}</span>
                                    </div>
                                </div>
                                <div className='row mt-2 px-md-4 ' >
                                    <div className='col-4 ' >Training</div>
                                    <div className='col-8 ' >
                                        : <span className='ml-2' >Training</span>
                                    </div>
                                </div>
                                <div className='row mt-2 px-md-4 ' >
                                    <div className='col-4 ' >Sertifikasi Ulang</div>
                                    <div className='col-8 ' >
                                        : <span className='ml-2' >{detailOrder.tipe_sertifikasi}</span>
                                    </div>
                                </div>
                                <div className='row mt-2 px-md-4 ' >
                                    <div className='col-4 ' >No. Sertifikat</div>
                                    <div className='col-8 ' >
                                        : <span className='ml-2' >{detailOrder.asesi_id} </span>
                                    </div>
                                </div>
                                <div className='row mt-2 px-md-4' >
                                    <h6 className='col-12 mt-5 mb-4 ' >
                                        Transfer Melalui :
                                    </h6>
                                </div>
                                <div className='row mt-2 px-md-4' >
                                    <div className='col-12 d-flex align-items-start ' >
                                        <img src='/assets/img/mandiri.png' alt='mandiri' />
                                        <div className='ml-2 '>
                                            <h6>Bank Mandiri</h6>
                                            <h6>LSP MERCUBUANA</h6>
                                            <h6>2506 1845</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-2 px-md-4' >
                                    <div className='col-12 d-flex align-items-start ' >
                                        <img src='/assets/img/BCA.png' alt='bca' />
                                        <div className='ml-2 '>
                                            <h6>Bank Central Asia</h6>
                                            <h6>LSP MERCUBUANA</h6>
                                            <h6>2355 1903</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-md-4 ml-auto mr-auto ` + classes.detailInformasi} >
                                <div className='rounded p-2 p-md-3 bg-light ' >
                                    <h6 className='mb-2' >Ringkasan Biaya</h6>
                                    <div className='d-flex justify-content-between mb-2 ' >
                                        <span>Biaya Sertifikat</span>
                                        <span>Rp. {detailOrder.tuk_price}</span>
                                    </div>
                                    <div className='d-flex justify-content-between mb-2 ' >
                                        <span>Biaya Training</span>
                                        <span>Rp. {detailOrder.tuk_price_training || 0}</span>
                                    </div>
                                    <hr />
                                    <div className='d-flex justify-content-between h6 ' >
                                        <span>Total Biaya</span>
                                        <span>Rp. {detailOrder.tuk_price + detailOrder.tuk_price_training}</span>
                                    </div>
                                </div>
                                <div className='mt-4 ' >
                                    <div className='mb-4 ' >
                                        <div>Upload Bukti Transfer</div>
                                        <label className='d-block p-2 rounded mt-2 bg-light text-center cursor-pointer ' style={{ color: '#ccc' }} >
                                            <input type='file' className='d-none'
                                                accept=".jpg, .png, .jpeg, .pdf"
                                                onChange={(e) => {
                                                    setStateForm({ ...stateForm, bukti_transfer: e.target.files[0] })
                                                }} />
                                            <span>Browse file ...</span>
                                        </label>
                                    </div>

                                    <div className='mb-2 ' >
                                        <div>Asal Bank</div>
                                        <input type='text' className='form-control '
                                            onChange={(e) => setStateForm({ ...stateForm, transfer_from_bank_name: e.target.value })} />
                                    </div>

                                    <div className='mb-2 ' >
                                        <div>Nomor Bank</div>
                                        <input type='text' className='form-control '
                                            onChange={(e) => setStateForm({ ...stateForm, transfer_from_bank_number: e.target.value })} />
                                    </div>

                                    <div className='mb-2 ' >
                                        <div>Nomor Bank</div>
                                        <DatePicker
                                            className='form-control w-100 '
                                            selected={stateForm.transfer_date }
                                            onChange={transfer_date => setStateForm({ ...stateForm, transfer_date })}
                                        />
                                    </div>

                                    <div className='mb-2 ' >
                                        <div>Bank Tujuan</div>
                                        <select type='text' className='form-control '
                                            onChange={(e) => setStateForm({ ...stateForm, bank_id: e.target.value })} >
                                            {bank.map(bk => <option key={bk.id} value={bk.id} >{bk.bank_name}</option>)}
                                        </select>
                                    </div>

                                    <div className='mb-2 ' >
                                        <div>Nama Pengirim</div>
                                        <input type='text' className='form-control'
                                            onChange={(e) => setStateForm({ ...stateForm, transfer_from_bank_account: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex align-items-center justify-content-center flex-column my-4 ' >
                            <button
                                onClick={() => {
                                    const transfer_date = moment(stateForm.transfer_date).format('YYYY-MM-DD')
                                    dispatch(sendProofPaymentAction(auth.token, id, { ...stateForm , transfer_date }))
                                }}
                                className='btn btn-primary' >
                                {order.isLoading ? renderLoading() : 'Upload Pembayaran'}
                            </button>
                            <button className='btn btn-light bg-gray mt-2 ' onClick={() => history.push('/member/ujian-baru')} >
                                Kembali
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default UploadPembayaranPage
