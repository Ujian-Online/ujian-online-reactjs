import DataTable from 'react-data-table-component'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { status_ujian , apl_02 } from './status'

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
   

    const [ myExam , setMyExam ] = useState([
        { 
            no : 1 , 
            skema_sertifikasi : 'Talent Manager' ,
            jadwal : 'Sabtu, 12 Desember 2020' ,
            status_ujian : 'Kompeten',
            apl_02 : 'Form terverifikasi'
        },
        { 
            no : 2 , 
            skema_sertifikasi : 'Talent Manager' ,
            jadwal : 'Sabtu, 12 Desember 2020' ,
            status_ujian : 'Kompeten',
            apl_02 : 'Form terverifikasi'
        },
        { 
            no : 3 , 
            skema_sertifikasi : 'Talent Manager' ,
            jadwal : 'Sabtu, 12 Desember 2020' ,
            status_ujian : 'Tidak Kompeten',
            apl_02 : 'Form terverifikasi'
        },
        { 
            no : 4 , 
            skema_sertifikasi : 'Talent Manager' ,
            jadwal : 'Sabtu, 12 Desember 2020' ,
            status_ujian : 'Kompeten',
            apl_02 : 'Form ditolak'
        },
        { 
            no : 5 , 
            skema_sertifikasi : 'Talent Manager' ,
            jadwal : 'Sabtu, 12 Desember 2020' ,
            status_ujian : 'Kompeten',
            apl_02 : 'Form terverifikasi'
        },
        { 
            no : 6 , 
            skema_sertifikasi : 'Talent Manager' ,
            jadwal : 'Sabtu, 12 Desember 2020' ,
            status_ujian : 'Kompeten',
            apl_02 : 'Edit form'
        },
        { 
            no : 7 , 
            skema_sertifikasi : 'Talent Manager' ,
            jadwal : 'Sabtu, 12 Desember 2020' ,
            status_ujian : 'Kompeten',
            apl_02 : 'Form terverifikasi'
        },
        { 
            no : 8 , 
            skema_sertifikasi : 'Talent Manager' ,
            jadwal : 'Sabtu, 12 Desember 2020' ,
            status_ujian : 'Kompeten',
            apl_02 : 'Isi form'
        },
    ])

    const columns = [
        { selector: 'no', name: 'No', sortable: true },
        { selector: 'skema_sertifikasi', name: 'Skema Sertifikasi', sortable: true },
        { selector: 'jadwal', name: 'Jadwal', sortable: true },
        { selector: 'status_ujian', name: 'Status Ujian', sortable: true  , 
          format : row => status_ujian[row.status_ujian]
        },
        { selector: 'apl_02', name: 'APL 02', sortable: true , 
          format : row => apl_02[row.apl_02]
        },
    ];

    const onClickRow = (row) => {
        history.push(`/member/ujian-saya/${row.no}`)
    }

    return (<div className='container mt-4'>
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
    </div>)
}

export default MyExam