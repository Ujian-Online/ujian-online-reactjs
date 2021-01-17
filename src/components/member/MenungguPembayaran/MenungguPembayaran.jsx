import {useState} from 'react'
import DataTable from 'react-data-table-component'
import { useHistory } from 'react-router-dom'
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
    const [skema,setSkema]=useState([
        {
            no: 1,
            skema_sertifikasi:'SuperVisor Sumber daya manusia',
            status_bayar:'Menunggu Pembayaran',
            Aksi:'Upload Pembayaran'
        },
        {
            no: 2,
            skema_sertifikasi:'Manager Pengelolaan Sumber Daya Manusia',
            status_bayar:'Terbayar',
            Aksi:'Lihat'
        },
        {
            no: 3,
            skema_sertifikasi:'Talent Manager',
            status_bayar:'Menunggu Verifikasi',
            Aksi:'Upload Ulang',
            Lihat:'Lihat'
        }
    ])

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