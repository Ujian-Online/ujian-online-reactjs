import { createUseStyles } from 'react-jss'
import LoginForm from './LoginForm'

const useStyles = createUseStyles({
    container : {
        height : '100vh'
    },    
})

const LoginPage = () => {
    const classes = useStyles()
    return (<div className={`container-fluid ${classes.container} `}  >
        <div className='row h-100 d-flex align-items-center justify-content-center'>
            <div className='col-md-4'>
                <LoginForm />
            </div>
        </div>
    </div>)
}
export default LoginPage