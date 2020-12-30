import { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link , useHistory } from 'react-router-dom'
import { Modal, Spinner, InputGroup, FormControl , Form } from 'react-bootstrap'
import { MdAccountCircle, MdLock, MdLockOutline } from 'react-icons/md'
import { registerUserAction , closeErrorMessageAction } from '../../redux/actions/auth.action'

const RegisterForm = () => {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false)
        dispatch(closeErrorMessageAction())
    };
    const handleShowModal = () => setShowModal(true);

    useEffect(() => {
        if (auth.token) {
            history.push('/sukses-register')
        }
        if (auth.errMessage) {
            handleShowModal()
        }
    }, [auth.token, auth.errMessage])

    const [user, setUser] = useState({
        username: '',
        password: '',
        confirm_password : ''
    })    

    const onChangeState = (name) => (e) => {        
        setUser(Object.assign({}, user, { [name]: e.target.value }))
    }

    const isValidPassword = () => (
        user.password === user.confirm_password && user.password !== '' && user.confirm_password !== ''
    )
    
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUserAction({ email : user.username , password : user.password }))
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
                    <h6>Error Login</h6>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{auth.errMessage}</Modal.Body>
        </Modal>
    )

    return (
<<<<<<< HEAD
        <>
        <Form noValidate className="p-3 p-lg-5 text-left border" onSubmit={ onSubmit } >
            <h2 className="text-center mb-4 mb-lg-5">Create an Account</h2>
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
                        placeholder="Enter Email" />
                </InputGroup>
            <div className="form-group">
            </div>
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
                        placeholder="Enter Password" />
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
                        placeholder="Enter Confirm Password" />
                </InputGroup>
            </div>
            <div className="form-group form-check">
                <small >
                    <input className="form-check-input" type="checkbox" id="aggrement" required />
                    <label className="form-check-label text-dark" htmlFor="aggrement">
                        Creating an account means you’re okay with our <Link to='/'>Terms of Service, Privacy Policy.</Link>
                    </label>
                </small>                
            </div>
            <hr />
            <div className="form-group ">
                <button type="submit" className="btn btn-primary btn-block">
                    { auth.isLoading ? renderLoading() : 'Register' } 
                </button>
            </div>
            <div className="ml-auto mr-auto text-center">
                <small >Already Have an Account ? <Link to='/login' >Login</Link></small>
=======
        <form className="p-lg-5 text-left">
            <h2 className="text-center mb-3 mb-lg-5">Membuat sebuah akun</h2>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
                <label for="password">Kata Sandi</label>
                <input type="password" class="form-control" id="password" />
            </div>
            <div class="form-group">
                <label for="confirmPassword">Konfirmasi kata sandi</label>
                <input type="password" class="form-control" id="confirmPassword" />
            </div>
            {/* <div class="form-group form-check">
                <input class="form-check-input" type="checkbox" id="aggrement" required />
                <label class="form-check-label" for="aggrement">
                Creating an account means you’re okay with our <Link to='/'>Terms of Service, Privacy Policy.</Link> 
                </label>
            </div> */}
            <div className="form-group col-sm-6 col-md-4 ml-auto mr-auto">
                <button type="submit" class="btn btn-primary btn-block">Membuat sebuah akun</button>                
            </div>            
            <div className="col-md-5 ml-auto mr-auto text-center">
            <p>Sudah memiliki akun ? <Link to='/login' >Masuk</Link></p>
>>>>>>> ft-ui-register
            </div>
        </Form>
        { renderModal() }
        </>
    )
}

export default RegisterForm