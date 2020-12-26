const Finish = () => {
    return (
    <div className={`container-fluid`}  >
        <div className='row h-100'>
            <div className="container-fluid  bg-white col-md-12 col-xs-6 mb-5 mt-4">
                <div className="col-md-12 text-center ml-auto mr-auto mb-3 mt-3">
                    <img src='/assets/img/finish.png' alt='logo' />
                    <div className="col-md-6 text-center ml-auto mr-auto">
                        <h1 className="mb-lg-5">Yeay!Finish</h1>
                    <p>
                        Selamat Anda terdaftar sebagai Assesi untuk mengikuti uji kompetensi Selanjutnya Anda akan input data, gunakan tombol dibawah ini. Salam sukses !
                    </p>
                    <div className="form-group col-sm-6 col-md-4 ml-auto mr-auto mt-5">
                        <button type="submit" className="btn btn-primary btn-block">
                            Input data
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Finish