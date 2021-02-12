import { useEffect } from 'react'
import {useState} from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getOrderAction } from '../../../redux/actions/order.action'
import {status_bayar,Aksi, Lihat} from './status'

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
    },[auth.token])

    //deklarasi reducer order
    const order=useSelector(state=>state.order)
    
    //tampil data pada datatable
    const [skema,setSkema]=useState([])
    useEffect(()=>{
        console.log('order list',order)
        setSkema([ ...(order.order || [] ).map(o=>({
            no:o.no,
            skema_sertifikasi:o.skema_sertifikasi,
            status_bayar:o.status,
        }))])
    },[order.order])

    // //button Aksi tampil berdasarkan badges
    // const [stateForm, setStateForm] = useState({
    //    Menunggu_Pembayaran:status_bayar,
    // });




    // const [skema,setSkema]=useState([
    //     {
    //         no: 1,
    //         skema_sertifikasi:'SuperVisor Sumber daya manusia',
    //         status_bayar:'Menunggu Pembayaran',
    //         Aksi:stateForm.Menunggu_Pembayaran||status_bayar==='Menunggu Pembayaran'?'Upload Pembayaran':''
    //     },
    //     {
    //         no: 2,
    //         skema_sertifikasi:'Manager Pengelolaan Sumber Daya Manusia',
    //         status_bayar:'Terbayar',
    //         Aksi:stateForm.Menunggu_Pembayaran||status_bayar==='Terbayar'?'Lihat':''
    //     },
    //     {
    //         no: 3,
    //         skema_sertifikasi:'Talent Manager',
    //         status_bayar:'Menunggu Verifikasi',
    //         Aksi:stateForm.Menunggu_Pembayaran||status_bayar==='Menunggu Verifikasi'?'Upload Ulang':'',
    //         Lihat:stateForm.Menunggu_Pembayaran||status_bayar==='Menunggu Verifikasi'?'Lihat':''
    //     }
    // ])

    const columns=[
        {selector:'no',name:'no', sortable:true},
        {selector:'skema_sertifikasi',name:'Skema Sertifikasi',sortable:true},
        {selector:'status_bayar',name:'Status',sortable:true,
            format:row => status_bayar[row.status_bayar]
        },
        {selector:'Aksi',name:'Aksi',sortable:true,
            format: row => Aksi[row.Aksi]},{selector:'Aksi',
        format: row => Lihat[row.Lihat]
    },
    ];

    return(
        <div className='container mt-4'>
            <div className="card">
                <h5 className="card-header text-center bg-white">List Pembayaran</h5>
                <div className="card-body">
                    <DataTable
                        columns={columns}
                        data={skema}
                        customStyles={customStyles}
                        wrap={Aksi}
                        noHeader
                    />
                    
                </div>
            </div>
        </div>)
}

export default MenungguPembayaran