import {Link, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import { EmailErrorMessageAction, forgetPasswordAction } from '../../redux/actions/auth.action'

const ForgetForm = () => {
    const auth=useSelector(state=>state.auth)
    const dispatch= useDispatch()
    const history=useHistory();
    const [showModal,setShowModal]=useState(false);
    const handleEmailErrorModal=()=>{
        setShowModal(false)
        dispatch(EmailErrorMessageAction())
    };
    const handleShowModal=()=>setShowModal(true);


    useEffect(()=>{
        if(auth.token){
           history.push('/sukses-reset-password')
        }
        if(auth.errMessage){
            handleShowModal()
        }
    },[auth.token,auth.errMessage])

    const[user,setUser]=useState({
        email:'',
        password:''
    })

    const onChangeState=(name)=>(e)=>{
        setUser(Object.assign({},user,{[name]:e.target.value}) )
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        dispatch(
            forgetPasswordAction(user)
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
            <h2 className="text-center mb-3 mb-lg-5">Ubah Kata Sandi</h2>
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
            <div className="form-group text-left mb-lg-5 mb-5">
                <label htmlFor="password" className="col-md-6">Password</label>
                <input type="password"
                    className="form-control"
                    id="password"
                    onChange={onChangeState('password')}
                    value={user.password}
                    placeholder='password baru'
                />
            </div>
            <div className="form-group col-sm-6 col-md-4 ml-auto mr-auto">
                <button type="submit" className="btn btn-primary btn-block" onSubmit={onSubmit}>
                    {auth.isLoading?renderLoading():'Lanjut'}
                </button>
            </div>          
        </form>  
        {renderModal()}   
    </>
    )
}

export default ForgetForm