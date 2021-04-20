import {Link, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import { EmailErrorMessageAction, resetPasswordAction } from '../../redux/actions/auth.action'
import { useCallback } from 'react'

const ResetForm = () => {
    const auth=useSelector(state=>state.auth)
    const dispatch= useDispatch()
    const history=useHistory();
    const [showModal,setShowModal]=useState(false);
    const handleEmailErrorModal=()=>{
        setShowModal(false)
        dispatch(EmailErrorMessageAction())
    };
    const handleShowModal=()=>setShowModal(true);

    const redirectPasswordSuccess = useCallback(() => {
        if(auth.resetPasswordSuccess){
            history.push('/sukses-reset-password')
         }
         
         if(auth.errMessage){
             handleShowModal()
         }
    }, [history , auth ])

    useEffect(()=>{
        redirectPasswordSuccess()
    },[auth.resetPasswordSuccess,auth.errMessage, redirectPasswordSuccess ])

    const[user,setUser]=useState({
        email:''
    })

    const onChangeState=(name)=>(e)=>{
        setUser(Object.assign({},user,{[name]:e.target.value}) )
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        dispatch(
            resetPasswordAction({email:user.email})
        )
    }

    const renderLoading=()=>(
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    )

    const renderModal=()=>(
        <Modal show={showModal} onHide={handleEmailErrorModal}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h6>Kesalahan Masuk</h6>
                </Modal.Title>
                <Modal.Body>{auth.errMessage}</Modal.Body>
            </Modal.Header>
        </Modal>
    )

    return (<>
        <form className="p-lg-5" onSubmit={onSubmit}>
            <h2 className="text-center mb-3 mb-lg-5">Lupa Kata Sandi</h2>
            <p className="text-left xs-5 mb-lg-5 mb-5">
                Masukkan email yang terdaftar. Kami akan mengirimkan kode verifikasi untuk atur ulang kata sandi.
            </p>
            <div className="form-group text-left mb-lg-5 mb-5">
                <label htmlFor="username" className="col-md-6">Email</label>
                <input type="email"
                    className="form-control"
                    id="email"
                    onChange={onChangeState('email')}
                    value={user.email}
                    placeholder='Email'
                />
            </div>
            <div className="form-group col-sm-6 col-md-4 ml-auto mr-auto">
                <button type="submit" className="btn btn-primary btn-block" onSubmit={onSubmit}>
                    {auth.isLoading?renderLoading():'Lanjut'}
                </button>
            </div>
            <div className="col-md-5 ml-auto mr-auto text-center">
                <p>Belum punya akun ? <Link to='/registrasi'>Daftar</Link></p>
            </div>            
        </form>  
        {renderModal()}   
    </>
    )
}

export default ResetForm