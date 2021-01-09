import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'

const UjianSayaDetail = () => {

    const history = useHistory()
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
                <Button variant="primary">Mulai</Button>
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
                                <span>Muhammad Aziz, M.Psi, Psi</span>
                            </p>
                            <p>
                                <strong>Skema Sertifikasi</strong>
                                <br />
                                <span>Supervisor Pengelolaan Sumber Daya Manusia</span>
                            </p>
                            <p>
                                <strong>Skema Sertifikasi</strong>
                                <br />
                                <span>Supervisor Pengelolaan Sumber Daya Manusia</span>
                            </p>
                            <p>
                                <strong>Jumlah Soal Pilihan Ganda</strong>
                                <br />
                                <span>20 Soal</span>
                            </p>
                            <p>
                                <strong>Jumlah Soal Essay</strong>
                                <br />
                                <span>20 Soal</span>
                            </p>
                            <p>
                                <strong>Waktu Pengerjaan</strong>
                                <br />
                                <span>90 Menit</span>
                            </p>
                            <p>
                                <strong>Tanggal & Jam</strong>
                                <br />
                                <span>Sabtu, 12 Desember 2020, 14.00 PM</span>
                            </p>
                            <p>
                                <strong>Status Ujian</strong>
                                <br />
                                <span>Menunggu Jadwal Ujian</span>
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
                                <li>Jika jadwal ujian sudah sesuai dengan tanggal dan jam waktu setempat klik  pada tombol (Mulai Ujian) untuk memulai ujian.</li>
                                <li>Kerjakan ujian dengan batsa waktu yang ditetapkan. waktu akan berjalan mundur yang berada di sebalah kanan atas setelah Anda mengkik (Mulai Ujian)</li>
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
        </div>
    )
}

export default UjianSayaDetail
