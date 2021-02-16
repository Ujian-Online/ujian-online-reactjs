import DaftarUjianForm from './DaftarUjianForm'

const DaftarUjianPage = (props) => {
    return (
        <div className={`container-fluid `}>
            <div className='row h-100'>
                <div className='col-md-6 ml-auto mr-auto mt-5'>
                    <DaftarUjianForm {...props} />
                </div>
            </div>
        </div>


    )
}
export default DaftarUjianPage