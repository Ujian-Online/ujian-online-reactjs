import {Link} from 'react-router-dom'

const ForgetForm = () => {
    return (<>
        <form className="p-lg-5">
            <h2 className="text-center mb-3 mb-lg-5">Lupa Kata Sandi</h2>
            <p className="text-left xs-5 mb-lg-5 mb-5">
                Masukkan email yang terdaftar. Kami akan mengirimkan kode verifikasi untuk atur ulang kata sandi.
            </p>
            <div className="form-group text-left mb-lg-5 mb-5">
                <label htmlFor="username" className="col-md-6">Email</label>
                <input type="email"
                    className="form-control"
                    id="email"
                />
            </div>
            <div className="form-group col-sm-6 col-md-4 ml-auto mr-auto">
                <button type="submit" className="btn btn-primary btn-block">
                    Lanjut
                </button>
            </div>
            <div className="col-md-5 ml-auto mr-auto text-center">
                <p>Belum punya akun ? <Link to='/registrasi'>Daftar</Link></p>
            </div>            
        </form>     
    </>
    )
}

export default ForgetForm