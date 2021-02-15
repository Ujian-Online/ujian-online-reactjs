
const UploadForm = ({ order = {} }) => {
    return (<>
        <form className="p-lg-5 text-left mr-auto ml-auto">
            <div className="form-group">
                <label className="col-md-3 col-sm-3">Nama</label>
                <label className="col-md-2 col-sm-2">:</label>
                <label htmlFor='Nama'>{ order.user.email }</label>
            </div>   
            <div className="form-group">
                <label className="col-md-3 col-sm-3">Sertifikasi</label>
                <label className="col-md-2 col-sm-2">:</label>
                <label htmlFor='Sertifikasi'>{ order.sertifikasi.title }</label>
            </div>
            <div className="form-group">
                <label className="col-md-3 col-sm-3">TUK</label>
                <label className="col-md-2 col-sm-2">:</label>
                <label htmlFor='TUK'>{ order.tuk.title }</label>
            </div>
            <div className="form-group">
                <label className="col-md-3 col-sm-3">Training</label>
                <label className="col-md-2 col-sm-2">:</label>
                <label htmlFor='Training'>Training</label>
            </div>
            <div className="form-group">
                <label className="col-md-3 col-sm-3">Sertifikasi Ulang</label>
                <label className="col-md-2 col-sm-2">:</label>
                <label htmlFor='SertifikasiUlang'>{ order.tipe_sertifikasi }</label>
            </div>  
            <div className="form-group">
                <label className="col-md-3 col-sm-3">Nomor sertifikat</label>
                <label className="col-md-2 col-sm-2">:</label>
                <label htmlFor='Nama'>{ order.asesi_id  }</label>
            </div>       
        </form>
        <h6 className="ml-lg-5">Transfer Melalui :</h6>
        <table className="ml-lg-5">
            <tr>
                <th><img src='/assets/img/mandiri.png' /></th>
                <th className="ml-lg-5">
                <h6>Bank Mandiri</h6>
                <h6>LSP MERCUBUANA</h6>
                <h6>2506 1845</h6>
                </th>
            </tr>
            <br />
            <tr>
                <th><img src='/assets/img/BCA.png' /></th>
                <th className="ml-lg-5">
                <h6>Bank Central Asia</h6>
                <h6>LSP MERCUBUANA</h6>
                <h6>2355 1903</h6>
                </th>
            </tr>
        </table>
        
    </>
    )
}

export default UploadForm