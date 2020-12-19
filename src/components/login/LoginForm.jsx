import { Link } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
   
})

const LoginForm = () => {
    const classes={useStyles}
    return (
        <form className="p-lg-5">
            <h2 className="text-center mb-3 mb-lg-5">Login Account</h2>
            <div className="form-group">
                <label htmlFor="username">Username / Email</label>
                <input type="username" className="form-control" id="username" />
            </div>
            <div className="form-group">
                <div className="d-flex">
                <div className="justify-content-start">
                <label className="">Password</label>
                </div>
                <div className="justify-content-end ml-auto">
                <Link to='/forget-Password' className="justify-content-end">Forget Password ?</Link>
                </div>
                </div>
                
                <input type="password" className="form-control" id="password" />
            </div>
            <div className="form-group form-check">
                <input className="form-check-input" type="checkbox" id="aggrement" />
                <label className="form-check-label">
                    Remember me
                </label>
            </div>
            
            
            <div className="form-group col-sm-6 col-md-4 ml-auto mr-auto">
                <button type="submit" class="btn btn-primary btn-block">Sign In</button>                
            </div>            
            <div className="col-md-5 ml-auto mr-auto text-center">
            <p>Belum memiliki akun ? <Link to='/registrasi'>Daftar</Link></p>
            </div>
        </form>
    )
}

export default LoginForm