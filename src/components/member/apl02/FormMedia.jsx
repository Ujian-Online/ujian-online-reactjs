import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postApl02Action , getApl02DetailAction, deleteApl02Action } from '../../../redux/actions/apl02.action'
import {  useParams } from 'react-router-dom'

const FormMedia = ({ media = {} , asuk,sertifikasi={} }) => {
    const [ form , setForm ] = useState({
        element_id: asuk.id , 
        type : media.id ? 'update' : 'new',
        description: media.description,
        media_id : media.id,
        value : media.media_url,
        sertifikasi_id: sertifikasi.id
    })
    const [ state , setState ] = useState({
        error: null,
        isLoading: false
    })
    const dispatch = useDispatch()
    const auth = useSelector( state => state.auth )
    const { id } = useParams()

    const onUpload = (e) => {
            e.preventDefault()
            setState({  isLoading: true , error: null })
            dispatch(postApl02Action(auth.token, {...form}))
            .then(() => {
                dispatch(getApl02DetailAction(auth.token, id))
                setState({ isLoading: false  })
                clearForm()
            })
            .catch( err => {
                setState({ isLoading: false , error: "deskripsi wajib diisi" })
            })
        
    }

    const onDelete = (e) => {
        e.preventDefault()
        dispatch(deleteApl02Action(auth.token, media.id))
        .then(() => {
          dispatch(getApl02DetailAction(auth.token, id))
        })
        .catch( err => {
            clearForm()
        })
}

    const clearForm = () => {
        if(!form.media_id){
            setForm({ ...form , description : '' , value: '' })
        }
    }

    const onChangeFile = (e) => {
        setForm({ ...form , value : e.target.files[0] })
        setState({ ...state, error: null })
    }

    const renderMedia = () => (
        <label className="d-block p-2 rounded mt-2 bg-light text-center cursor-pointer " >
            <input type="file" className="d-none" accept=".jpg, .png, .jpeg, .pdf" onChange={onChangeFile} />
            <span>{form.value && form.value.name ? form.value.name : 
                form.value ? form.value : 'Browse file ...'}</span>
        </label>
    )

    const renderTextarea = () => (
        <textarea 
            className='form-control p-2 ' 
            onChange={({ target }) => {
                setForm({ ...form , description : target.value }) 
                setState({ state , error: null })
            }}
            value={form.description}
            placeholder="masukan deskripsi"
            >
        </textarea>
    )

    return (
        <>
    <form className='text-right ' >
        { renderMedia() }
        { renderTextarea() }
            { state.error ? <span className='alert alert-danger text-center my-2 d-block ' >{ state.error }</span> : '' }
        <button className='btn btn-primary btn-sm mt-2 ' disabled={ state.isLoading } onClick={onUpload} >
             { state.isLoading ? 'Loading ...' : media.id ? 'Update Dokumen' : 'Upload Dokumen' } 
        </button>
        { media.id ?  
            <button className='btn btn-primary btn-sm mt-2 ml-3' onClick={onDelete} >
            Hapus dokumen 
            </button> : '' } 
        
    </form>

    </>
    )
}
export default FormMedia