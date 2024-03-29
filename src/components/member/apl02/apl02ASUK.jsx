import { useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
import Apl02Media from './apl02Media'
import FormMedia from './FormMedia'

const Apl02ASUK = ({ asuk , sertifikasi, isEdit }) => {
    const [isDispalyInstruction, toggleDisplayInstruction ] = useState(true)
   
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
            {asuk.media < 1 ? 
                <ul className='list-unstyled mb-0 ' style={{color:'red' }} >
                    <button className='btn px-2 py-1 rounded-circle ' onClick={() => toggleDisplayInstruction(!isDispalyInstruction)} >
                        {isDispalyInstruction ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
                    </button>
                    {asuk.desc}
                    <ol>
                        {(isDispalyInstruction && asuk.upload_instruction.split(".")
                        .map(instruction => instruction ? <li> {instruction} </li> : '' )) || '' }
                     </ol>                   
                </ul> : 
                <ul className='list-unstyled mb-0 ' style={{backgroundColor:'white' }}>
                    <button className='btn px-2 py-1 rounded-circle ' onClick={() => toggleDisplayInstruction(!isDispalyInstruction)} >
                        {isDispalyInstruction ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
                    </button>
                    {asuk.desc}
                    <ol>
                        {(isDispalyInstruction && asuk.upload_instruction.split(".")
                        .map(instruction => instruction && instruction.length ? <li> {instruction} </li> : '' )) || '' }
                    </ol>
                    
                </ul>
            }
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
                <FormMedia asuk={ asuk } sertifikasi={sertifikasi} />
            </td>
        </tr>
         : '' }
        {asuk.media.map( ( media , key ) => 
        <Apl02Media 
            key={ key }
            media={ media } 
            asuk={ asuk }
            sertifikasi={ sertifikasi }
            isEdit={ isEdit }></Apl02Media>)}
        </>
        : '' }
    </>)
}

export default Apl02ASUK