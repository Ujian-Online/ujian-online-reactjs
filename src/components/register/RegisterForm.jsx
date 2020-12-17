import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUserAction } from '../../redux/actions/auth.action'

const RegisterForm = () => {
    const dispatch = useDispatch()
    
    const [ user , setUser ] = useState({
        name : '' ,
        password : '' ,
        email : '' ,
        confirm_password : ''
    })

    const onChangeState = (name) => (e) => {
        setUser(Object.assign({}, user, { [name] : e.target.value }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUserAction(user))
    }

    return (
        <form className="p-lg-5" onSubmit={ onSubmit } >
            <h2 className="text-center mb-3 mb-lg-5">Create an Account</h2>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="fullName">Fullname</label>
                    <input 
                     type="text" 
                     className="form-control" 
                     id="fullName" 
                     onChange={onChangeState('name')}
                     value={ user.name } />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="username">Username</label>
                    <input 
                     type="text" 
                     className="form-control" 
                     id="username" 
                     onChange={onChangeState('username')}
                     value={ user.username } />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                 type="email" 
                 className="form-control" 
                 id="email" 
                 onChange={onChangeState('email')}
                 value={ user.email } />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                 type="password" 
                 className="form-control" 
                 id="password" 
                 onChange={onChangeState('password')}
                 value={ user.password } />
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input 
                 type="password" 
                 className="form-control" 
                 id="confirmPassword" 
                 onChange={onChangeState('confirm_password')}
                 value={ user.confirm_password } />
            </div>
            <div className="form-group form-check">
                <input className="form-check-input" type="checkbox" id="aggrement" required />
                <label className="form-check-label" htmlFor="aggrement">
                Creating an account means you’re okay with our <Link to='/'>Terms of Service, Privacy Policy.</Link> 
                </label>
            </div>
            <div className="form-group col-sm-6 col-md-4 ml-auto mr-auto">
                <button type="submit" className="btn btn-primary btn-block">Create an Account</button>                
            </div>            
            <div className="col-md-5 ml-auto mr-auto text-center">
            <p>Already Have an Account ? <Link to='/login' >Login</Link></p>
            </div>
        </form>
    )
}

export default RegisterForm