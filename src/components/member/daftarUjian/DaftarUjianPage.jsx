import { createUseStyles } from 'react-jss'
import { useHistory } from 'react-router-dom'
import Footer from '../Footer'
import DaftarUjianForm from './DaftarUjianForm'

const DaftarUjianPage=()=>{
return(
    <div className={`container-fluid `}>
    <div className='row h-100'>
        <div className='col-md-6 ml-auto mr-auto mt-5'>
            <DaftarUjianForm />
        </div>
        <Footer/>
    </div>
    </div>
    
    
)
}
export default DaftarUjianPage