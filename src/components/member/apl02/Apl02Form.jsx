import {useRef, useState} from 'react'
import DataTable from 'react-data-table-component'
import { useHistory, Link } from 'react-router-dom'
import {Modal,Button} from 'react-bootstrap'
import SignatureCanvas from 'react-signature-canvas'

const customStyles = {
    headCells: {
        style: {
            background : '#ccc' ,
            '&:nth-child(1)': {
                maxWidth: '50px',
                dispaly: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }
        },
    },
    cells: {
        style: {
            fontSize: '14px' ,
            cursor: 'pointer',
            '&:nth-child(1)': {
                maxWidth: '50px',
                dispaly: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }
        }
    }

}

const Apl02Form=()=>{
    const history = useHistory()
    let sigPad = useRef()

    // const [skema,setSkema]=useState([
    //     {
    //         pertanyaan:'pertanyaan 1 kriteria 1 kriteria 2',
    //         bukti_relevan:'Bukti',
    //         status: 'K/BK',
    //         catatan:'seluruh dokumen sudah lengkap'
    //     },
    //     {
    //         pertanyaan:'pertanyaan 2 kriteria 1 kriteria 2',
    //        bukti_relevan:'Bukti',
    //        status:'K/BK',
    //        catatan:'seluruh dokumen sudah lengkap'
    //     },
    //     {
    //         pertanyaan:'pertanyaan 3 kriteria 1 kriteria 2',
    //        bukti_relevan:'Bukti',
    //        status:'K/BK',
    //        catatan:'seluruh dokumen sudah lengkap'
    //     }
    // ])

    // const columns=[
    //     {selector : 'pertanyaan',name:'Pertanyaan',sortable:true,center:true},
    //     {selector:'bukti_relevan',name:'Bukti ',
    //         format:row => bukti_relevan[row.bukti_relevan]
    //     },
    //     {selector:'status',name:'Status',sortable:true},
    //     {selector:'catatan',name:'Catatan',sortable:true}
    // ];
    

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

    return(
    <>
        <div className='container mt-5'>
            <div className="form-group row mb-5">
                <label htmlFor="inputSkemaSertifikasi" className="col-sm-2 col-form-label">Judul Skema Sertifikasi</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputSkemaSertifikasi" placeholder="Masukkan Judul Skema Sertifikasi"/>
                </div>
            </div>
            {/* <div className="card mt-5">
            <div className="card-header bg-success col-md-12">
                 <h5 className="text-center mr-auto ml-auto col-md-5">No UK / Keterangan</h5>
                 <h5 className="text-center mr-auto col-md-3" >Unit Kompetensi</h5>
            </div>
                <div className="card-body">
                    <DataTable
                        columns={columns}
                        data={skema}
                        noHeader
                    />
                </div>
            </div> */}
            <div className='row mt-4 ' >
                <div className='col ' >
                    <table className='table '>
                        <thead>
                            <tr className='table-info'>
                                <th scope="col">Unit Kompetensi</th>
                                <th scope="col">No UK / Keterangan</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                            <tr className='table-bordered'>
                                <th scope="col">Pertanyaan</th>
                                <th scope="col">Bukti Relevan</th>
                                <th scope="col">status</th>
                                <th scope="col">catatan</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white table-bordered' >
                            <tr>
                                <td>pertanyaan 1 kriteria 1 kriteria 2</td>
                                <td> <input type="file" accept=".jpg, .png, .jpeg, .pdf" className="form-control-file" id="uploadBuktiRelevan"/></td>
                                <td>
                                   <label>K / BK</label>
                                </td>
                                <td>
                                   <label>seluruh dokumen sudah lengkap</label>
                                </td>
                            </tr>
                            <tr>
                                <td>pertanyaan 2 kriteria 1 kriteria 2</td>
                                <td><input type="file" accept=".jpg, .png, .jpeg, .pdf" className="form-control-file" id="uploadBuktiRelevan"/></td>
                                <td>
                                    <label>K / BK</label>
                                </td>
                                <td>
                                    <label>seluruh dokumen sudah lengkap</label>
                                </td>
                            </tr>
                            <tr>
                                <td >pertanyaan 3 kriteria 1 kriteria 2</td>
                                <td ><input type="file" accept=".jpg, .png, .jpeg, .pdf" className="form-control-file" id="uploadBuktiRelevan"/></td>
                                <td>
                                    <label>K / BK</label>
                                </td>
                                <td>
                                    <label>seluruh dokumen sudah lengkap</label>
                                </td>
                            </tr>
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