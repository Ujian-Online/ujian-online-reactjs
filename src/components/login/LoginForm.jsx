import { Link } from 'react-router-dom'


const LoginForm = () => {
    return (
        <form className="p-lg-5">
            <h2 className="text-center mb-3 mb-lg-5">Login Account</h2>
            <div class="form-group">
                <label for="username" className="col-md-6">Username / Email</label>
                <input type="text" class="form-control" id="username" />
            </div>
            <div class="form-group">
                <label for="password" className="col-sm-7  col-lg-8 col-xs-5">
                    Password
                </label>
                <Link to='/forget-Password' className='ml-xs-5'>Forget Password ?</Link>
                <input type="password" class="form-control" id="password" />
            </div>
            <div class="form-group form-check">
                <input class="form-check-input" type="checkbox" id="aggrement" required />
                <label class="form-check-label" for="aggrement">
                    Ingat saya 
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