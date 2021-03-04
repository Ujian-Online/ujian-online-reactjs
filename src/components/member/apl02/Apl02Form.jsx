import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link, useParams } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import SignatureCanvas from 'react-signature-canvas'
import { getApl02DetailAction } from '../../../redux/actions/apl02.action'
import Apl2asuk from './apl02ASUK'


const ModalAplError = ({ showModal , handleCloseModal , errMessage  }) => {
    return(<Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
            <Modal.Title>Terjadi Masalah</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>{errMessage || 'Cobalah beberapa saat lagi.' }</p>
        </Modal.Body>

        <Modal.Footer className='border-top-0' >
            <Button variant="light" onClick={handleCloseModal}>Tutup</Button>
        </Modal.Footer>
    </Modal>)
}

const Apl02Form = (props) => {
    const history = useHistory()
    let sigPad = useRef()
    const dispatch = useDispatch()

    //reducer auth.token
    const auth = useSelector(state => state.auth)

    //reducer apl02
    const apl02 = useSelector(state => state.apl02 || {})
    const detailApl = apl02.detailApl || {}
    const sertifikasi = detailApl.sertifikasi || {}
    const { id } = useParams()
    const [showModalError, setShowModalError ] = useState(false);
    
    useEffect(() => {
        dispatch(getApl02DetailAction(auth.token, id))
    }, [])

    useEffect(() => {
        if (apl02.isSuccessPost) {
            dispatch(getApl02DetailAction(auth.token, id))
        }
    }, [apl02.isSuccessPost])

    useEffect(() => {
        if (apl02.errMessage) {
            setShowModalError(true)
        }
    }, [apl02.errMessage])

   

    return (
        <>
            <div className='container mt-5'>
                <div className="form-group row mb-5">
                    <label htmlFor="inputSkemaSertifikasi" className="col-sm-2 col-form-label">Judul Skema Sertifikasi</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputSkemaSertifikasi" disabled value={sertifikasi.title} />
                    </div>
                </div>
                <table className="table table-bordered bg-white">
                    <thead>
                        <tr className='bg-success text-white' >
                            <th scope="col" className='text-center ' colSpan="2" >Unit Kompoetensi</th>
                            <th scope="col" className='text-center ' colSpan="3">Nomor UK / Keterangan</th>
                        </tr>
                        <tr>
                            <th scope="col" >No</th>
                            <th scope="col">Kode Unit Kompetensi</th>
                            <th scope="col" colSpan="3" >Judul</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (detailApl.unitkompetensi || []).map((uk, key) => (<React.Fragment key={key} >
                                <tr >
                                    <th scope="row">{key + 1}</th>
                                    <td>{uk.kode_unit_kompetensi}</td>
                                    <td colSpan="3" >{uk.title}</td>
                                </tr>
                                <tr>
                                    <th scope="col" colSpan="2" style={{ width: '50%' }} >Pertanyaan</th>
                                    <th scope="col" className='text-center' >Bukti Relevan</th>
                                    <th scope="col" className='text-center' >Status</th>
                                    <th scope="col" >Catatan</th>
                                </tr>
                                {(uk.asesisertifikasiunitkompetensielement || []).map((asuk, keyy) => (
                                    <Apl2asuk asuk={asuk} key={keyy} />
                                ))
                                }

                            </React.Fragment>))
                        }

                    </tbody>
                </table>
               
            </div>
            <ModalAplError showModal={showModalError} handleCloseModal={() => setShowModalError(false) } />
        </>
    )
}

export default Apl02Form