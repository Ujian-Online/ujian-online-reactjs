import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileAction , logoutAction } from '../../redux/actions/auth.action'
import { MdAccountCircle , MdPerson , MdPowerSettingsNew } from 'react-icons/md'

const Navbar = () => {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const { location : { pathname } } = useHistory()
    const [isDisplayMenu, toggleMenu] = useState(false)
    const [isDisplayUser, toggleUser] = useState(false)
    const renderActiveMenu = (pathCurrent) => pathCurrent === pathname ? 'active cursor text-primary' : ''

    useEffect(() => {
        auth.token && dispatch(getProfileAction(auth.token))
    }, [])

    const logout = () => dispatch(logoutAction())    

    const renderRightMenu = () => {
        if (auth.user) {
            return (
                <div className="btn-group">
                    <button type="button" 
                            className="btn btn-default dropdown-toggle" 
                            onClick={() => toggleUser(!isDisplayUser) }
                            onBlur={ () => setTimeout(() => toggleUser(false) , 200 ) } >
                        <MdAccountCircle style={{ fontSize : '25px' }} /> {auth.user.email}
                    </button>
                    <div className={`dropdown-menu dropdown-menu-right ${ isDisplayUser ? 'show' : '' }`}>
                        <Link to='/member/ujian-baru' className="dropdown-item" >
                            <MdPerson /> Member
                        </Link>
                        <button className="dropdown-item" type="button" onClick={ logout } >
                            <MdPowerSettingsNew /> Logout
                        </button>
                    </div>
                </div>)
        } else {
            return (<div>
                <Link className="btn btn-success mr-1" to='/login' >Login</Link>
                <Link className="btn btn-light" to='/registrasi' >Registrasi</Link>
            </div>)
        }

    }

    return (
        <nav className="navbar row navbar-expand-lg navbar-light bg-white px-lg-5 shadow-sm ">
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
                {renderRightMenu()}
            </div>
        </nav>
    )

}
export default Navbar