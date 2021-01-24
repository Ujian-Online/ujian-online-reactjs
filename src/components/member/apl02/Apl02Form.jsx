import {useRef, useState} from 'react'
import DataTable from 'react-data-table-component'
import { useHistory, Link } from 'react-router-dom'
import {Modal,Button} from 'react-bootstrap'
import {bukti_relevan} from './status'
import SignaturePad from 'react-signature-canvas'

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
    const sigCanvas=useRef({})
    const Hapus=()=>sigCanvas.current.clear();
    const [skema,setSkema]=useState([
        {
            pertanyaan:'pertanyaan 1 kriteria 1 kriteria 2',
            bukti_relevan:'Bukti',
            status: 'K/BK',
            catatan:'seluruh dokumen sudah lengkap'
        },
        {
            pertanyaan:'pertanyaan 2 kriteria 1 kriteria 2',
           bukti_relevan:'Bukti',
           status:'K/BK',
           catatan:'seluruh dokumen sudah lengkap'
        },
        {
            pertanyaan:'pertanyaan 3 kriteria 1 kriteria 2',
           bukti_relevan:'Bukti',
           status:'K/BK',
           catatan:'seluruh dokumen sudah lengkap'
        }
    ])

    const columns=[
        {selector : 'pertanyaan',name:'Pertanyaan',sortable:true,center:true},
        {selector:'bukti_relevan',name:'Bukti ',
            format:row => bukti_relevan[row.bukti_relevan]
        },
        {selector:'status',name:'Status',sortable:true},
        {selector:'catatan',name:'Catatan',sortable:true}
    ];

    return(
    <>
        <div className='container mt-5'>
            <div className="form-group row mb-5">
                <label htmlFor="inputSkemaSertifikasi" className="col-sm-2 col-form-label">Judul Skema Sertifikasi</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputSkemaSertifikasi" placeholder="Masukkan Judul Skema Sertifikasi"/>
                </div>
            </div>
            <div className="card mt-5">
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
            </div>
            <div className="form-group row mt-5">
                <label htmlFor="inputSkemaSertifikasi" className="col-sm-2 col-form-label">Tanda Tangan</label>
                <SignaturePad 
                        ref={sigCanvas}
                        canvasProps={{width: 500, height: 100, className: 'sigCanvas col-sm-10 bg-secondary'}}
                />
                <div className="ml-auto">
                <Link onClick={Hapus}>Ulangi tanda tangan</Link>
                </div>
            </div>
            <div className="col-md-3 ml-auto">
            <button type="button" className="btn btn-light btn-md">Sebelumnya</button>
<button type="button" className="btn btn-primary btn-md">Simpan</button>
            </div>

            
           
        </div>
     </>    
    )
}

export default Apl02Form