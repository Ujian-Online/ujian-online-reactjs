import { useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown , MdCancel } from 'react-icons/md'

import { useDispatch , useSelector } from 'react-redux'
import {  postApl02Action } from '../../../redux/actions/apl02.action'
import Apl02Media from './apl02Media'
import FormMedia from './FormMedia'

const Apl02ASUK = ({ asuk , isEdit }) => {
    const [isDispalyInstruction, toggleDisplayInstruction ] = useState(false)
   
    const rowSpanAnswer = () => {
        if(isDispalyInstruction && isEdit ){
            return asuk.media.length + 3
        }
        else if(isDispalyInstruction && asuk.media.length ){
            return asuk.media.length + 2
        }
        else if(isDispalyInstruction){
            return 2    
        }else {
           return 1
        }
    } 

    return (<>
        <tr  >
            <td colSpan="2" rowSpan={ rowSpanAnswer() } >
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
            <td className='text-center' >{asuk.is_verified ? 'K' : 'BK'}</td>
            <td>{asuk.verification_note}</td>
        </tr>
        { isDispalyInstruction ? <>
        <tr>
            <th className='text-center ' >Media</th>
            <th className='text-center ' >Deskripsi</th>
        </tr>
        { isEdit ?  
        <tr>
            <td colSpan='2' >
                <FormMedia asuk={ asuk } />
            </td>
        </tr>
         : '' }
        {asuk.media.map( ( media , key ) => 
        <Apl02Media 
            key={ key }
            media={ media } 
            asuk={ asuk } 
            isEdit={ isEdit } />)}
        </>
        : '' }
    </>)
}

export default Apl02ASUK