import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserAction } from '../../redux/actions/auth.action'
import { Link, useHistory } from 'react-router-dom'
import { Modal, Spinner } from 'react-bootstrap';

const LoginForm = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    useEffect(() => {
        if (auth.token) {
            history.push('/')
        }
        if (auth.errMessage) {
            handleShowModal()
        }
    }, [auth.token, auth.errMessage])



    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const onChangeState = (name) => (e) => {
        setUser(Object.assign({}, user, { [name]: e.target.value }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUserAction(user))
    }

    const renderLoading = () => (
        auth.isLoading ? <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
        </Spinner> : ''
    )

    const renderModal = () => (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h6>Error Login</h6>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{auth.errMessage}</Modal.Body>
        </Modal>
    )

    return (<>
        <form className="p-lg-5" onSubmit={onSubmit} >
            <h2 className="text-center mb-3 mb-lg-5">Login Account</h2>
            <div className="form-group">
                <label htmlFor="username" className="col-md-6">Username / Email</label>
                <input type="text"
                    className="form-control"
                    id="username"
                    onChange={onChangeState('username')}
                    value={user.username} />
            </div>
            <div className="form-group">
                <label htmlFor="password" className="col-sm-7  col-lg-8 col-xs-5">
                    Password
                </label>
                <Link to='/forget-Password' className='ml-xs-5'>Forget Password ?</Link>
                <input type="password"
                    className="form-control"
                    id="password"
                    onChange={onChangeState('password')}
                    value={user.password}
                />
            </div>
            <div className="form-group form-check">
                <input className="form-check-input" type="checkbox" id="aggrement" />
                <label className="form-check-label" htmlFor="aggrement">
                    Ingat saya
                </label>
            </div>            
            <div className="form-group col-sm-6 col-md-4 ml-auto mr-auto">
                <button type="submit" className="btn btn-primary btn-block" onSubmit={onSubmit}>
                {renderLoading()} Sign In
                </button>
            </div>
            <div className="col-md-5 ml-auto mr-auto text-center">
                <p>Belum memiliki akun ? <Link to='/registrasi'>Daftar</Link></p>
            </div>            
        </form>
        {renderModal()}        
    </>
    )
}

export default LoginForm