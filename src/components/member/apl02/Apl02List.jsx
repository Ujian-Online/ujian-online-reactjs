import {useRef, useState , useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import {Modal,Button} from 'react-bootstrap'
import SignatureCanvas from 'react-signature-canvas'
import { getApl02Action } from '../../../redux/actions/apl02.action'
import DataTable from 'react-data-table-component'

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

const Apl02Form=(props)=>{
    const history = useHistory()
    let sigPad = useRef()
    const dispatch = useDispatch()

    //reducer auth.token
    const auth = useSelector(state => state.auth )

    //showDetailby auth.token
    useEffect(() => {
        dispatch(getApl02Action(auth.token))
    }, [] )

    //reducer apl02
    const apl02=useSelector(state=>state.apl02)

    useEffect(()=>{
        // console.log('APL02 LIST',apl02)
        let no = 1
        setSkema([ ...(apl02.apl02 || [] ).map(lstapl02=>({
            no:no++,
            id:lstapl02.sertifikasi_id,
            nomor_skema:lstapl02.sertifikasi.nomor_skema,
            title: lstapl02.sertifikasi && lstapl02.sertifikasi.title || '',
            status:lstapl02.sertifikasi.is_active?'aktif':'tidak aktif',

           
        }))])
    },[apl02.apl02])

 
     //data
     const [ skema , setSkema ] = useState([])
    
     //columns
     const columns = [
         { selector : 'no' , name : 'No' , sortable : true , maxWidth: '100px' },
         { selector : 'id' , name : 'id' , omit : true },
         { selector : 'nomor_skema' , name : 'Nomor Skema' , sortable : true },
         { selector : 'title' , name : 'Judul Skema' , sortable : true },
         { selector : 'status' , name : 'Status' , sortable : true },
        
     ];
     const onClickRow = (row) => {
        history.push(`/member/apl-02/${row.id}`)
    }

    return(
    <>
        <div className='container mt-5'>
            
            <div className="card">
            <h5 className="card-header text-center bg-white">List APL02</h5>
                <div className="card-body">
                    <DataTable
                        columns={columns}
                        data={skema}
                        noHeader
                        customStyles={customStyles}
                        onRowClicked={onClickRow}
                    />
                </div>
            </div>
        </div>
     </>    
    )
}

export default Apl02Form