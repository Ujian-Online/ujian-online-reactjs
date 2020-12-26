const SuccessInvoice = () => {
    return (
    <div className={`container-fluid`}  >
        <div className='row h-100'>
            <div className="container-fluid  bg-white col-md-12 col-xs-6 mb-5 mt-4">
                <div className="col-md-12 text-center ml-auto mr-auto mb-3 mt-3">
                    <img src='/assets/img/invoice.png' alt='logo' />
                    <div className="col-md-6 text-center ml-auto mr-auto">
                        <h1 className="mb-lg-5">Upload Bukti Pembayaran berhasil!</h1>
                    <p>
                        Pembayaran Anda sedang dilakukan verifikasi oleh Admin kami, silahkan tunggu, dan kami akan memberitahu Anda melalui pesan email. 
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default SuccessInvoice