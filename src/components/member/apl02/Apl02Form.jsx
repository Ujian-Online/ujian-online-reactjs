import {useRef, useState , useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useHistory, Link, useParams } from 'react-router-dom'
import {Modal,Button} from 'react-bootstrap'
import SignatureCanvas from 'react-signature-canvas'
import { getApl02DetailAction } from '../../../redux/actions/apl02.action'
import DataTable from 'react-data-table-component'

const Apl02Form=(props)=>{
    const history = useHistory()
    let sigPad = useRef()
    const dispatch = useDispatch()

    //reducer auth.token
    const auth = useSelector(state => state.auth )

    //reducer apl02
    const apl02=useSelector(state=>state.apl02||{})
    const detailApl=apl02.detailApl||{}
    const sertifikasi=detailApl.sertifikasi||{}
    const unitkompetensi=detailApl.unitkompetensi||{}
    const {id}=useParams()
    useEffect(()=>{
        dispatch(getApl02DetailAction(auth.token,id))
    },[])


     //data
    //  const [ skema , setSkema ] = useState([])
    
     //columns
    //  const columns = [
    //      { selector : 'id' , name : 'No' , sortable : true },
    //      { selector : 'kode_unit_kompetensi' , name : 'Pertanyaan' , sortable : true },
    //      { name: "Bukti relevan",
    //      cell: () =><input type="file" accept=".jpg, .png, .jpeg, .pdf" className="form-control-file" id="uploadBuktiRelevan"/>,
    //      ignoreRowClick: true,
    //      allowOverflow: true,
    //      button: true,},
    //      { selector : 'status' , name : 'No' , sortable : true },
    //      { selector : 'catatan' , name : 'Nomor Skema' , sortable : true },
    //  ];
 
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

    //Modal konfirmasi
    const [showModalKonfirmasi, setShowModalKonfirmasi] = useState(false);
    const handleCloseModalKonfirmasi = () => setShowModalKonfirmasi(false)
    const handleShowModalKonfirmasi = () => setShowModalKonfirmasi(true);

    const renderModalKonfirmasi = () => (
        <Modal show={showModalKonfirmasi} onHide={handleCloseModalKonfirmasi}>
             <Modal.Header className="ml-auto mr-auto" >

                    <img src='/assets/img/check1.png' alt='logo'/>
  
            </Modal.Header>
            <Modal.Body>
                <p>Data anda akan diverifikasi oleh admin, silahkan tunggu proses verifikasi.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleCloseModalKonfirmasi}>Oke</Button>
            </Modal.Footer>
        </Modal>
    )
    

   
    console.log('detail apl',detailApl)
    return(
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
            <div className='row mt-4 ' >
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
                                 {/* <th scope="col">Bukti Relevan</th> */}
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
            <div className='row mt-4 mb-4' >
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
            </div>
            <div className="col-md-3 ml-auto">
            <Link to="/member/apl-01">
                <button type="button" className="btn btn-light btn-md">Sebelumnya</button>
            </Link>
                <button type="button" className="btn btn-primary btn-md" onClick={handleShowModal}>Simpan</button>
            </div>
        </div>
        {renderModalSimpan()}
        {renderModalKonfirmasi()}
     </>    
    )
}

export default Apl02Form