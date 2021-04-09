import { Modal } from 'react-bootstrap'
import { useEffect } from 'react'
import {useState} from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getOrderAction} from '../../../redux/actions/order.action'
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

    //deklarasi reducer untuk token
    const auth=useSelector(state=>state.auth)
    
    //get token dan data
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getOrderAction(auth.token))
    },[])

    //deklarasi reducer order
    const order=useSelector(state=>state.order)
    
    //tampil data pada datatable
    const [skema,setSkema]=useState([])
    useEffect(()=>{
        console.log('order list',order)
        let no = 1
        setSkema([ ...(order.order || [] ).map(o=>({
            no:no++,
            id:o.id,
            skema_sertifikasi: (o.sertifikasi && o.sertifikasi.title)|| 'skema sertifikasi ini tidak tersedia',
            status_bayar:o.status,
            transfer_from_bank_name:o.transfer_from_bank_name,
            transfer_to_bank_name:o.transfer_to_bank_name,
            transfer_from_bank_account:o.transfer_from_bank_account,
            bukti:o.media_url_bukti_transfer
        }))])
    },[order.order])

    
   
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
                        <span className='ml-2' >{stateModal.transfer_from_bank_name}</span>
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 col-sm-3">Bank tujuan</label>
                        <label className="col-md-2 col-sm-2">:</label>
                        <span className='ml-2' >{stateModal.transfer_to_bank_name}</span>

                    </div>
                    <div className="form-group">
                        <label className="col-md-3 col-sm-3">Nama Pengirim</label>
                        <label className="col-md-2 col-sm-2">:</label>
                        <span className='ml-2' >{stateModal.transfer_from_bank_account}</span>
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 col-sm-3">Status</label>
                        <label className="col-md-2 col-sm-2">:</label>
                        <span className='ml-2' >{status_bayar[stateModal.status]}</span>
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 col-sm-3">Bukti transfer</label>
                        <label className="col-md-2 col-sm-2">:</label>
                        <a href={stateModal.bukti}>Klik disini</a>
                    </div>
                </Modal.Body>
         </Modal>
     )

        //button Upload pembayaran dan upload Ulang
    const clickDetail = (id)=>() => {
        history.push('/member/order/'+id)
    }

    //useState untuk modal
     const [stateModal,setStateModal]=useState({
        transfer_from_bank_name:'',
        transfer_to_bank_name:'',
        transfer_from_bank_account:'',
        status:'',
        bukti:''
     })

     //button untuk kirim data useState dan tampilin Modal
    const clickLihat = (transfer_from_bank_name,transfer_to_bank_name,transfer_from_bank_account,status,bukti)=>() => {
        setStateModal({
            transfer_from_bank_name,
            transfer_to_bank_name,
            transfer_from_bank_account,
            status,
            bukti
        });
        handleShowModal()
    }



    //columns data
    const columns=[
        {selector:'no',name:'no', sortable:true},
        {selector:'skema_sertifikasi',name:'Skema Sertifikasi',sortable:true},
        {selector:'status_bayar',name:'Status',sortable:true,
            format:row => status_bayar[row.status_bayar]
        },
        {selector:'Aksi',name:'Aksi',sortable:true,
            format:row=>{
                //view button berdasarkan badges
                if(row.status_bayar==='waiting_payment'){      
                    return <button className='btn btn-success' style={{ padding: '2px 10px' , fontSize : '14px' }}
                            onClick={clickDetail(row.id)}>
                                Upload Pembayaran
                            </button>
                }
                else if(row.status_bayar === 'pending_verification' || row.status_bayar == 'payment_rejected'){
                    return <div className='row' >
                        <div className='col-7 d-flex align-items-center' >
                            <button className='btn btn-warning' style={{ padding: '2px 10px' , fontSize : '14px' }}
                                    onClick={clickDetail(row.id)}>
                                Upload Ulang
                            </button>
                        </div>
                        <div className='col-5' >
                            <button className='btn btn-primary' style={{ padding: '2px 10px' , fontSize : '14px' }}
                                    onClick={clickLihat(row.transfer_from_bank_name,row.transfer_to_bank_name,row.transfer_from_bank_account,row.status_bayar,row.bukti)}>
                                Lihat
                            </button>
                        </div>
                    </div>
                }
                else if(['payment_verified', 'canceled', 'completed'].includes(row.status_bayar)){
                    return <button className='btn btn-primary' style={{ padding: '2px 10px' , fontSize : '14px' }} 
                    onClick={clickLihat(row.transfer_from_bank_name,row.transfer_to_bank_name,row.transfer_from_bank_account,row.status_bayar,row.bukti)}>
                           Lihat
                    </button>
                }
            }
    },
    ];

    return(
        <>
        <div className='container mt-4'>
            <div className="card mb-4 " style={{ boxShadow: '0 2px 2px #ccc' , border: 'none' }} >
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