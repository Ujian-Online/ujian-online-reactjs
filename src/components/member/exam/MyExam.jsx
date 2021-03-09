import DataTable from 'react-data-table-component'
import { Link, useHistory } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { status_ujian , apl_02 } from './status'
import { useDispatch, useSelector } from 'react-redux'
import { getExamAction } from '../../../redux/actions/exam.action'
import { MdControlPoint,MdEdit } from 'react-icons/md'
import { Modal } from 'react-bootstrap'
import moment from 'moment'

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



const MyExam = (props) => {

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
        let no = 1
        setMyExam([ ...(exam.exam || [] ).map(exm=>({
            no: no++,
            id:exm.id,
            sertifikasi_id:exm.sertifikasi_id,
            skema_sertifikasi: exm.sertifikasi && exm.sertifikasi.title || '',
            apl_02:exm.apl02_status,
            status_ujian:exm.ujian_status,
            jadwal:moment(exm.ujianjadwal.tanggal).format('DD-MM-YYYY'),
            status:exm.status
        }))])
    },[exam.exam])

    //clickButtonControl
    const clickButton=(id)=>()=>{
        history.push(`/member/apl-02/${id}`)
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
            if(row.status_ujian==='menunggu_verifikasi_form_apl02' && row.apl_02=="menunggu_verifikasi"){     
                return <div className='row' >
                <div className='col-7 d-flex align-items-center' >
                    <span className='badge badge-warning' style={{ fontSize : '12px' }} >Menunggu Verifikasi</span>
                </div>
                <div className='col-5' >
                    <button className='btn btn-warning' style={{ padding: '2px 10px' , fontSize : '14px'  }} onClick={clickButton(row.sertifikasi_id)} >
                        <MdEdit /> Edit
                    </button>
                </div>
                </div>     
            }
            else if(row.status_ujian==="menunggu_jadwal_ujian"&& row.apl_02==="form_terverifikasi"){     
                return  <span className='badge badge-success' style={{ fontSize : '12px' }} >Terverifikasi</span>
            }
            else if(row.status_ujian==="menunggu_verifikasi_form_apl02"&& row.apl_02==="form_ditolak"){     
                return  <div className='row' >
                <div className='col-7 d-flex align-items-center' >
                    <span className='badge badge-danger' style={{ fontSize : '12px' }} >Form ditolak</span>
                </div>
                <div className='col-5' >
                    <button className='btn btn-warning' style={{ padding: '2px 10px' , fontSize : '14px'  }} onClick={clickButton(row.sertifikasi_id)} >
                        <MdEdit /> Edit
                    </button>
                </div>
                </div>     
            }
            else if(row.status='menunggu'&& row.apl_02==="menunggu_verifikasi"){     
                return  <div className='row' >
                <div className='col-10' >
                    <button className='btn btn-warning' style={{ padding: '5px 15px' , fontSize : '14px'  }} onClick={clickButton(row.sertifikasi_id)} >
                        <MdEdit /> Edit
                    </button>
                </div>
                </div>     
            }
            else if(row.status='menunggu'&& row.apl_02==="form_terverifikasi"){     
                return  <div className='row' >
                <div className='col-10' >
                    <span className='badge badge-success' style={{ fontSize : '12px' }} >Terverifikasi</span>
                </div>
                </div>     
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
            history.push(`/member/ujian-saya/${row.id}`)
    }

    return (
    <>
    <div className='container mt-4'>
        <div className="card" style={{ boxShadow: '0 2px 2px #ccc' , border: 'none' }} >
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