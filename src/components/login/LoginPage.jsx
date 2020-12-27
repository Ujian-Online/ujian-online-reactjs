import { createUseStyles } from 'react-jss'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'

const useStyles = createUseStyles({
    container: {
        height: '100vh'
    },
    logo : {
        top : '40px',
        left : '50px'
    }
})

const LoginPage = () => {
    const classes = useStyles()
    return (<div className={`container-fluid ${classes.container} `}  >
        <div className='row h-100 d-flex align-items-center justify-content-center position-relative'>
            <Link to="/" className={`position-absolute d-none d-sm-block ${ classes.logo }`} >
                <img src='/assets/img/bg-logo.png' alt='logo' width='50px' />
            </Link>
            <div className='col-sm-6 col-md-4'>
                <LoginForm />
            </div>
        </div>
    </div>)
}
export default LoginPage