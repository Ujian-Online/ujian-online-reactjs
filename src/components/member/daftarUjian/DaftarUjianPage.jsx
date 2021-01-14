import { createUseStyles } from 'react-jss'
import { useHistory } from 'react-router-dom'
import Footer from '../Footer'
import DaftarUjianForm from './DaftarUjianForm'

const useStyles=createUseStyles({
    container:{
        height:'100vh'
    }
})

const DaftarUjianPage=()=>{
    const classes=useStyles()
return(
    <div className={`container-fluid ${classes.container}`}>
    <div className='row h-100'>
        <div className='col-md-6 ml-auto mr-auto mb-5 mt-5'>
            <DaftarUjianForm />
        </div>
        <Footer/>
    </div>
    </div>
    
    
)
}
export default DaftarUjianPage