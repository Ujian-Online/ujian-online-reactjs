import DataTable from 'react-data-table-component'
import { useHistory } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { status_ujian , apl_02 } from './status'
import { useDispatch, useSelector } from 'react-redux'
import { getExamAction } from '../../../redux/actions/exam.action'
import { MdControlPoint,MdEdit } from 'react-icons/md'
import { Modal } from 'react-bootstrap'

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



const MyExam = () => {

    const history = useHistory()
   
    //deklarasi reducer untuk token
    const auth=useSelector(state=>state.auth)

    //get token dan data
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(getExamAction(auth.token))
    },[])

    //deklarasi reducer exam
    const exam = useSelector(state =>state.exam)
    
    // tampil data pada datatable
    const [myExam,setMyExam]=useState([])
    useEffect(()=>{
        console.log('exam schedule',exam)
        setMyExam([ ...(exam.exam || [] ).map(exm=>({
            no:exm.id,
            skema_sertifikasi: exm.sertifikasi && exm.sertifikasi.title || '',
            status_ujian:exm.is_kompeten,
            status:exm.status,
            jadwal:exm.ujianjadwal.tanggal
        }))])
    },[exam.exam])

    //clickButtonControl
    const clickButton=()=>{
        history.push("/member/isi/apl02")
    }

    const columns = [
        { selector: 'no', name: 'No', sortable: true },
        { selector: 'skema_sertifikasi', name: 'Skema Sertifikasi', sortable: true },
        { selector: 'jadwal', name: 'Jadwal', sortable: true },
        { selector: 'status_ujian', name: 'Status Ujian', sortable: true  , 
          format : row => status_ujian[row.status_ujian]
        },
        { selector: 'apl_02', name: 'APL 02', sortable: true , 
        format:row=>{
            //view button berdasarkan badges
            if(row.status==='menunggu'){     
                return <div className='row' >
                <div className='col-7 d-flex align-items-center' >
                    <span className='badge badge-warning' style={{ fontSize : '12px' }} >Menunggu Verifikasi</span>
                </div>
                <div className='col-5' >
                    <button className='btn btn-warning' style={{ padding: '2px 10px' , fontSize : '14px'  }} onClick={clickButton} >
                        <MdEdit /> Edit
                    </button>
                </div>
                </div>
                
                 
            }
            else if(row.status==="paket_soal_assigned"){     
                return  <span className='badge badge-success' style={{ fontSize : '12px' }} >Terverifikasi</span>
            }
        }
        //   format : row => apl_02[row.apl_02]
        },
    ];

    //Modal untuk kesalahan klik
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false)
    const handleShowModal = () => setShowModal(true);
   
    const renderModalRow = () => (
        <Modal show={showModal} onHide={handleCloseModal}>
               <Modal.Header closeButton>
                   <Modal.Title>Kesalahan Klik</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                   Ujian akan dimulai ketika APL 02 menampilkan status Terverifikasi
               </Modal.Body>
        </Modal>
    )

    const onClickRow = (row) => {
        if(row.status=="paket_soal_assigned"){
            history.push(`/member/ujian-saya/${row.no}`)
        }
        else{
            handleShowModal()
        }
        
    }

    return (
    <>
    <div className='container mt-4'>
        <div className="card">
            <h5 className="card-header text-center bg-white">Ujian Saya</h5>
            <div className="card-body">
                <DataTable
                    columns={columns}
                    data={myExam}
                    customStyles={customStyles}
                    onRowClicked={onClickRow}
                    noHeader
                />
            </div>
        </div>
    </div>
    {renderModalRow()}
    </>
    )
}

export default MyExam