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
    const classes = useStyles()
    return (
    <>
    <div className={`container-fluid ${classes.container} `}>
        <div className='row h-100 d-flex align-items-center justify-content-center position-relative'>
            <div className="col-md-12 col-xs-6 text-center ml-auto mr-auto mb-3 mt-3">
                    <img src='/assets/img/sukses.png' alt='logoSukses' className={`${classes.email}`} />
                    <div className="col-sm-6 col-md-4 text-center ml-auto mr-auto">
                        <h1 className="mb-lg-5">Check email anda!</h1>
                        <p>
                            Selamat akun anda berhasil diaktifkan
                         </p>
                    </div>
                    <div className="form-group col-md-4 col-sm-6 mr-auto ml-auto">
                       <Link to="/member/daftar-ujian">[Klik di sini untuk ke proses selanjutnya]</Link>
                    </div>
             </div>
        </div>
    </div>
    </>
    )
}
export default SuccessRegister