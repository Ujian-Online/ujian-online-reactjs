import { Card } from "react-bootstrap"

const UploadForm = () => {
    return (<>
    <div className="col-md-3 ml-auto mr-auto mt-5 mb-3">
    <Card style={{width:'18rem'}} className="mr-auto ml-auto">
        <table className="table table-borderless">
            <Card.Body>Ringkasan Biaya</Card.Body>
            <tbody>
                <Card.Body>
            <tr>
                <th><Card.Text>Biaya Sertifikat</Card.Text></th>
                <th><Card.Text>Rp5000</Card.Text></th>
            </tr>
            <tr>
                <th><Card.Text>Biaya Training</Card.Text></th>
                <th><Card.Text>Rp5000</Card.Text></th>
            </tr>
            <hr/>
            <tr>
                <th><Card.Text>Total Biaya</Card.Text></th>
                <th><Card.Text>Rp10000</Card.Text></th>
            </tr>
            </Card.Body>
            </tbody>
        </table>
        
    </Card>
    </div>
        <form className="p-lg-5">
        <div className="form-group col-sm-6 col-md-4 ml-auto mr-auto">
            </div>     
        <div className="form-group">
            <label htmlFor="BrowserFile" className="col-md-6">
                Upload Bukti Pembayaran
            </label>
            <div className="input-group mb-2">
                <input type="file" placeholder="Browse File"/>
            </div>
        </div>
            <div className="form-group">
                <label htmlFor="asalBank" className="col-md-6">Asal Bank</label>
                <input type="text"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="asalBank" className="col-md-6">Bank Tujuan</label>
                <select className="custom-select" id="SelectBankTujuan">
                    <option selected>Choose...</option>
                    <option value="Mandiri">Mandiri</option>
                    <option value="BNI">BNI</option>
                    <option value="BRI">BRI</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="namaPengirim" className="col-sm-7  col-lg-8 col-xs-5">
                    Nama Pengirim
                </label>
                <input type="password"
                    className="form-control"
                    id="password"
                />
            </div>           
        </form>
    </>
    )
}

export default UploadForm