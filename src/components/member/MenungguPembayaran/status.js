import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'
import {Button,Modal} from 'react-bootstrap'

export const status_bayar = {
    'Menunggu Pembayaran' : <span className='badge badge-primary' style={{ fontSize : '12px' }} >Menunggu Pembayaran</span> ,
    'Terbayar' : <span className='badge badge-success' style={{ fontSize : '12px' }} >Terbayar</span>,
    'Menunggu Verifikasi' : <span className='badge badge-warning' style={{ fontSize : '12px' }} >Menunggu Verifikasi</span>
}

export const Aksi={
    'Upload Pembayaran' : <button className='btn btn-success' style={{ padding: '2px 10px' , fontSize : '14px' }}>
    <Link to ="/member/upload-pembayaran-detail" className="text-light">Upload Pembayaran</Link> 
      </button>,
    'Lihat' :(<ModalLihat />),
    'Upload Ulang' : (<button className='btn btn-warning' style={{ padding: '2px 10px' , fontSize : '14px' }}>
                    <Link to ="/member/upload-pembayaran-detail" className="text-dark">Upload Ulang</Link>
                </button>),
}
export const Lihat={
    'Lihat' : (<ModalLihat/>)
}

function ModalLihat() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} style={{ padding: '2px 10px' , fontSize : '14px' }}>
          Lihat
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Bukti Pembayaran</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
                <label className="col-md-3 col-sm-3">Asal bank</label>
                <label className="col-md-2 col-sm-2">:</label>
                <label htmlFor='AsalBank'>Mandiri</label>
            </div>
            <div className="form-group">
                <label className="col-md-3 col-sm-3">Bank tujuan</label>
                <label className="col-md-2 col-sm-2">:</label>
                <label htmlFor='bankTujuan'>Mandiri</label>
            </div>
            <div className="form-group">
                <label className="col-md-3 col-sm-3">Nama Pengirim</label>
                <label className="col-md-2 col-sm-2">:</label>
                <label htmlFor='NamaPengirim'>Akbar Bintang</label>
            </div>
            <div className="form-group">
                <label className="col-md-3 col-sm-3">Status</label>
                <label className="col-md-2 col-sm-2">:</label>
                <label htmlFor='Status'>Terbayar</label>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }