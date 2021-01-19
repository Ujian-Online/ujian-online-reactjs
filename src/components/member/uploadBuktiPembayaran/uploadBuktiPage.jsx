import { createUseStyles } from 'react-jss'
import {Link, useHistory} from 'react-router-dom'
import UploadForm from './uploadBuktiForm'
import UploadBuktiDetailInformasi from './uploadBuktiDetailInformasi'

const useStyles = createUseStyles({
    container : {
        height : '100vh'
    },
    
})

const UploadPembayaranPage = () => {
    const history = useHistory()
    
    const classes = useStyles()

    return (<div className={`container-fluid ${classes.container} `}  >
        <div className='row h-100 ml-auto mr-auto'>
                <h2 className="text-center mb-3 mb-lg-5 col-md-12">
                    Upload Pembayaran
                </h2>
                <div className={`col-md-6 col-sm-6`} >
                    <UploadBuktiDetailInformasi  />
                </div>
                <div className="col-md-6 col-sm-6">
                    <UploadForm />
                </div>
                <div className="form-group col-sm-4 col-md-4 ml-auto mr-auto">
                    <button type="submit" className="btn btn-primary btn-block">
                        Upload Pembayaran
                    </button>
                    <button type="submit" className="btn btn-light bg-gray btn-block" onClick={()=>history.push('/member/menunggu-pembayaran')}>
                            Kembali
                    </button>
                </div>
        </div>
    </div>)
}
export default UploadPembayaranPage