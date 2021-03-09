import { useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown , MdCancel } from 'react-icons/md'

import { useDispatch , useSelector } from 'react-redux'
import {  postApl02Action } from '../../../redux/actions/apl02.action'

const Apl02ASUK = ({ asuk }) => {
    const [isDispalyInstruction, toggleDisplayInstruction ] = useState(false)
    const [myFile , setFile ] = useState({
        name: asuk.media_url
    })
    const dispatch = useDispatch()
    const auth = useSelector( state => state.auth )
    const onChangeInputFile = (e) => {
        if(e.target.files.length) {
            setFile(e.target.files[0])
            dispatch(postApl02Action(auth.token, { 
                id: asuk.id , value : e.target.files[0] 
            }))
        }
    }

    const renderUploadBukti = () => (
        <label className="d-block p-2 rounded mt-2 bg-light text-center cursor-pointer " >
            <input type="file" className="d-none" accept=".jpg, .png, .jpeg, .pdf" onChange={onChangeInputFile } />
            <span>{myFile.name ? myFile.name : 'Browse file ...' }</span>
        </label>
    )

    const renderMedia = () => {
        return(<div className='d-flex align-items-center justify-content-center ' >
        <a href={`${asuk.media_url}`} target="_blank" >Lihat media</a>
        <button className="btn btn-link rounded-circle text-danger d-flex " onClick={() => setFile({ name: '' })} ><MdCancel /></button>
        </div>)
    }

    return (
        <tr  >
            <td colSpan="2" >
                <ul className='list-unstyled mb-0 ' >
                    <button className='btn px-2 py-1 rounded-circle ' onClick={() => toggleDisplayInstruction(!isDispalyInstruction)} >
                        {isDispalyInstruction ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
                    </button>
                    {asuk.desc}
                    {isDispalyInstruction && <li className='ml-2 '>
                        {asuk.upload_instruction || '-'}
                    </li> || ''}
                </ul>
            </td>
            <td className='text-center ' >
                {myFile.name ? renderMedia() : renderUploadBukti() }
            </td>
            <td className='text-center' >{asuk.is_verified ? 'K' : 'BK'}</td>
            <td>{asuk.verification_note}</td>
        </tr>
    )
}

export default Apl02ASUK