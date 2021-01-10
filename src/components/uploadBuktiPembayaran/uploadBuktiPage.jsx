import { createUseStyles } from 'react-jss'
import {Link} from 'react-router-dom'
import UploadForm from './uploadBuktiForm'
import UploadBuktiDetailInformasi from './uploadBuktiDetailInformasi'

const useStyles = createUseStyles({
    container : {
        height : '100vh'
    },
    
})

const UploadPembayaranPage = () => {
    
    const classes = useStyles()

    return (<div className={`container-fluid ${classes.container} `}  >
        <div className='row h-100'>
            <div className="col-md-12">
                <h2 className="text-center mb-3 mb-lg-5">
                    Upload Pembayaran
                </h2>
            </div>
            <div className={`col-md-6 `} >
               <UploadBuktiDetailInformasi  />
            </div>
            <div className='col-md-6'>
                <UploadForm />
            </div>
            <div className="col-md-12 mt-5">
            <div className="form-group col-sm-4 col-md-4 ml-auto mr-auto">
                <button type="submit" className="btn btn-primary btn-block">
                    Upload Pembayaran
                </button>
            </div>
            <div className="form-group col-sm-6 col-md-4 mr-auto ml-auto">
                <button type="submit" className="btn btn-light bg-gray btn-block">
                        <Link to="/">
                        Kembali
                    </Link>
                </button>
            </div>      
        </div>
            </div>
            
    </div>)
}
export default UploadPembayaranPage