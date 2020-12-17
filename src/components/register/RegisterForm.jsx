import { Link } from 'react-router-dom'

const RegisterForm = () => {
    return (
        <form className="p-lg-5">
            <h2 className="text-center mb-3 mb-lg-5">Create an Account</h2>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="fullName">Fullname</label>
                    <input type="text" className="form-control" id="fulName" />
                </div>
                <div className="form-group col-md-6">
                    <label for="username">Username</label>
                    <input type="text" className="form-control" id="username" />
                </div>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" />
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" />
            </div>
            <div class="form-group form-check">
                <input class="form-check-input" type="checkbox" id="aggrement" required />
                <label class="form-check-label" for="aggrement">
                Creating an account means you’re okay with our <Link to='/'>Terms of Service, Privacy Policy.</Link> 
                </label>
            </div>
            <div className="form-group col-sm-6 col-md-4 ml-auto mr-auto">
                <button type="submit" class="btn btn-primary btn-block">Create an Account</button>                
            </div>            
            <div className="col-md-5 ml-auto mr-auto text-center">
            <p>Already Have an Account ? <Link to='/login' >Login</Link></p>
            </div>
        </form>
    )
}

export default RegisterForm