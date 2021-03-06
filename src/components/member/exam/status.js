import { MdControlPoint , MdEdit } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const status_ujian = {
    'menunggu_verifikasi_form_apl02' : ' Menunggu verifikasi form' ,
    'menunggu' : 'Menunggu jadwal ujian' ,
    'Ujian dalam penilaian' : 'Ujian dalam penilaian' ,
    'Kompeten' : <span className='badge badge-success' style={{ fontSize : '12px' }} > Kompeten </span> ,
    'Tidak Kompeten' : <span className='badge badge-danger' style={{ fontSize : '12px' }} >Tidak Kompeten </span>
}

export const apl_02 = {
    'Isi form' : (<Link to="/member/isi/apl02">
                    <button className='btn btn-success' style={{ padding: '2px 10px' , fontSize : '14px' }} >
                       <MdControlPoint /> Isi Form
                     </button>
                    </Link> ) ,
    'Edit form' : (<button className='btn btn-warning' style={{ padding: '2px 10px' , fontSize : '14px' }} >
                    <Link to="/member/isi/apl02" className="text-dark"><MdEdit />  Edit Form</Link> 
                </button>),
    'Menunggu verifikasi' : 'Menunggu verifikasi' ,
    'Form ditolak' : <span className='badge badge-danger' style={{ fontSize : '12px' }} >Form ditolak</span> ,
    'Form terverifikasi' : <span className='badge badge-success' style={{ fontSize : '12px' }} >Terverifikasi</span>
}

