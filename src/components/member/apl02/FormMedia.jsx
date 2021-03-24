import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postApl02Action , getApl02DetailAction } from '../../../redux/actions/apl02.action'
import { useParams } from 'react-router-dom'

const FormMedia = ({ media = {} , asuk }) => {
    const [ form , setForm ] = useState({
        element_id: asuk.asesi_id , 
        type : media.id ? 'update' : 'new',
        description: media.description,
        media_id : media.id,
        value : media.media_url
    })
    const [ state , setState ] = useState({
        error: null,
        isLoading: false
    })
    const dispatch = useDispatch()
    const auth = useSelector( state => state.auth )
    const { id } = useParams()

    const onSubmit = (e) => {
            e.preventDefault()
            setState({  isLoading: true , error: null })
            dispatch(postApl02Action(auth.token, form))
            .then(() => {
                dispatch(getApl02DetailAction(auth.token, id))
                setState({ isLoading: false  })
            })
            .catch( err => {
                setState({ isLoading: false , error: err.message })
            })
        
    }

    const onChangeFile = (e) => {
        setForm({ ...form , value : e.target.files[0] })
        setState({ ...state, error: null })
    }

    return (
    <form className='text-right ' onSubmit={onSubmit} >
        <label className="d-block p-2 rounded mt-2 bg-light text-center cursor-pointer " >
            <input type="file" className="d-none" accept=".jpg, .png, .jpeg, .pdf" onChange={onChangeFile} />
            <span>{form.value && form.value.name ? form.value.name : 
                form.value ? form.value : 'Browse file ...'}</span>
        </label>
        <textarea 
            className='form-control p-2 ' 
            onChange={({ target }) => {
                setForm({ ...form , description : target.value }) 
                setState({ state , error: null })
            }} >
                { form.description }
        </textarea>
            { state.error ? <span className='alert alert-danger text-center my-2 d-block ' >{ state.error }</span> : '' }
        <button className='btn btn-primary btn-sm mt-2 ' disabled={ state.isLoading } >
             { state.isLoading ? 'Loading ...' : media.id ? 'Edit Media' : 'Tambah Media' } 
        </button>
    </form>
    )
}
export default FormMedia