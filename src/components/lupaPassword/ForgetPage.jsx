import { createUseStyles } from 'react-jss'
import ForgetForm from './ForgetForm'

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

const ForgetPage = () => {
    const classes = useStyles()
    return (<div className={`container-fluid ${classes.container} `}  >
        <div className='row h-100'>
            <div className='col-md-5 mt-5 mr-auto ml-auto'>
                <ForgetForm />
            </div>
        </div>
    </div>)
}
export default ForgetPage