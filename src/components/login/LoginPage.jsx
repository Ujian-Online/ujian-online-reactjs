import { createUseStyles } from 'react-jss'
import LoginForm from './LoginForm'

const useStyles = createUseStyles({
    container : {
        height : '100vh'
    },
    sidebar : {
        backgroundImage : 'url("/assets/img/bg-login.png")',
        backgroundSize : '100% 100%',
        color : 'rgba(17, 8, 74, 0.8)'
        
    },
})

const LoginPage = () => {
    const classes = useStyles()
    return (<div className={`container-fluid ${classes.container} `}  >
        <div className='row h-100'>
            <div className={`col-md-7 ${classes.sidebar}`} >
                <img className='m-2 mt-lg-3 ml-lg-4' src='/assets/img/bg-logo.png'  alt='logo' />
            </div>
            <div className='col-md-5 mt-5'>
                <LoginForm />
            </div>
        </div>
    </div>)
}
export default LoginPage