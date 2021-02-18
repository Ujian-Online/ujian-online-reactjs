import { Modal } from 'react-bootstrap'
import { useEffect } from 'react'
import {useState} from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams, useRouteMatch } from 'react-router-dom'
import { getOrderAction,getDetailOrderAction, sendProofPaymentAction } from '../../../redux/actions/order.action'
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

const MenungguPembayaran=(props)=>{
    const history = useHistory()

    // useEffect(() => {
    //     dispatch(getDetailOrderAction(auth.token, id))
    // }, [])

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
        setSkema([ ...(order.order || [] ).map(o=>({
            no:o.sertifikasi_id,
            skema_sertifikasi:o.sertifikasi.title,
            status_bayar:o.status,
        }))])
    },[order.order])

    //detail order 
    const detailOrder = order.detailOrder || {}
    const user = detailOrder.user || {}
    
    //state untuk tampil data dalam Modal
    // const [stateForm, setStateForm] = useState({
    //     email:'',
    //     transfer_from_bank_name:'',
    //     status:'',
    //     transfer_to_bank_name:'',
    // });
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
                        <span className='ml-2' >{()=>setStateForm({...stateForm,...stateForm.transfer_from_bank_name})}</span>
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 col-sm-3">Bank tujuan</label>
                        <label className="col-md-2 col-sm-2">:</label>
                        <span className='ml-2' >{detailOrder.transfer_to_bank_name}</span>

                    </div>
                    <div className="form-group">
                        <label className="col-md-3 col-sm-3">Nama Pengirim</label>
                        <label className="col-md-2 col-sm-2">:</label>
                        <span className='ml-2' >{user.email}</span>
                        {/* <label htmlFor='NamaPengirim'>{()=>setStateForm(...stateForm , order.user.email)}</label> */}
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 col-sm-3">Status</label>
                        <label className="col-md-2 col-sm-2">:</label>
                        <span className='ml-2' >{detailOrder.status}</span>
                        {/* <label htmlFor='Status'>{()=>setStateForm(...stateForm , order.status)}</label> */}
                    </div>
                </Modal.Body>
         </Modal>
     )
     const {id} =  props.match.params
     useEffect(()=>{
        dispatch(getDetailOrderAction(id))
    },[])

    const clickDetail = () => {
        history.push('/member/order/'+id)
    }
    //  useEffect(() => {
    //     dispatch(getDetailOrderAction(id))
    // }, [])

     const [stateForm,setStateForm]=useState({
        id:order.id,
        transfer_from_bank_name:order.transfer_from_bank_name,
        transfer_to_bank_name:order.transfer_to_bank_name,
        email:user.email,
        status:order.status
     })
     useEffect(() => {
            setStateForm({
                ...stateForm,
                transfer_from_bank_name:order.transfer_from_bank_name,
                transfer_to_bank_name:order.transfer_to_bank_name,
                email:user.email,
                status:order.status
            })
        }, [order ] )
//    const [stateForm, setStateForm] = useState({
//         sertifikasi_id: uploadBukti.id
        
//     });
    // // const [stateForm, setStateForm] = useState({
    // //    transfer_from_bank_name:id.transfer_from_bank_name,
    // //    transfer_to_bank_name:id.transfer_to_bank_name,
    // //    status:id.status
    // // });

    // useEffect(() => {
    //     setStateForm([ ...stateForm(order || [] ).map(o=>({
    //         transfer_from_bank_name:o.transfer_from_bank_name,
    //        transfer_to_bank_name:o.transfer_to_bank_namer,
    //        status_bayar:o.status,
    //        email:o.user.email
    //     }))])
    // }, [order ] )

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
                    onClick={clickDetail}>
                        Upload Pembayaran
                      </button>
                }
                else if(row.status_bayar==='payment_rejected'){
                    return <button className='btn btn-warning' style={{ padding: '2px 10px' , fontSize : '14px' }}
                    onClick={clickDetail}>
                        Upload Ulang
                      </button>
                }
                else if(row.status_bayar==='pending_verification'){
                    return <div className='row' >
                                <div className='col-7 d-flex align-items-center' >
                                    <button className='btn btn-warning' style={{ padding: '2px 10px' , fontSize : '14px' }}
                                    onClick={clickDetail}>
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
                    return <button className='btn btn-success' style={{ padding: '2px 10px' , fontSize : '14px' }} onClick={handleShowModal}>
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