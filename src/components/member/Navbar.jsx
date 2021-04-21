import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileAction , logoutAction } from '../../redux/actions/auth.action'
import { MdAccountCircle , MdPowerSettingsNew } from 'react-icons/md'

const Navbar = () => {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const history = useHistory()
    const { location : { pathname } } = history
    const [isDisplayMenu, toggleMenu] = useState(false)
    const [isDisplayUser, toggleUser] = useState(false)
    const renderActiveMenu = (pathCurrent) => pathname.includes(pathCurrent) ? 'active cursor font-weight-bold' : ''

    useEffect(() => {
        !auth.token && history.push('/login')
        auth.token && !auth.user && dispatch(getProfileAction(auth.token))

        if(auth.needVerify){
            history.push('/email/verification')
        }
    }, [auth.needVerify,history,auth.token,dispatch,auth.user])

    
    useEffect(() => {
        if(auth.needVerify){
            history.push('/email/verification')
        }
    }, [ auth.needVerify,history] )

    const logout = () => {
        dispatch(logoutAction())
        history.push('/')
    }

    const renderRightMenu = () => {
        if (auth.user) {
            return (
                <div className="btn-group">
                    <button type="button" 
                            className="btn btn-default dropdown-toggle text-white " 
                            onClick={() => toggleUser(!isDisplayUser) }
                            onBlur={ () => setTimeout(() => toggleUser(false) , 200 ) } >
                        <MdAccountCircle style={{ fontSize : '25px' }} /> {auth.user.email}
                    </button>
                    <div className={`dropdown-menu dropdown-menu-right ${ isDisplayUser ? 'show' : '' }`}>
                        <button className="dropdown-item " type="button" onClick={logout} >
                            <MdPowerSettingsNew /> Logout
                        </button>
                    </div>
                </div>)
        } else {
            return ('')
        }

    }

    return (
        <nav className="navbar row navbar-expand-lg navbar-light px-lg-5 shadow-sm " style={{ background: '#28a745' }} >
            <Link className="navbar-brand" to="/member/ujian-baru">
                <img src='/assets/img/bg-logo.png' alt='logo' width='50px' className='rounded-circle bg-white ' />
            </Link>
            <button className="navbar-toggler" type="button" onClick={() => toggleMenu(!isDisplayMenu)}  >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isDisplayMenu ? '' : 'collapse'} navbar-collapse`} >
                <ul className="navbar-nav mr-auto">
                    <li className='nav-item ' >
                        <Link className={`nav-link ${renderActiveMenu('ujian-baru')} text-white `} to='/member/ujian-baru'>
                           Daftar Sertifikasi
                        </Link>
                    </li>
                    <li className='nav-item '>
                        <Link className={`nav-link ${renderActiveMenu('apl-01')} text-white `} to='/member/apl-01' >
                            Isi APL 01
                        </Link>
                    </li>
                    <li className='nav-item '>
                        <Link className={`nav-link  ${ renderActiveMenu('ujian-saya')} text-white `} to='/member/ujian-saya' >
                            Ujian Saya
                        </Link>
                    </li>
                    <li className='nav-item '>
                        <Link className={`nav-link ${renderActiveMenu('menunggu-pembayaran')} text-white `} to='/member/menunggu-pembayaran' >
                            Data Pembayaran
                        </Link>
                    </li>
                </ul>
                {renderRightMenu()}
            </div>
        </nav>
    )

}
export default Navbar