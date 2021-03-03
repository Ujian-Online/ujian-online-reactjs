import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link, useParams } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import SignatureCanvas from 'react-signature-canvas'
import { getApl02DetailAction } from '../../../redux/actions/apl02.action'
import Apl2asuk from './apl02ASUK'

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
    const { id } = props.match.params
    useEffect(() => {
        dispatch(getApl02DetailAction(auth.token, id))
    }, [])

    useEffect(() => {
        if (apl02.isSuccessPost) {
            dispatch(getApl02DetailAction(auth.token, id))
        }
    }, [apl02.isSuccessPost])

    //disable input type
    const [isDisabled, setDisable] = useState(true)

    //Modal untuk Simpan
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false)
    const handleShowModal = () => setShowModal(true);

    const renderModalSimpan = () => (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Konfirmasi</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Apakah anda sudah yakin dengan kebenaran data yang sudah anda input?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="light" onClick={handleCloseModal}>Tidak</Button>
                <Button variant="primary">Iya</Button>
            </Modal.Footer>
        </Modal>
    )

    console.log('detail apl', detailApl)
    return (
        <>
            <div className='container mt-5'>
                <div className="form-group row mb-5">
                    <label htmlFor="inputSkemaSertifikasi" className="col-sm-2 col-form-label">Judul Skema Sertifikasi</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputSkemaSertifikasi" disabled={isDisabled} value={sertifikasi.title} />
                    </div>
                </div>
                {/* <div className="card mt-5"> */}
                {/* <div className="card-header bg-success col-md-12">
                 <h5 className="text-center mr-auto ml-auto col-md-5">No UK / Keterangan</h5>
                 <h5 className="text-center mr-auto col-md-3" >Unit Kompetensi</h5>
            </div> */}
                {/* <div className="card-body"> */}
                {/* <DataTable
                        columns={columns}
                        data={detailApl.unitkompetensi.asesisertifikasiunitkompetensielement}
                        noHeader
                    /> */}
                {/* </div> */}
                {/* </div> */}
                {/* <div className='row mt-4 ' >
                <div className='col ' >
                    <table className='table '>
                        <thead>
                            {(detailApl.unitkompetensi||[]).map(uk=>(
                                <tr className='table-info'>
                                <th scope="col">{uk.title}</th>
                                <th scope="col">{uk.kode_unit_kompetensi} /{uk.sub_title}</th>
                            </tr>
                            ))}
                             <tr className='table-bordered'>
                                 <th scope="col">Pertanyaan</th>
                                 <th scope="col">Bukti Relevan</th>
                            <th scope="col">catatan</th>
                             </tr>
                        </thead>
                        <tbody className='bg-white table-bordered' >
                            {(detailApl.unitkompetensi||[]).map(uk=>(
                                <tr>
                                <td><ul>{(uk.asesisertifikasiunitkompetensielement||[]).map(asuk=>(
                                    <li>{asuk.desc}<p>{asuk.upload_instruction}</p> <label>{asuk.is_verified?'k':'bk'}</label>
                                    <input type="file" accept=".jpg, .png, .jpeg, .pdf" className="form-control-file" id="uploadBuktiRelevan"/>
                                    </li>
                                ))}</ul></td>
                                <td><ul>{(uk.asesisertifikasiunitkompetensielement||[]).map(asuk=>(
                                    <label>{asuk.verification_note}</label>
                                ))}</ul></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
             */}
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
                                    <th scope="col" >Bukti Relevan</th>
                                    <th scope="col" >Status</th>
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
                {/* <div className='row mt-4 mb-4' >
                    <div className='col-3 ' >
                        <label className=' mb-0 ' >
                            Tanda Tangan
                    </label>
                    </div>
                    <div className='col-9' >
                        <SignatureCanvas penColor='black'
                            ref={ref => sigPad = ref}
                            canvasProps={{ height: 150, className: 'sigCanvas', style: { width: '100%', background: '#fff' } }} />
                        <a href='/#' className='float-right' onClick={(e) => {
                            e.preventDefault()
                            sigPad.clear()
                        }} >Ulangi Tanda Tangan</a>
                    </div >
                </div> */}
                {/* <div className="col-md-3 ml-auto">
                    <Link to="/member/apl-01">
                        <button type="button" className="btn btn-light btn-md">Sebelumnya</button>
                    </Link>
                    <button type="button" className="btn btn-primary btn-md" onClick={handleShowModal}>Simpan</button>
                </div> */}
            </div>
            {renderModalSimpan()}
            {/* {renderModalKonfirmasi()} */}
        </>
    )
}

export default Apl02Form