import { useState } from 'react';
import { createUseStyles } from 'react-jss';

import DatePicker from 'react-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postOrderAction } from '../../../redux/actions/order.action';
import { Spinner, Modal } from 'react-bootstrap';
import { useEffect } from 'react';


const useStyles = createUseStyles({
    Pendaftar: {
        color: 'gray'
    },
    Training: {
        color: 'red'
    },
    customLabel: {
        color: 'black'
    }
})
const DaftarUjianForm = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth )
    const order = useSelector(state => state.order )
    const skema = props.location.state

    const [stateForm, setStateForm] = useState({
        sertifikasi_id: skema.id,
        tuk_id: ((skema.sertifikasituk || [])[0] || {}).tuk_id,
        tipe_sertifikasi: 'baru',
        training: false,
        sertifikat_number_old: '',
        sertifikat_date_old: new Date(),
        sertifikat_upload_old: {}
    });

    const history = useHistory()

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false)
    const handleShowModal = () => setShowModal(true);
    
    const renderModal = () => (
        <Modal show={showModal} onHide={handleCloseModal}>
               <Modal.Header closeButton>
                   <Modal.Title>Pendaftaran tidak bisa dilanjutkan</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                   {order && order.errMessage}
               </Modal.Body>
        </Modal>
    )

    useEffect(() => {
        if(order.isSuccessPost) {
            history.push('/member/order/sertifikasi/sukses')
        }
    }, [order.isSuccessPost,history])

    useEffect(() => {
        if(order.errMessage) {
            handleShowModal()
        }
        // else{
        //     handleShowModal()
        // }
    }, [order.errMessage])

    const renderLoading = () => (
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    )


       
    const renderAction = () => {
        return (
            <div className='row mt-4 ' >
                <div className="col-md-12 mt-5 mb-5">
                    <div className="form-group col-sm-4 col-md-4 ml-auto mr-auto">
                        <button
                            onClick={() => dispatch(postOrderAction(auth.token, {...stateForm }))}
                            // onClick={clickPesan}
                            type="submit"
                            className="btn btn-primary btn-block">
                            { order.isLoading ? renderLoading() : 'Pesan Sekarang' }
                    </button>
                    </div>
                    <div className="form-group col-sm-6 col-md-4 mr-auto ml-auto">
                        <button type="submit" className="btn btn-default bg-gray btn-block" onClick={() => history.push('/member/detail-skema-sertifikasi/' + skema.id)}>
                            Batal
                    </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='container my-4' >
            <div className='row'>
                <div className='col text-center' >
                    <h6>
                        Detail Informasi
                    </h6>
                </div>
            </div>
            <div className='row mt-4 ' >
                <div className='col-sm-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        Pendaftar
                    </label>
                </div>
                <div className='col-sm-9' >
                    <input type="text" readOnly className="form-control bg-white" id="Pendaftar" value={auth.user.email} />
                </div>
            </div>
            <div className='row mt-4 ' >
                <div className='col-sm-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        Sertifikasi
                    </label>
                </div>
                <div className='col-sm-9' >
                    <input
                        className='form-control bg-white'
                        value={skema.title}
                        placeholder='Masukan skema sertifikasi'
                        readOnly />
                </div>
            </div>
            <div className='row mt-4 ' >
                <div className='col-sm-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        Tempat Uji Kompetensi
                    </label>
                </div>
                <div className='col-sm-9' >
                    <select className='form-control bg-white'
                     onChange={(e) => setStateForm({ ...stateForm, tuk_id: e.target.value })}
                    >
                        {
                            (skema.sertifikasituk || []).map(tuk =>
                                <option value={tuk.tuk_id} key={tuk.tuk_id} >{tuk.tuk.title }</option>
                            )
                        }
                    </select>
                </div>
            </div>

            <div className='row mt-4 ' >
                <div className='col-sm-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        Pemilihan Training
                    </label>
                </div>
                <div className='col-sm-9 d-flex flex-wrap ' >
                    <div className="form-check mr-2" >
                        <input
                            className="form-check-input"
                            type="radio"
                            name="training"
                            id="training"
                            onClick={() => {
                                setStateForm({ ...stateForm, training: true })
                            }}
                             />
                        <label className="form-check-label" htmlFor="training">
                            Training
                        </label>
                        {(stateForm.training && <div className={classes.Training}>
                            <label>
                                (Pemilihan training akan ada tambahan biaya training)
                            </label>
                        </div>) || ''}
                    </div>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="training"
                            id="tidak_training"
                            onClick={() => {
                                setStateForm({ ...stateForm, training: false })
                            }}
                            defaultChecked
                        />
                        <label className="form-check-label" htmlFor="tidak_training">
                            Tidak
                        </label>
                    </div>
                </div>
            </div>
            <div className='row mt-4 ' >
                <div className='col-sm-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                       Tipe sertifikasi
                    </label>
                </div>
                <div className='col-sm-9' >
                    <select className='form-control   '
                        value={stateForm.tipe_sertifikasi}
                        onChange={(e) => setStateForm({ ...stateForm, tipe_sertifikasi: e.target.value })}
                    >
                        <option value="sertifikasi" >Sertifikasi</option>
                        <option value="perpanjang" >Sertifikasi Ulang</option>
                        <option value="pkt" >Pengakuan Kompetensi terkini (PKT)</option>
                        <option value="rpl" >Rekognisi Pembelajaran Lampau</option>
                        <option value="lainnya" >Lainnya</option>
                    </select>
                
                </div>
            </div>
            
            {stateForm.tipe_sertifikasi === 'perpanjang' ? <>
                <div className='row mt-4 ' >
                    <div className='col-sm-3 d-flex align-items-center' >
                        <label className=' mb-0 ' >
                            Nomor Sertifikasi
                        </label>
                    </div>
                    <div className='col-sm-9' >
                        <input 
                            className='form-control bg-white' 
                            onChange={(e) => {
                                setStateForm({ ...stateForm, sertifikat_number_old: e.target.value })
                            }}
                            placeholder="masukan nomor sertifikasi" />
                    </div>
                </div>
                <div className='row mt-4 ' >
                    <div className='col-sm-3 d-flex align-items-center' >
                        <label className=' mb-0 ' >
                            Tanggal Sertifikasi lama
                        </label>
                    </div>
                    <div className='col-sm-9 d-flex flex-wrap align-items-center ' >
                        <DatePicker
                            className='form-control bg-white  '
                            selected={stateForm.sertifikat_date_old}
                            onChange={sertifikat_date_old => setStateForm({ ...stateForm, sertifikat_date_old })}
                        />
                    </div>
                </div>
                <div className='row mt-4 ' >
                    <div className='col-sm-3 d-flex ' >
                        <label className=' mb-0 ' >
                            Upload Sertifikat lama
                        </label>
                    </div>
                    <div className='col-sm-9 input-group' >
                        <div className="custom-file">
                            <input type="file" 
                            accept=".jpg, .png, .jpeg, .pdf" 
                            onChange={(e) => {
                                setStateForm({ ...stateForm, sertifikat_upload_old: e.target.files[0] })
                            }}
                            className="form-control-file" 
                            id="uploadSertifikatLama" />
                        </div>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" id="uploadSertifikatLama">Upload</button>
                        </div>
                    </div>
                </div>

            </> : ''}
            {renderAction()}
            {renderModal()}
        </div>
    )
}

export default DaftarUjianForm