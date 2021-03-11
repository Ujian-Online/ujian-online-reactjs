import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'

const useStyles = createUseStyles({
    container: {
        height: '100vh'
    },
    logo : {
        top : '40px',
        left:'50px'
    },
    email :{
        height:'250px'
    }
})

const SuccessRegister = () => {
   
      const classes = useStyles()
    
    return (
    <>
    <div className={`container-fluid ${classes.container} `}>
        <div className='row h-100 d-flex align-items-center justify-content-center position-relative'>
            <Link to="/" className={`position-absolute d-none d-sm-block ${ classes.logo }`} >
                <img src='/assets/img/bg-logo.png' alt='logo' width='50px' />
            </Link>
            <div className="col-md-12 col-xs-6 text-center ml-auto mr-auto mb-3 mt-3">
                    <img src='/assets/img/mailbox.png' alt='logoEmail' className={`${classes.email}`} />
                    <div className="col-sm-6 col-md-4 text-center ml-auto mr-auto">
                        <h1 className="mb-lg-5">Check email anda!</h1>
                        <p>
                            Akun Anda berhasil didaftarkan. Untuk melengkapi proses silakan periksa email Anda untuk melakukan verifikasi.
                         </p>
                    </div>
                   
             </div>
        </div>
      
    </div>
    
    </>
    )
}
export default SuccessRegister