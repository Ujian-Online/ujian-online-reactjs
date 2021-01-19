import { Card } from "react-bootstrap"

const UploadForm = () => {
    return (<>
        <form className="p-lg-5 text-left mr-auto ml-auto">
            <div className="form-group">
                <label className="col-md-3 col-sm-3">Nama</label>
                <label className="col-md-2 col-sm-2">:</label>
                <label htmlFor='Nama'>Akbar Bintang</label>
            </div>   
            <div className="form-group">
                <label className="col-md-3 col-sm-3">Sertifikasi</label>
                <label className="col-md-2 col-sm-2">:</label>
                <label htmlFor='Sertifikasi'>Supervisor SDM</label>
            </div>
            <div className="form-group">
                <label className="col-md-3 col-sm-3">TUK</label>
                <label className="col-md-2 col-sm-2">:</label>
                <label htmlFor='TUK'>LSP MERCUBUANA</label>
            </div>
            <div className="form-group">
                <label className="col-md-3 col-sm-3">Training</label>
                <label className="col-md-2 col-sm-2">:</label>
                <label htmlFor='Training'>Training</label>
            </div>
            <div className="form-group">
                <label className="col-md-3 col-sm-3">Sertifikasi Ulang</label>
                <label className="col-md-2 col-sm-2">:</label>
                <label htmlFor='SertifikasiUlang'>Baru</label>
            </div>  
            <div className="form-group">
                <label className="col-md-3 col-sm-3">Nomor sertifikat</label>
                <label className="col-md-2 col-sm-2">:</label>
                <label htmlFor='Nama'>A123456789</label>
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