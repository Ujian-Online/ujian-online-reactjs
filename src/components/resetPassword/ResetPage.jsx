import { Link } from 'react-router-dom'
import ResetForm from './ResetForm'

const ResetPage = () => {

    return (
    <div className={`container-fluid`}  >
        <div className='row h-100'>
            <div className="container-fluid  bg-white col-md-12 col-xs-6 mb-5 mt-4">
            <Link to="/">
                <img src='/assets/img/bg-logo.png' alt='logo' width='50px' />
            </Link>
                <div className="col-md-12 text-center ml-auto mr-auto mb-3 mt-3">
                    <div className="col-md-6 col-xs-6 col-sm-6 text-center ml-auto mr-auto border rounded-left rounded-right ">
                        <ResetForm />
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default ResetPage