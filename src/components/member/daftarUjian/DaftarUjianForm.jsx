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

    //deklarasi tanggal sertifikat
    const [stateForm, setStateForm] = useState({
        dateSertifikat: new Date(),
    });

    //Jika sertifikat diceklis true maka akan mengisi data sertifikat lama,  jika false maka akan lanjut
    const [checked,setChecked]=useState(true);

    //deklarasi untuk pindah page
    const history=useHistory()

    return (
        <div className='container my-4' >
            <div className='row'>
                <div className='col text-center' >
                    <h6>
                        Detail Informasi
                    </h6>
                </div>
            </div>
            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        Pendaftar
                    </label>
                </div>
                <div className='col-9' >
                <input type="text" readonly className="form-control" id="Pendaftar" value="Akbar Bintang Wicaksono"/>
                </div>
            </div>
            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        Sertifikasi
                    </label>
                </div>
                <div className='col-9' >
                    <input className='form-control bg-white' placeholder='Masukan skema sertifikasi' />
                </div>
            </div>
            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        Lokasi Uji Kompetensi
                    </label>
                </div>
                <div className='col-9' >
                    <select className='form-control bg-white  ' >
                        <option>Pilih Lokasi TUK</option>
                        <option>LSP Mercubuana</option>
                        <option>LSP Amikom Jogja</option>
                        <option>LSP Mikroskil</option>
                    </select>
                </div>
            </div>
           
            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        Pemilihan Training
                    </label>
                </div>
                <div className='col-9 d-flex flex-wrap ' >
                    <div className="form-check mr-2" >
                        <input className="form-check-input" type="radio" name="training" id="training" defaultChecked />
                        <label className="form-check-label" htmlFor="training">
                            Training
                        </label>
                        <div className={`${classes.Training}`}>
                            <label>
                            (Pemilihan training akan ada tambahan biaya training)
                            </label>
                        </div>
                    </div>
                    
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="training" id="tidak_training" />
                        <label className="form-check-label" htmlFor="tidak_training">
                            Tidak
                        </label>
                    </div>
                </div>
            </div>
            <div className='row mt-4 ' >
                 <div className='col-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        Sertifikasi ulang
                    </label>
                </div>
                <div className='col-9 d-flex flex-wrap ' >
                    <div className="form-check mr-2">
                        <input className="form-check-input"
                            type="checkbox" name="sertifikasi_ulang" id="lama" value="lama" 
                            defaultChecked
                            onChange={()=>setChecked(checked===false)} />
                        <label className="form-check-label" htmlFor="lama">
                            Ceklis jika perpanjangan sertifikasi sebelumnya
                        </label>
                        <div className={`${classes.Training}`}>
                            <label>
                            (Silahkan upload Jobdesk, surat permohonan perpanjangan, surat pernyataan bahwa ybs masih bekerja dibidang SDM oleh atasan, dan upload sertifikat lama)
                            </label>
                        </div>
                    </div>
                </div>
            </div>  
                

                <div className='row mt-4 ' >
                    <div className='col-3 d-flex align-items-center' >
                        <label className=' mb-0 ' >
                           Nomor Sertifikasi
                        </label>
                    </div>
                    <div className='col-9' >
                        <input className='form-control bg-white' placeholder="masukan nomor sertifikasi" />
                    </div>
                </div>

                {checked=== true ? <>
                    <div className='row mt-4 ' >
                    <div className='col-3 d-flex align-items-center' >
                        <label className=' mb-0 ' >
                            Tanggal Sertifikasi lama
                        </label>
                    </div>
                    <div className='col-9 d-flex flex-wrap align-items-center ' >
                        <DatePicker
                            className='form-control bg-white  '
                            selected={stateForm.dateSertifikat}
                            onChange={dateSertifikat => setStateForm({ ...stateForm, dateSertifikat })}
                            />
                    </div>
                </div>
                <div className='row mt-4 ' >
                    <div className='col-3 d-flex ' >
                        <label className=' mb-0 ' >
                            Upload Sertifikat lama
                        </label>
                    </div>
                    <div className='col-9 input-group' >
                         <div className="custom-file">
                            <input type="file" accept=".jpg, .png, .jpeg, .pdf" className="form-control-file" id="uploadSertifikatLama"/>
                        </div>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" id="uploadSertifikatLama">Upload</button>
                        </div>
                    </div>
                </div>

                </> : ''}
                <div className='row mt-4 ' >
                    <div className="col-md-12 mt-5 mb-5">
                        <div className="form-group col-sm-4 col-md-4 ml-auto mr-auto">
                            <button type="submit" className="btn btn-primary btn-block">
                                Pesan Sekarang
                            </button>
                        </div>
                        <div className="form-group col-sm-6 col-md-4 mr-auto ml-auto">
                            <button type="submit" className="btn btn-light bg-gray btn-block" onClick={() => history.push('/member/ujian-baru')}>
                                    Batal
                            </button>
                        </div>      
                </div>
            </div> 
        </div>
    )
}

export default DaftarUjianForm