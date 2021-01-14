import { useState } from 'react';
import { createUseStyles } from 'react-jss'
import DatePicker from 'react-datepicker'
import { useHistory } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css'


const useStyles=createUseStyles({
    Pendaftar:{
        color:'gray'
    },
    Training:{
        color:'red'
    },
    customLabel:{
        color:'black'
    }
})
const DaftarUjianForm=()=>{
    const classes=useStyles()
    const [startDate, setStartDate] = useState(new Date())
    const [checked,setChecked]=useState(true);
    const history=useHistory()

   
const onChecked=()=>{
       return(<div>
<div className="form-group row">
    <label htmlForm="nomorSertifikasi" className="col-sm-2 col-form-label"><h6>Nomor Sertifikasi</h6></label>
    <div className="col-sm-10">
        <input type="text" className="form-control" id="nomorSertifikasi" placeholder="Nomor Sertifikasi" required/>
    </div>
</div>
<div className="form-group row">
    <label htmlForm="uploadSertifikatLama" className="col-sm-2 col-form-label"><h6>Upload Sertifikat lama</h6></label>
    <div className="col-sm-10">
        <div className="col-sm-5">
            <input type="file" className="form-control-file" id="uploadSertifikatLama"/>
        </div>
        <div className="col-sm-5 mt-3">
            <button type="button" className="btn btn-primary">Upload</button>
        </div>
    </div>
</div>
</div>)
   }

    return(
        <div>
<div className="form was-validated">
            <div className='text-center'>
                <h4>Detail Informasi</h4>
            </div>
            <div className="form-group row">
                <label htmlForm="Pendaftar" className="col-sm-2 col-form-label">Pendaftar</label>
                <div className="col-sm-10">
                <input type="text" readonly className="form-control" id="Pendaftar" value="Akbar Bintang Wicaksono" required/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlForm="inputSertifikasi" className="col-sm-2 col-form-label">sertifikasi</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputSertifikasi" placeholder="Sertifikasi" required/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlForm="PilihTuk" className="col-sm-2 col-form-label">Lokasi Uji Kompetensi</label>
                <div className="col-sm-10">
                    <div className="form-group">
                        <select className="custom-select" required>
                        <option value="">Pilih Lokasi TUK</option>
                        <option value="1">LSP Mercubuana</option>
                        <option value="2">LSP AMIKOM Jogja</option>
                        <option value="3">LSP Mikroskil</option>
                        </select>
                        <div className="invalid-feedback">Lokasi TUK tidak boleh Kosong</div>
                    </div>
                </div>
            </div>
            <div className="form-group row">
                <label htmlForm="PilihTraining" className="col-sm-2 col-form-label">Pemilihan Training</label>
                <div className="col-sm-10">
                    <div className="form-check form-check-inline">
                        <div className="custom-control custom-radio mb-3">
                            <input type="radio" className="custom-control-input" id="Training" name="radio-stacked"required/>
                            <label className={`custom-control-label ${classes.customLabel}`} htmlFor="Training"><h6 className={`${classes.customLabel}`}>Training</h6></label>
                            <div className='invalid-feedback'>Apakah anda ingin mengikuti training ?</div>
                            <div className={`valid-feedback ${classes.Training}`}>(Pemilihan training akan ada tambahan biaya training)</div>
                        </div>
                    </div>
                    <div className="form-check form-check-inline">
                        <div className="custom-control custom-radio mb-3">
                            <input type="radio" className="custom-control-input" id="PilihTidak" name="radio-stacked" required/>
                            <label className={`custom-control-label ${classes.customLabel}`} htmlFor="PilihTidak"><h6 className={`${classes.customLabel}`}>Tidak</h6></label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group row">
                    <label htmlForm="SertifikasiUlang" className="col-sm-2 col-form-label">
                        Sertifikasi Ulang
                    </label>
                    <div className="col-sm-10">
                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="SertifikasiUlang" checked={checked}
                            onChange={()=>setChecked(!checked)}
                            />
                            <label className="custom-control-label" htmlFor="SertifikasiUlang"><h6 className={`${classes.customLabel}`}>Ceklis jika perpanjangan sertifikasi sebelumnya</h6></label>
                            <div className="invalid-feedback">Apakah Anda Ingin memperpanjang Sertifikasi sebelumnya ?</div>
                            <div className={`valid-feedback ${classes.Training}`}>Silahkan upload Jobdesk, surat permohonan perpanjangan, surat pernyataan bahwa ybs masih bekerja dibidang SDM oleh atasan, dan upload sertifikat lama</div>
                        </div>
                    </div>
            </div>
            <div className="form-group row">
                <label htmlForm="nomorSertifikasi" className="col-sm-2 col-form-label">Nomor Sertifikasi</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="nomorSertifikasi" placeholder="Nomor Sertifikasi" required/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlForm="inputSertifikasi" className="col-sm-2 col-form-label">Tanggal sertifikasi</label>
                <div className="col-sm-10">
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlForm="uploadSertifikatLama" className="col-sm-2 col-form-label"><h6>Upload Sertifikat lama</h6></label>
                    <div className="col-sm-10">
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="form-control-file" id="uploadSertifikatLama"/>
                            {/* <label className="custom-file-label" htmlFor="uploadSertifikatLama"></label> */}
                        </div>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" id="uploadSertifikatLama">Upload</button>
                        </div>
                    </div>
                        {/* <div className="col-sm-4">
                            <input type="file" className="form-control-file" id="uploadSertifikatLama"/>
                        </div>
                        <div className="col-sm-1 mt-3">
                            <button type="button" className="btn btn-primary">Upload</button>
                        </div> */}
                    </div>
            </div>
            
        </div>
            <div className="col-md-12 mt-5 mb-5">
                <div className="form-group col-sm-4 col-md-4 ml-auto mr-auto">
                    <button type="submit" className="btn btn-primary btn-block">
                        Pesan Sekarang
                    </button>
                </div>
                <div className="form-group col-sm-6 col-md-4 mr-auto ml-auto">
                    <button type="submit" className="btn btn-light bg-gray btn-block" onClick={() => history.push('/')}>
                            Kembali
                    </button>
                </div>      
            </div>
        </div>
    )
}

export default DaftarUjianForm