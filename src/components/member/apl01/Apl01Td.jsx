import { useState, useEffect } from "react";
import { MdCancel } from 'react-icons/md';
import { Spinner } from 'react-bootstrap'
import { postCustomDataAction } from '../../../redux/actions/apl01.action'
import { useSelector, useDispatch } from 'react-redux'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    status : {
        padding: '5px',
        fontSize: '14px',
        color: 'white'
    }
})

// const customDataTypes = {
//     text: "Teks",
//     dropdown: "Pilihan",
//     upload_image: "Unduh gambar"
// }

const TdTable = ({ customData, isDisabled , refresh }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const [isLoading, setLoading] = useState(false)
    const [messageError, setError] = useState(null)
    const [customDataState, setStateCustomData] = useState({
        customdataid: customData.id,
        value: customData.value,
        type: customData.type
    })

    useEffect(() => {
        onChange(customData.value)
    }, [customData.value ])

    const onChange = (value ) => {
        setStateCustomData({ customdataid: customData.id, value , type: customData.type })
    }

    const onSave = (value) => {
            setError(false)
            setLoading(true)
            dispatch(postCustomDataAction(auth.token, { ...customDataState , value }))
            .then(() => {
                setLoading(false)
                setError(null)
                refresh()
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
       
    }
    const renderLoading = () => (

        <Spinner animation="border" role="status" style={{ width: 20, height: 20 }} >
            <span className="sr-only">Loading...</span>
        </Spinner>
    )

    const onChangeInputFile = async (e) => {
        if(e.target.files.length) {
            onChange(e.target.files[0])
            onSave(e.target.files[0])
        }
    }

    const renderUploadBukti = () => (
        <label className="d-block p-2 rounded mt-2 bg-light text-center cursor-pointer " >
            <input type="file" className="d-none" accept=".jpg, .png, .jpeg, .pdf" onChange={onChangeInputFile } />
            <span>{typeof customDataState.value === 'object'  ? customDataState.value.name : 'Browse file ...' }</span>
        </label>
    )

    const renderMedia = () => {
        return(<div className='d-flex align-items-center justify-content-center ' >
        <a href={`${customDataState.value}`} target="_blank" >Lihat media</a>
        <button className="btn btn-link rounded-circle text-danger d-flex " onClick={() => onChange('')} ><MdCancel /></button>
        </div>)
    }

    const renderActions = () => {
        if (customData.input_type === 'text') {
            return (<input type='text'
                value={customDataState.value}
                onChange={(e) => onChange(e.target.value)}
                onBlur={() => onSave(customDataState.value) }
                className='form-control py-1 ' />)
        } else if (customData.input_type === 'dropdown'){
        
            return (
                <select className='form-control py-1 '
                    value={customDataState.value}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={() => onSave(customDataState.value) }
                    style={{ height: '38px' }} >
                    <option value='' >Pilih ...</option>
                    { (customData.dropdown_option || '' ).split(',').map((val , key ) =>
                        <option key={key} >{val }</option>
                    ) }                    
                </select>)
        }else if (customData.input_type === 'upload_image') {
            return(typeof customDataState.value === 'string' && customDataState.value ? renderMedia() : renderUploadBukti() )
        }

        return ''

    }

    const renderValue = () => {
        if ((customData.input_type === 'text' || customData.input_type === 'dropdown') && customDataState.value ) {
            return customData.value;
        }else if (customData.input_type === 'upload_image' && customDataState.value ) {
            return(<a href={`${customDataState.value}`} target="_blank" >Lihat media</a> )
        }

        return 'Belum diisi'
    }

    return (<tr >
        <td>{customData.title}</td>
        <td className='text-center' > 
            {customData.is_verified ? <span className={`badge badge-success ${classes.status}`}>Terverifikasi</span> : customData.value ? <span className={`badge badge-warning ${classes.status}`}>Belum diverifikasi</span> : <span className={`badge badge-warning ${classes.status}`}>Data kosong</span> } 
        </td> 
        {
            isDisabled ? <td > {renderValue() } </td>  :
        <td>
            <div className='d-flex align-items-center ' >
                <div className='position-relative mb-2 flex-grow-1 ' >
                    {renderActions()}
                    {messageError ? <div className="invalid-feedback position-absolute d-block bg-white ">{messageError }</div> : ''}
                </div>
                <div >
                    {isLoading ? renderLoading() : ''}
                </div>
            </div>
        </td> 
        }
         <td>{customData.verification_note || '-' }</td>
    </tr>)
}


export default TdTable
