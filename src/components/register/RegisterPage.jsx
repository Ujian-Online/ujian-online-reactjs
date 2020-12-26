import {Link} from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import RegisterForm from './RegisterForm'

const useStyles = createUseStyles({
    container : {
        height : '100vh'
    },
    sidebar : {
        // backgroundImage : 'url("/assets/img/bg-register.png")',
        backgroundSize : '100% 100%'
    }
})

const RegisterPage = () => {
    const classes = useStyles()

    return (<div className={`container-fluid ${classes.container} `}  >
        <div className='row h-100'>
        <div className="container-fluid  bg-white col-md-12 col-xs-6 mb-5 mt-4">
            <div className={`col-md-5 ${classes.sidebar}`} >
                <Link to="/">
                    <img src='/assets/img/bg-logo.png' alt='logo' width='50px' />
                </Link>
            </div>
                <div className="col-md-12 text-center ml-auto mr-auto mb-3 mt-3">
                    <div className="col-md-6 col-xs-6 col-sm-6 text-center ml-auto mr-auto border rounded-left rounded-right ">
                        <RegisterForm />
                    </div>
                </div>
        </div>
    
            <div className='col-md-7'>
                
            </div>
        </div>
    </div>)
}
export default RegisterPage