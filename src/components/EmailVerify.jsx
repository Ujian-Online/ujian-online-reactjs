import { useDispatch , useSelector } from 'react-redux'
import { resendAction , verifikasiAction } from '../redux/actions/auth.action'

import { useLocation , useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const EmailVerify = () => {
    const history = useHistory()
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const query = new URLSearchParams(useLocation().search);   


    useEffect(() => {
        if(query.get('token')) {
            dispatch(verifikasiAction(query.get('token')))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps          
    }, [])

    useEffect(() => {
        if(!auth.needVerify){
            history.push('/sukses-register')
        }
    }, [ auth.needVerify,history])

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(resendAction(auth.token))
    }

    return (
        <div className=' d-flex justify-content-center align-items-center ' style={{ height: '100vh' }}  >
            <form className='p-4 border ' onSubmit={ onSubmit }  >
                <input type='email' className='form-control' placeholder='Enter email verification ' />
                <button className='btn btn-primary mt-2 btn-block' type='submit' >RESEND</button>
            </form>
        </div>
    )
}

export default EmailVerify
