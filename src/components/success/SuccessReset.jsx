import { createUseStyles } from 'react-jss'
import { Link, useLocation,useHistory} from 'react-router-dom'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {setTokenAction} from '../../redux/actions/auth.action'



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
    const dispatch=useDispatch()
    const history=useHistory()
    
    useEffect(()=>{
       
       
    })

    return (
    <>
    <div className={`container-fluid ${classes.container} `}>
        <div className='row h-100 d-flex align-items-center justify-content-center position-relative'>
            <div className="col-md-12 col-xs-6 text-center ml-auto mr-auto mb-3 mt-3">
                    <img src='/assets/img/mailbox.png' alt='logoSukses' className={`${classes.email}`} />
                    <div className="col-sm-6 col-md-4 text-center ml-auto mr-auto">
                        <h1 className="mb-lg-5">Check email anda!</h1>
                        <p>
                            Silahkan Cek email anda untuk melakukan Ubah kata sandi
                         </p>
                    </div>
             </div>
        </div>
    </div>
    </>
    )
}
export default SuccessRegister