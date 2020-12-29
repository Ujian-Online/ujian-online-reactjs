import { useState } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'

const Navbar = () => {

    const { location : { pathname } } = useHistory()
    const [isDisplayMenu, toggleMenu] = useState(false)
    const renderActiveMenu = (pathCurrent) => pathCurrent === pathname ? 'active cursor text-primary' : ''

    return (
        <nav className="navbar row navbar-expand-lg navbar-light bg-white px-lg-5 ">
            <Link className="navbar-brand" to="/">
                <img src='/assets/img/bg-logo.png' alt='logo' width='50px' />
            </Link>
            <button className="navbar-toggler" type="button" onClick={() => toggleMenu(!isDisplayMenu)}  >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isDisplayMenu ? '' : 'collapse'} navbar-collapse`} >
                <ul className="navbar-nav mr-auto">
                    <li className='nav-item' >
                        <Link className={`nav-link ${renderActiveMenu('/')} `} to='/'>
                            Skema Sertifikasi 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className={`nav-link ${renderActiveMenu('/pemegang-sertifikat')}`} to='/pemegang-sertifikat' >Data Pemegang Serifikat</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className={`nav-link ${renderActiveMenu('/petunjuk')}`} to='/petunjuk' >Petunjuk</Link>
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