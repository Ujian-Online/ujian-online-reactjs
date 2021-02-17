import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserAction , closeErrorMessageAction  } from '../../redux/actions/auth.action'
import { Link, useHistory } from 'react-router-dom'
import { Modal, Spinner, InputGroup, FormControl } from 'react-bootstrap';
import { MdAccountCircle , MdKeyboardHide } from 'react-icons/md'

const LoginForm = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false)
        dispatch(closeErrorMessageAction())
    };
    const handleShowModal = () => setShowModal(true);

    useEffect(() => {
        if (auth.token) {
            history.push('/member/ujian-baru')
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
         <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    )

    const renderModal = () => (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h6>Kesalahan masuk</h6>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{auth.errMessage}</Modal.Body>
        </Modal>
    )
    
    return (<>

        <form className="p-4 p-lg-5 border" onSubmit={onSubmit} >
            <h2 className="text-center mb-4 mb-lg-5">Akun login</h2>
            <div className="form-group">
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text className='border-0'>
                            <MdAccountCircle />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                    className='py-4'
                    onChange={onChangeState('username')}
                    value={user.username}
                    placeholder="Masukan email" />
                </InputGroup>
            </div>
            <div className="form-group mt-4">
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text className='border-0' >
                            <MdKeyboardHide />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                    type='password'
                    className='py-4' 
                    onChange={onChangeState('password')}
                    value={user.password}
                    placeholder="Masukan Kata Sandi" />
                </InputGroup>
            </div>
            <div className='d-flex justify-content-between' >
                <small>
                    <Link to='/registrasi' className='ml-xs-5'>Daftar Akun baru</Link>
                </small>
                <small>
                    <Link to='/reset-password' className='ml-xs-5'>Lupa Kata Sandi ?</Link>
                </small>
            </div>
            <hr />
            <div className="form-group mt-3">
                <button type="submit" className="btn btn-primary btn-block " onSubmit={onSubmit}>
                    { auth.isLoading ? renderLoading() : 'Login' }
                </button>
            </div>
        </form>
        {renderModal()}
    </>
    )
}

export default LoginForm