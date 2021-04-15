import FormMedia from "./FormMedia"


const Apl02Media = ({ media , asuk, sertifikasi , isEdit }) => {
  
    const renderMedia = () => {
        return(<div className='d-flex align-items-center justify-content-center ' >
        <a href={`${media.media_url}`} target="_blank" >Lihat media</a>        
        </div>)
    }

    return (
        <tr  >
            { isEdit ? <td colSpan='2' > <FormMedia media={ media } asuk={ asuk } sertifikasi={sertifikasi} /> </td>
            : <>
             <td className='text-center ' >{ renderMedia() } </td>
            <td >{media.description }</td>
            </>
            }
           
        </tr>
    )
}

export default Apl02Media