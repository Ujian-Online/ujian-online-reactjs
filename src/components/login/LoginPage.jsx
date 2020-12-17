import './Login.css'

const LoginPage =() => {

    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center ">
            <div className="position-relative  col-md-7 col-xs-6 col-sm-6 mt-15">
                <div className="blank">
                    <img src="/assets/img/logo.png" className="logo" alt="logo.png"/>
                </div>
            </div>
            <div className="col-md-5 col-xs-6 col-sm-6 mb-10">
                 <form className="frmLogin">
                     <div className="Login">
                        <h5 className="text-align-center mb-3 ml-5 mt-10">Login Account</h5>
                     </div>
                     <div className="frmGrouping">
                        <div className="form-group">
                            <label htmlFor="Inputusername">Username / Email</label>
                            <input type="text" className="form-control inputUsername" id="InputUsername" aria-describedby="usernameHelp" placeholder="Masukan Username / email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <a href="#" className="forget">Forget Password?</a>
                            <input type="password" className="form-control inputPassword" id="InputPassword" placeholder="Masukan Password"/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="CheckRemember"/>
                            <label className="form-check-label" htmlFor="CheckRemember">Remember me</label>
                        </div>
                     </div>
 
                        <button type="submit" className="btn btn-primary btn-submit"><div className="btnText">Sign in</div></button>
                    <div className="daftar">
                        <h6>Belum punya akun ? <a href="#" className="daftar">daftar</a></h6>
                    </div>
                    
                 </form>
            </div>
            </div>
            
        </div>
    )
}

export default LoginPage