import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { loginUserAction } from '../../redux/actions/auth.action'
import { Link } from 'react-router-dom'
const LoginForm = () => {
    const dispatch = useDispatch()
    
    const [ user , setUser ] = useState({
        email : '' ,
        password : '' ,
    })

    const onChangeState = (email) => (e) => {
        setUser(Object.assign({}, user, { [email] : e.target.value }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUserAction(user))
    }
=======
const useStyles = createUseStyles({
   
})

const LoginForm = () => {
    const classes={useStyles}
>>>>>>> ft-ui-login
=======

const LoginForm = () => {
>>>>>>> ft-ui-login
    return (
        <form className="p-lg-5"  >
            <h2 className="text-center mb-3 mb-lg-5">Login Account</h2>
<<<<<<< HEAD
            <div class="form-group">
                <label for="username" className="col-md-6">Username / Email</label>
                <input type="text" 
                class="form-control" 
                id="username" 
                onChange={onChangeState('email')}
                value={ user.email }/>
            </div>
            <div class="form-group">
                <label for="password" className="col-sm-7  col-lg-8 col-xs-5">
                    Password
                </label>
                <Link to='/forget-Password' className='ml-xs-5'>Forget Password ?</Link>
                <input type="password" 
                class="form-control" 
                id="password" 
                onChange={onChangeState('password')}
                value={ user.password }
                />
=======
            <div className="form-group">
                <label htmlFor="username">Username / Email</label>
                <input type="username" className="form-control" id="username" />
            </div>
            <div className="form-group">
                <div className="d-flex">
                    <div className="justify-content-start">
                        <label>Password</label>
                    </div>
                    <div className="justify-content-end ml-auto">
                        <Link to='/forget-Password'>Forget Password?</Link>
                    </div>
                </div>
                <input type="password" className="form-control" id="password" />
>>>>>>> ft-ui-login
            </div>
            <div className="form-group form-check">
                <input className="form-check-input" type="checkbox" id="aggrement" />
                <label className="form-check-label">
                    Remember me
                </label>
            </div>
            <div className="form-group col-sm-6 col-md-4 ml-auto mr-auto">
                <button type="submit" class="btn btn-primary btn-block" onSubmit={onSubmit}>Sign In</button>                
            </div>            
            <div className="col-md-5 ml-auto mr-auto text-center">
            <p>Belum memiliki akun ? <Link to='/registrasi'>Daftar</Link></p>
            </div>
        </form>
    )
}

export default LoginForm