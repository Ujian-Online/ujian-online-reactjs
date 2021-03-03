import { useState } from 'react'
import { useHistory , useParams } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {status_ujian} from './status'
import { getDetailExamAction } from '../../../redux/actions/exam.action'
import moment from 'moment'

const MyExamDetail = (props) => {

    const history = useHistory()
    
    //reducer token
    const auth=useSelector(state=>state.auth)

    //ekstrak id kemudian fetch ke dalam action
    const { id } = useParams()
    useEffect(() => {
       detailListExam()
    }, [])

    //get sertifikasi detail action dan masukan id
    const dispatch = useDispatch()
    const detailListExam = () => {
        dispatch(getDetailExamAction(auth.token,id))
    }

    //list reducer exam detail
    //reducer exam
    const exam = useSelector(state => state.exam || {})

    //reducer detail exam
    const detailExam = exam.detailExam || {}

    //reducer soal paket by detail exam
    const soalpaket = detailExam.soalpaket || {}

    //reducer jadwal ujian by detail exam
    const ujianjadwal=detailExam.ujianjadwal||{}

    //render Modal button
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const renderModal = () => (
        <Modal show={showModal} onHide={handleCloseModal} className='rounded' >
            <Modal.Header closeButton>
                <Modal.Title>
                    <h6>Konfirmasi Ujian</h6>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-center'>
                Waktu akan berjalan setelah anda menekan tombol mulai, apakah anda yakin?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="default" onClick={ handleCloseModal } >Kembali</Button>
                <Button variant="primary" onClick={clickButton} >Mulai</Button>
            </Modal.Footer>
        </Modal>
    )

    const clickButton=()=>{
        if(detailExam.status=="paket_soal_assigned" && detailExam.apl02=="form_terverifikasi"){
            // console.log('lanjutkan')
            history.push(`/member/ujian-saya/${id}/soal`) 
        }
        else{
            // console.log('error')
            handleShowModalStatus()
        }
    }

     //Modal untuk kesalahan klik
     const [showModalStatus, setShowModalStatus] = useState(false);
     const handleCloseModalStatus = () => setShowModalStatus(false)
     const handleShowModalStatus = () => setShowModalStatus(true);
    
     const renderModalRow = () => (
         <Modal show={showModalStatus} onHide={handleCloseModalStatus}>
                <Modal.Header>
                    <Modal.Title>Kesalahan Klik</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Ujian akan dimulai ketika status ujian soal tersedia, dan form apl02 menampilkan status form terverifikasi
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="default" onClick={ handleCloseModalStatus } >Kembali</Button>
                </Modal.Footer>
         </Modal>
     )

    return (
        <div className='container' >
            <div className='row my-4' >
                <div className='col-md-4 mb-2' >
                    <div className='card' >
                        <h5 className='card-header text-center bg-white'>
                            Konfirmasi Ujian
                       </h5>
                        <div className='card-body' >
                            <p>
                                <strong>Assesor</strong>
                                <br />
                                <span>{detailExam.asesor_name}</span>
                            </p>
                            <p>
                                <strong>Jenis ujian</strong>
                                <br />
                                <span>{ujianjadwal.title}</span>
                            </p>
                            <p>
                                <strong>Deskripsi ujian</strong>
                                <br />
                                <span>{ujianjadwal.description}</span>
                            </p>
                            <p>
                                <strong>Jumlah Soal Pilihan Ganda</strong>
                                <br />
                                <span>{detailExam.total_soal_pilihanganda}</span>
                            </p>
                            <p>
                                <strong>Jumlah Soal Essay</strong>
                                <br />
                                <span>{detailExam.total_soal_essay}</span>
                            </p>
                            <p>
                                <strong>Tanggal & Jam</strong>
                                <br />
                                <span>{moment(ujianjadwal.tanggal).format('DD-MM-YYYY')} & {ujianjadwal.jam_mulai}</span>
                            </p>
                            <p>
                                <strong>Waktu Pengerjaan</strong>
                                <br />
                                <span>{soalpaket.durasi_ujian}</span>
                            </p>
                            {/* <p>
                                <strong>Jumlah Soal</strong>
                                <br />
                                <span>{TotalSoal}</span>
                            </p> */}
                            <p>
                                <strong>Status Ujian</strong>
                                <br />
                                <span>{status_ujian[detailExam.status]}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-8' >
                    <div className='card' >
                        <h5 className='card-header text-center bg-white'>
                            Petunjuk Mengerjakan
                       </h5>
                        <div className='card-body' >
                            Sebelum mengerjakan Ujian Online, baca degan cermat petunjuk berikut :
                                <ul style={{ listStyle: 'decimal', paddingInlineStart: '15px' }} >
                                <li>Ujian bisa dikerjakan sesuai dengan jadwal yang sudah ditetapkan.</li>
                                <li>Soal dapat berupa Essay maupun Pilihan ganda</li>
                                <li>Jika jadwal ujian sudah sesuai dengan tanggal dan jam waktu setempat klik  pada tombol (Mulai Ujian) untuk memulai ujian.</li>
                                <li>Kerjakan ujian dengan batas waktu yang ditetapkan. waktu akan berjalan mundur yang berada di sebalah kanan atas setelah Anda menekan / klik tombol (Mulai Ujian)</li>
                                <li>Jika anda telah menjawab soal maka tombol nomer urut soal yang berada disebelah kanan akan berwarna hijau dan jika belum diisi maka tidak berwarna.</li>
                                <li>Jika sudah selesai menjawab soal dengan yakin, silahkan untuk klik tombol selesai yang berada diatas sebelah kanan.</li>
                            </ul>
                        </div>
                        <div className=' card-footer text-right' >
                            <button className='btn btn-secondary' onClick={() => history.push('/member/ujian-saya')} >Kembali</button>
                            <button className='btn btn-primary ml-2' onClick={handleShowModal} >Mulai Ujian</button>
                        </div>
                    </div>
                </div>
            </div>
            {renderModal()}
            {renderModalRow()}
        </div>
    )
}

export default MyExamDetail
