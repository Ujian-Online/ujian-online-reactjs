import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDetailOrderAction, sendProofPaymentAction } from '../../../redux/actions/order.action'
import { useDispatch, useSelector } from 'react-redux'
import { createUseStyles } from 'react-jss'
import { Spinner, Modal } from 'react-bootstrap';
import DatePicker from '../../reuseable/DatePicker';
import moment from 'moment';
import './uploadBuktiPage.css'

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
        setStateForm({ ...stateForm , bank_id : ( bank[0] && bank[0].id) || ''  })
        // eslint-disable-next-line react-hooks/exhaustive-deps          
    }, [order,stateForm] )

    useEffect(() => {
        dispatch(getDetailOrderAction(auth.token, id))
    }, [ dispatch , auth , id ])

    useEffect(() => {
        if (order.isSuccessPost) {
            history.push('/member/upload-bukti-pembayaran-detail/sukses')
        }
    }, [order.isSuccessPost , history ])

    const renderLoading = () => (
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    )

    const renderErrorMsg = (message) => {
        return(<div class="invalid-tooltip position-static d-inline-block " style={{ width : 'fit-content' , zIndex: 0 }}>
        {message }
      </div>)
    }


    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false)
    const handleShowModal = () => setShowModal(true);
   
    const renderModalUpload = () => (
        <Modal show={showModal} onHide={handleCloseModal}>
               <Modal.Header closeButton>
                   <Modal.Title> Terjadi Kesalahan, tolong Ulangi</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                    Ukuran gambar bukti transfer terlalu besar, maksimal ukuran gambar 3MB
               </Modal.Body>
        </Modal>
    )

    const clickUpload =()=>{
        if (stateForm.bukti_transfer.size>7000000) {
            handleShowModal()
        }
        else{
            const transfer_date = moment(stateForm.transfer_date).format('YYYY-MM-DD')
            dispatch(sendProofPaymentAction(auth.token, id, { ...stateForm , transfer_date }))
        }
    }

    return (
    <>
    <div className='container my-4 ' >
        <div className='row ' >
            <div className='col-12 ' >
                <div className='card p-2 ' >
                    <h4 className='text-center ' >Upload</h4>
                    <h4 className='text-center ' >Pembayaran</h4>
                    <div className='container mt-4 mt-md-5 ' >
                        <div className='row mb-4 ' >
                            <div id='detailInformasi' className={`col-md-6 border-right ` + classes.detailInformasi} >
                                <div className='row px-0 px-md-4 ' >
                                    <div className='col-sm-4  ' >Nama <span className='d-inline d-sm-none' >:</span></div>
                                    <div className='col-sm-8 ' >
                                        <span className='d-none d-sm-inline' >:</span> <span className='ml-sm-2' >{user.email || '-' }</span>
                                    </div>
                                </div>
                                <div className='row mt-2 px-md-4 ' >
                                    <div className='col-sm-4 ' >Sertifikasi <span className='d-inline d-sm-none' >:</span></div>
                                    <div className='col-sm-8 ' >
                                        <span className='d-none d-sm-inline' >:</span> <span className='ml-sm-2' >{sertifikasi.title || '-' }</span>
                                    </div>
                                </div>
                                <div className='row mt-2 px-md-4 ' >
                                    <div className='col-sm-4 ' >TUK <span className='d-inline d-sm-none' >:</span></div>
                                    <div className='col-sm-8 ' >
                                        <span className='d-none d-sm-inline' >:</span> <span className='ml-sm-2' >{tuk.title || '-' }</span>
                                    </div>
                                </div>
                                <div className='row mt-2 px-md-4 ' >
                                    <div className='col-sm-4 ' >Training <span className='d-inline d-sm-none' >:</span></div>
                                    <div className='col-sm-8 ' >
                                        <span className='d-none d-sm-inline' >:</span> <span className='ml-sm-2' >Training</span>
                                    </div>
                                </div>
                                <div className='row mt-2 px-md-4 ' >
                                    <div className='col-sm-4 ' >Sertifikasi Ulang <span className='d-inline d-sm-none' >:</span></div>
                                    <div className='col-sm-8 ' >
                                        <span className='d-none d-sm-inline' >:</span> <span className='ml-sm-2' >{detailOrder.tipe_sertifikasi || '-' }</span>
                                    </div>
                                </div>
                                <div className='row mt-2 px-md-4 ' >
                                    <div className='col-sm-4 ' >No. Sertifikat <span className='d-inline d-sm-none' >:</span></div>
                                    <div className='col-sm-8 ' >
                                        <span className='d-none d-sm-inline' >:</span> <span className='ml-sm-2' >{detailOrder.asesi_id || '-' } </span>
                                    </div>
                                </div>
                                <div className='row mt-2 px-md-4' >
                                    <h6 className='col-12 mt-5 mb-4 ' >
                                        Transfer Melalui :
                                    </h6>
                                </div>
                                <div className='col-md-6'>
                                        
                                </div>
                                <div className='row mt-2 px-md-3'>
                                    <div className='col-md-6 d-flex align-items-start ' >
                                        <img src='/assets/img/mandiri.png' alt='mandiri' />
                                        <div className='ml-2 '>
                                        {bank.filter(bk => bk.bank_name === "Mandiri").map(filteredBankAccount => (
                                        <div>
                                        <h6>
                                        Mandiri
                                        </h6>
                                        <h6>
                                        {filteredBankAccount.account_name}
                                        </h6>
                                        <h6>
                                        {filteredBankAccount.account_number}
                                        </h6>
                                        </div>
                                        ))}
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-xs-3 d-flex align-items-start ' >
                                        <img src='/assets/img/bri.png' alt='BRI'/>
                                        <div className='ml-2 '>
                                        {bank.filter(bk => bk.bank_name === "BRI").map(filteredBankAccount => (
                                        <div>
                                        <h6>
                                        Bank Rakyat Indonesia
                                        </h6>
                                        <h6>
                                        {filteredBankAccount.account_name}
                                        </h6>
                                        <h6>
                                        {filteredBankAccount.account_number}
                                        </h6>
                                        </div>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-2 px-md-3'>
                                    <div className='col-md-6 d-flex align-items-start ' >
                                        <img src='/assets/img/BCA.png' alt='bca' />
                                        <div className='ml-2 '>
                                        {bank.filter(bk => bk.bank_name === "BCA").map(filteredBankAccount => (
                                        <div>
                                        <h6>
                                        Bank Central Asia
                                        </h6>
                                        <h6>
                                        {filteredBankAccount.account_name}
                                        </h6>
                                        <h6>
                                        {filteredBankAccount.account_number}
                                        </h6>
                                        </div>
                                    ))}
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-xs-3 d-flex align-items-start ' >
                                        <img src='/assets/img/btn.png' alt='btn' />
                                        <div className='ml-2 '>
                                        {bank.filter(bk => bk.bank_name === "BTN").map(filteredBankAccount => (
                                        <div>
                                        <h6>
                                        Bank Tabungan Negara
                                        </h6>
                                        <h6>
                                        {filteredBankAccount.account_name}
                                        </h6>
                                        <h6>
                                        {filteredBankAccount.account_number}
                                        </h6>
                                        </div>
                                    ))}
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-2 px-md-3'>
                                    <div className='col-md-6 d-flex align-items-start ' >
                                        <img src='/assets/img/permata.png' alt='permata' />
                                        <div className='ml-2 '>
                                        {bank.filter(bk => bk.bank_name === "Permata").map(filteredBankAccount => (
                                        <div>
                                        <h6>
                                        Permata Bank
                                        </h6>
                                        <h6>
                                        {filteredBankAccount.account_name}
                                        </h6>
                                        <h6>
                                        {filteredBankAccount.account_number}
                                        </h6>
                                        </div>
                                    ))}
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-xs-3 d-flex align-items-start ' >
                                        <img src='/assets/img/bni.png' alt='bni'/>
                                        <div className='ml-2 '>
                                        {bank.filter(bk => bk.bank_name === "BNI").map(filteredBankAccount => (
                                        <div>
                                        <h6>
                                        Bank Negara Indonesia
                                        </h6>
                                        <h6>
                                        {filteredBankAccount.account_name}
                                        </h6>
                                        <h6>
                                        {filteredBankAccount.account_number}
                                        </h6>
                                        </div>
                                    ))}
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
                                    <div className='mb-2 d-flex flex-column ' >
                                        <div>Upload Bukti Transfer</div>
                                        <label className='d-block p-2 rounded mt-2 bg-light text-center cursor-pointer ' style={{ color: '#ccc' }} >
                                            <input type='file' className='d-none'
                                                accept=".jpg, .png, .jpeg, .pdf"
                                                onChange={(e) => {
                                                    setStateForm({ ...stateForm, bukti_transfer: e.target.files[0] })
                                                }} />
                                            <span style={{color:'black'}}>{ stateForm.bukti_transfer ? stateForm.bukti_transfer.name : 'Browse file ...' } </span>
                                        </label>
                                        {order.errMessage && order.errMessage.errors 
                                            && order.errMessage.errors.bukti_transfer &&  renderErrorMsg(order.errMessage.errors.bukti_transfer[0]) }
                                    </div>

                                    <div className='mb-2 d-flex flex-column ' >
                                        <div>Asal Bank</div>
                                        <input type='text' className='form-control '
                                            onChange={(e) => setStateForm({ ...stateForm, transfer_from_bank_name: e.target.value })} />
                                        {order.errMessage && order.errMessage.errors 
                                            && order.errMessage.errors.transfer_from_bank_name &&  renderErrorMsg(order.errMessage.errors.transfer_from_bank_name[0]) }
                                    </div>

                                    <div className='mb-2 d-flex flex-column ' >
                                        <div>Nomor Rekening</div>
                                        <input type='text' className='form-control '
                                            onChange={(e) => setStateForm({ ...stateForm, transfer_from_bank_number: e.target.value })} />
                                        {order.errMessage && order.errMessage.errors 
                                            && order.errMessage.errors.transfer_from_bank_number &&  renderErrorMsg(order.errMessage.errors.transfer_from_bank_number[0]) }
                                    </div>
                                    <div className='mb-2  d-flex flex-column  ' >
                                        <div>Nama Pengirim</div>
                                        <input type='text' className='form-control'
                                            onChange={(e) => setStateForm({ ...stateForm, transfer_from_bank_account: e.target.value })} />
                                        {order.errMessage && order.errMessage.errors 
                                            && order.errMessage.errors.transfer_from_bank_account &&  renderErrorMsg(order.errMessage.errors.transfer_from_bank_account[0]) }
                                    </div>
                                    <div className='mb-2 ' >
                                        <div>Tanggal Pengiriman bukti</div>
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

                                   
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex align-items-center justify-content-center flex-column my-4 ' >
                            <button
                                onClick={clickUpload}
                                className='btn btn-primary' >
                                {order.isLoading ? renderLoading() : 'Upload Pembayaran'}
                            </button>
                            <button className='btn btn-light bg-gray mt-2 ' onClick={() => history.push('/member/menunggu-pembayaran')} >
                                Kembali
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {renderModalUpload()}
    </>
    )
}
export default UploadPembayaranPage
