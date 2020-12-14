import { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [ isDisplayMenu , toggleMenu ] = useState(false)

    return (
        <nav className="navbar row navbar-expand-lg navbar-light bg-white">
            <Link className="navbar-brand" to="/">Navbar w/ text</Link>
            <button className="navbar-toggler" type="button" onClick={() => toggleMenu(!isDisplayMenu) }  >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${ isDisplayMenu ? '' : 'collapse'} navbar-collapse`} >
                <ul className="navbar-nav mr-auto">                            
                    <li className="nav-item active">
                        <Link className="nav-link" to='/'>
                            Skema Sertifikasi <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/pemegang-sertifikat' >Data Pemegang Serifikat</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/petunjuk' >Petunjuk</Link>
                    </li>
                </ul>
                <div>
                <Link className="btn btn-success mr-1" to='/login' >Login</Link>
                <Link className="btn btn-light" to='/registrasi' >Registrasi</Link>
                </div>
            </div>
        </nav>
    )

}
export default Navbar