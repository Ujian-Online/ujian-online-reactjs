import { Modal } from 'react-bootstrap'
import { useEffect } from 'react'
import {useState} from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { getOrderAction } from '../../../redux/actions/order.action'
import {status_bayar} from './status'

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

const MenungguPembayaran=()=>{
    const history = useHistory()
    
    //parameter ID
    const{id} = useParams()
    
    //deklarasi reducer untuk token
    const auth=useSelector(state=>state.auth)
    
    //get token dan data
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getOrderAction(auth.token))
    },[auth.token])

    //deklarasi reducer order
    const order=useSelector(state=>state.order)
    
    //tampil data pada datatable
    const [skema,setSkema]=useState([])
    useEffect(()=>{
        console.log('order list',order)
        setSkema([ ...(order.order || [] ).map(o=>({
            no:o.sertifikasi_id,
            skema_sertifikasi:o.sertifikasi.title,
            status_bayar:o.status,
        }))])
    },[order.order])
    
    //state untuk tampil data dalam Modal
    const [stateForm, setStateForm] = useState({
        email:'',
        transfer_from_bank_name:'',
        status:'',
        transfer_to_bank_name:'',
    });
     //Modal untuk Lihat data Pesanan
     const [showModal, setShowModal] = useState(false);
     const handleCloseModal = () => setShowModal(false)
     const handleShowModal = () => setShowModal(true);
    
     const renderModalLihatPesanan = () => (
         <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Bukti Pembayaran</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label className="col-md-3 col-sm-3">Asal bank</label>
                        <label className="col-md-2 col-sm-2">:</label>
                         <label htmlFor='AsalBank'>{()=>setStateForm(...stateForm , order.transfer_from_bank_name)}</label>
                        {/* <label htmlFor='AsalBank'>MANDIRI</label> */}
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 col-sm-3">Bank tujuan</label>
                        <label className="col-md-2 col-sm-2">:</label>
                        <label htmlFor='bankTujuan'>{()=>setStateForm(...stateForm , order.transfer_to_bank_name)}</label>
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 col-sm-3">Nama Pengirim</label>
                        <label className="col-md-2 col-sm-2">:</label>
                        <label htmlFor='NamaPengirim'>{()=>setStateForm(...stateForm , order.user.email)}</label>
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 col-sm-3">Status</label>
                        <label className="col-md-2 col-sm-2">:</label>
                        <label htmlFor='Status'>{()=>setStateForm(...stateForm , order.status)}</label>
                    </div>
                </Modal.Body>
         </Modal>
     )

    const columns=[
        {selector:'no',name:'no', sortable:true},
        {selector:'skema_sertifikasi',name:'Skema Sertifikasi',sortable:true},
        {selector:'status_bayar',name:'Status',sortable:true,
            format:row => status_bayar[row.status_bayar]
        },
        {selector:'Aksi',name:'Aksi',sortable:true,
            format:row=>{
                if(row.status_bayar==='waiting_payment'){      
                    return <button className='btn btn-success' style={{ padding: '2px 10px' , fontSize : '14px' }}
                    onClick={() => history.push(`/member/order/${id}`)}>
                        Upload Pembayaran
                    {/* <Link to ="/member/order/:id" className="text-light">Upload Pembayaran</Link>  */}
                      </button>
                }
                else if(row.status_bayar==='payment_rejected'){
                    return <button className='btn btn-warning' style={{ padding: '2px 10px' , fontSize : '14px' }}
                    onClick={() => history.push('/member/order/:id')}>
                    Upload Ulang
                      </button>
                }
                else if(row.status_bayar==='pending_verification'){
                    return 
                    <div className='row' >
                                <div className='col-7 d-flex align-items-center' >
                                    <button className='btn btn-warning' style={{ padding: '2px 10px' , fontSize : '14px' }}
                                    onClick={() => history.push('/member/order/:id')}>
                                        Upload Ulang
                                    </button>
                                </div>
                                <div className='col-5' >
                                    <button className='btn btn-primary' style={{ padding: '2px 10px' , fontSize : '14px' }} onClick={handleShowModal}>
                                            Lihat
                                    </button>
                                </div>
                            </div>
                   
                     
                      
                }
                else if(row.status_bayar==='payment_verified'){
                    return <button className='btn btn-success' style={{ padding: '2px 10px' , fontSize : '14px' }}>
                            Lihat
                      </button>
                }
                else{
                    return 'status bayar tidak terdeteksi'
                }
                
            }
        //     format: row => Aksi[row.Aksi]},{selector:'Aksi',
        // format: row => Lihat[row.Lihat]
    },
    ];

    return(
        <>
        <div className='container mt-4'>
            <div className="card">
                <h5 className="card-header text-center bg-white">List Pembayaran</h5>
                <div className="card-body">
                    <DataTable
                        columns={columns}
                        data={skema}
                        customStyles={customStyles}
                        noHeader
                    />
                </div>
            </div>
        </div>
        {renderModalLihatPesanan()}
        </>
        )
}

export default MenungguPembayaran