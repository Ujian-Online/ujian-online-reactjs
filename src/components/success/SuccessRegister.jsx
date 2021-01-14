import { createUseStyles } from 'react-jss'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { resendEmailAction, verifiedEmailAction, verifiedEmailErrorAction } from '../../redux/actions/auth.action'
import { Spinner, Modal } from 'react-bootstrap'

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
    const dispatch = useDispatch()
    const auth = useSelector(state=>state.auth)
    const history = useHistory()
    const [showModal,setShowModal] = useState (false)
    const handleVerifiedErrorModal=()=>{
        setShowModal(false)
        dispatch(verifiedEmailErrorAction())
    };
    const handleShowModalError=()=>setShowModal(true)
   
    useEffect(()=>{
        if(auth.token)
        {
            dispatch(verifiedEmailAction()||resendEmailAction())
        }
        if(auth.errMessage){
            handleShowModalError()
        }
    },[auth.token,auth.errMessage])


    const resendEmail=()=>{
        !auth.token && handleShowModalError()
        auth.token && dispatch(resendEmailAction(auth.token))
    }


    const renderLoading=()=>{
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    }

    const renderModalError=()=>{
        <Modal show={showModal} onHide={handleVerifiedErrorModal}>
            <Modal.Header closebutton>
                <Modal.Title>
                    <h6>Kesalahan verifikasi</h6>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{auth.errMessage}</Modal.Body>
        </Modal>
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
                         Akun Anda berhasil didaftarkan. Untuk melengkapi proses silakan periksa email Anda untuk melakukan verifikasi.
                         </p>
                    </div>
                    <div className="form-group col-md-4 col-sm-6 mr-auto ml-auto">
                        <button type="submit" className="btn btn-primary btn-block" onClick={resendEmail}>
                            Kirim ulang verifikasi 
                        </button>
                    </div>
             </div>
        </div>
    </div>
    {renderModalError()}
    </>
    )
}
export default SuccessRegister