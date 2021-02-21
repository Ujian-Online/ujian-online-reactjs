import { useState, useEffect } from "react";
import { MdPublish , MdVisibility } from 'react-icons/md';
import { Spinner } from 'react-bootstrap'
import { postCustomDataAction } from '../../../redux/actions/apl01.action'
import { useSelector, useDispatch } from 'react-redux'



const customDataTypes = {
    text: "Teks",
    dropdown: "Pilihan",
    upload_image: "Unduh gambar"
}

const TdTable = ({ customData, openModal }) => {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const apl01 = useSelector(state => state.apl01)
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)
    const [customDataState, setStateCustomData] = useState({
        customdataid: customData.id,
        value: customData.value
    })

    useEffect(() => {
        !apl01.isLoading && setLoading(false)
    }, [apl01.isLoading ])

    const onChange = (value) => {
        setStateCustomData({ customdataid: customData.id, value })
    }

    const onSave = () => {
        if (customDataState.value) {
            setError(false)
            setLoading(true)
            dispatch(postCustomDataAction(auth.token, { ...customDataState }))
        } else {
            setError(true)
        }
    }
    const renderLoading = () => (

        <Spinner animation="border" role="status" style={{ width: 20, height: 20 }} >
            <span className="sr-only">Loading...</span>
        </Spinner>
    )

    const renderActions = (input_type) => {
        if (input_type === 'text') {
            return (<input type='text'
                value={customDataState.value}
                onChange={(e) => onChange(e.target.value)}
                className='form-control py-1 ' />)
        } else if (input_type === 'dropdown'){
        
            return (
                <select className='form-control py-1 '
                    value={customDataState.value}
                    onChange={(e) => onChange(e.target.value)}
                    style={{ height: '38px' }} >
                    <option value='' >Pilih ...</option>
                    { (customData.dropdown_option || '' ).split(',').map((val , key ) =>
                        <option key={key} >{val }</option>
                    ) }                    
                </select>)
        }else if (input_type === 'upload_image') {
            return (<button className='btn btn-success btn-sm btn-block ' onClick={() => openModal( customData.title , customDataState.value , onChange )} >
                { customDataState.value ? <><MdVisibility /> Show </> : <><MdPublish /> Unggah</> }
            </button>)
        }

        return ''

    }

    return (<tr >
        <td>{customData.title}</td>
        <td>{customDataTypes[customData.input_type]}</td>
        <td>
            <div className='d-flex align-items-center ' >
                <div className='position-relative mb-2 flex-grow-1 ' >
                    {renderActions(customData.input_type)}
                    {isError ? <div className="invalid-feedback position-absolute d-block ">value wajib diisi.</div> : ''}
                </div>
                <button className='btn btn-sm btn-primary ml-2' onClick={onSave} >
                    {isLoading ? renderLoading() : 'Simpan'}
                </button>
            </div>
        </td>
    </tr>)
}


export default TdTable
