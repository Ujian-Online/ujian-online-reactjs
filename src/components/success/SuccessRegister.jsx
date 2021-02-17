import { createUseStyles } from 'react-jss'
import { Link, useHistory } from 'react-router-dom'

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
                        <p>
                        Akun anda berhasil diaktifkan, silahkan Login ke System
                         </p>
                    </div>
                    <div className="form-group col-md-4 col-sm-6 mr-auto ml-auto">
                       <Link to="/login">[Klik di sini untuk Login]</Link>
                    </div>
             </div>
        </div>
    </div>
    </>
    )
}
export default SuccessRegister