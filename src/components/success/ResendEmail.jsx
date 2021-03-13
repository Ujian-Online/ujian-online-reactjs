import { createUseStyles } from 'react-jss'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import * as actionAPI from '../../redux/actions/auth.action'

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

const ResendEmail = () => {
    const dispatch = useDispatch()
    const auth=useSelector(state=>state.auth)
    const history=useHistory();
      
    useEffect(()=>{
        !auth.token && history.push('/login')
        auth.token && dispatch(actionAPI.resendAction(auth.token)) && history.push('/sukses-resend')
    },[])

    const onSubmit=(e)=>{
        dispatch(actionAPI.resendAction(auth.token))
    }


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
                         Akun Anda berhasil didaftarkan. Untuk melengkapi proses silakan periksa email Anda untuk melakukan verifikasi. jika link tidak ada, maka anda dapat menekan tombol resend email untuk mengirim ulang link verifikasi atau anda dapat melakukan cek folder spam pada email anda
                         </p>
                    </div>
                    <div className="form-group col-md-4 col-sm-6 mr-auto ml-auto">
                        <button type="submit" className="btn btn-primary btn-block" onClick={()=>onSubmit}>
                            Resend Email
                        </button>
                    </div>
             </div>
        </div>
    </div>
    </>
    )
}
export default ResendEmail