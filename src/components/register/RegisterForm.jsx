import { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link , useHistory } from 'react-router-dom'
import { Modal, Spinner, InputGroup, FormControl , Form } from 'react-bootstrap'
import { MdAccountCircle, MdLock, MdLockOutline } from 'react-icons/md'
import { registerUserAction , closeErrorMessageAction } from '../../redux/actions/auth.action'
import { useCallback } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const RegisterForm = () => {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const history = useHistory();

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false)
        dispatch(closeErrorMessageAction())
    };
    const handleShowModal = () => setShowModal(true);
    const redirectVerifikasiAkun = useCallback(() => {
        if (auth.succesRegister) {
            history.push('/verifikasi-akun')
        }
        if (auth.errMessage) {
            handleShowModal()
        }
    }, [history,auth ])
    useEffect(() => {
        redirectVerifikasiAkun()
    }, [auth.succesRegister, auth.errMessage, redirectVerifikasiAkun ])

    const [user, setUser] = useState({
        username: '',
        password: '',
        confirm_password : '',
        token: ""
    });
    const isValidPassword = () => (
        user.password === user.confirm_password && user.password !== '' && user.confirm_password !== ''
    )
    
    const isDisabled = user.username && isValidPassword() && user.token ? false : true;

    const onChangeState = (name) => (e) => {        
        setUser(Object.assign({}, user, { [name]: e.target.value }))
    }

    
    const onSubmit = (e) => {
        console.log(user);
        e.preventDefault();
        dispatch(registerUserAction({ email : user.username , password : user.password, recaptcha: user.token }))
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
                    <h6>Kesalahan Masuk</h6>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{auth.errMessage}</Modal.Body>
        </Modal>
    )

    return (
        <Form noValidate className="p-3 p-lg-5 text-left border" onSubmit={ onSubmit } >
            <h2 className="text-center mb-4 mb-lg-5">Daftar akun baru</h2>
            <div className="form-group">
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text className='border-0'>
                            <MdAccountCircle />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        className='py-4'
                        required
                        onChange={onChangeState('username')}
                        value={user.username}                        
                        placeholder="Email" />
                </InputGroup>
            </div>
            <div className="form-group">
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text className='border-0' >
                            <MdLock />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        type='password'
                        className='py-4'
                        required
                        onChange={onChangeState('password')}
                        value={user.password}
                        isInvalid={ user.password !== user.confirm_password }
                        isValid={ isValidPassword() }
                        placeholder="Password" />
                </InputGroup>
            </div>
            <div className="form-group">
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text className='border-0' >
                            <MdLockOutline />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        type='password'
                        className='py-4'
                        required
                        onChange={onChangeState('confirm_password')}
                        value={user.confirm_password}
                        isInvalid={ user.password !== user.confirm_password }
                        isValid={ isValidPassword() }
                        placeholder="Password" />
                </InputGroup>
            </div>
            <ReCAPTCHA sitekey={process.env.REACT_APP_PUBLIC_TOKEN} onChange={token => setUser(prevState => ({...prevState, token}))} />
            {/* <div className="form-group form-check">
                <small >
                    <input className="form-check-input" type="checkbox" id="aggrement" required />
                    <label className="form-check-label text-dark" htmlFor="aggrement">
                        Membuat akun berarti Anda setuju dengan <Link to='/'>Persyaratan layanan, kebijakan privasi kami.</Link>
                    </label>
                </small>                
            </div> */}
            <hr />
            <div className="form-group ">
                <button type="submit" className="btn btn-primary btn-block" disabled={isDisabled}>
                    { auth.isLoading ? renderLoading() : 'Register' } 
                </button>
            </div>
            <div className="ml-auto mr-auto text-center">

                <small >Sudah memiliki akun ? <Link to='/login' >Masuk</Link></small>
            </div>
            {renderModal()}
        </Form>
    )
}

export default RegisterForm