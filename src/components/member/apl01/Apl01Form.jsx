import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import {Link} from 'react-router-dom'
import SignatureCanvas from 'react-signature-canvas'

const Apl01 = () => {

    const [stateForm, setStateForm] = useState({
        name : '' ,
        address : '' ,
        phone_number : '' ,
        gender : '' ,
        birth_place : '' ,
        birth_date : new Date() ,
        no_ktp : '' ,
        pendidikan_terakhir : 'SMA' ,
        has_job : false ,
        job_title : '' ,
        job_address : '' ,
        company_name : '' ,
        company_phone : '' ,
        company_email : ''
          
    });

    const onChangeField = index => e => {
        setStateForm({ ...stateForm , [index] : e.target.value })
    }

    let sigPad = useRef()

    return (
        <div className='container my-4' >
            <div className='row'>
                <div className='col d-flex align-items-center justify-content-between ' >
                    <h6>
                        FR APL 01. <br />
                        FORMULIR PERMOHONAN SERTIFIKASI KOMPETENSI
                    </h6>
                    <Link to="/member/edit/apl-01">
                        <button className='btn btn-sm btn-warning text-white ' >
                            Edit Form
                        </button>
                    </Link>
                </div>
            </div>
            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        Pendaftar
                    </label>
                </div>
                <div className='col-9' >
                    <select className='form-control bg-white  ' >
                        <option>Perorangan</option>
                    </select>
                </div>
            </div>
            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center ' >
                    <label className=' mb-0 ' >
                        No. Identitas
                    </label>
                </div>
                <div className='col-9' >
                    <input className='form-control bg-white  ' 
                    onChange={ onChangeField('no_ktp') } />
                </div>
            </div>
            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        Nama Lengkap
                    </label>
                </div>
                <div className='col-9' >
                    <input className='form-control bg-white  ' 
                     onChange={ onChangeField('name') } />
                </div>
            </div>
            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        Tempat & Tanggal Lahir
                    </label>
                </div>
                <div className='col-9 d-flex flex-wrap align-items-center ' >
                    <input className='form-control bg-white  ' style={{ flex: 1 }} />
                    <span className='mx-4 ' style={{ fontSize: 30, lineHeight: 0 }} >-</span>
                    <DatePicker
                        className='form-control bg-white  '
                        selected={stateForm.birth_date}
                        onChange={birth_date => setStateForm({ ...stateForm, birth_date })} />
                </div>
            </div>
            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        Jenis Kelamin
                    </label>
                </div>
                <div className='col-9 d-flex flex-wrap ' >
                    <div className="form-check mr-2" style={{ width: 100 }} >
                        <input className="form-check-input" type="radio" name="jenis_kelamin" id="pria" value="pria"
                        defaultChecked onClick={ onChangeField('gender') } />
                        <label className="form-check-label" htmlFor="pria">
                            Laki-Laki
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="jenis_kelamin" id="wanita" value="wanita" 
                        onChange={ onChangeField('wanita') } />
                        <label className="form-check-label" htmlFor="wanita">
                            Perempuan
                        </label>
                    </div>
                </div>
            </div>
            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        Kewarnegaraan
                    </label>
                </div>
                <div className='col-9 d-flex flex-wrap ' >
                    <div className="form-check mr-2" style={{ width: 100 }} >
                        <input className="form-check-input" type="radio" name="kewarnegaraan" id="wni" defaultChecked />
                        <label className="form-check-label" htmlFor="wni">
                            WNI
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="kewarnegaraan" id="wna" />
                        <label className="form-check-label" htmlFor="wna">
                            WNA
                        </label>
                    </div>
                </div>
            </div>

            <div className='row mt-4 ' >
                <div className='col-3 d-flex ' >
                    <label className=' mb-0 ' >
                        Alamat
                    </label>
                </div>
                <div className='col-9' >
                    <textarea className='form-control bg-white  ' 
                    onChange={ onChangeField('address') } />
                </div>
            </div>

            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        No. Telp
                    </label>
                </div>
                <div className='col-9' >
                    <input type='number' className='form-control bg-white  ' 
                     onChange={ onChangeField('phone_number') } />
                </div>
            </div>

            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        Pendidikan Terakhir
                    </label>
                </div>
                <div className='col-9' >
                    <select className='form-control bg-white  ' onChange={ onChangeField('pendidikan_terakhir') } >
                        <option value="SMA" >SMA Sederajat</option>
                        <option value="SMP" >SMP Sederajat</option>
                        <option value="SD" >SD Sederajat</option>
                    </select>
                </div>
            </div>

            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        Pekerjaan
                    </label>
                </div>
                <div className='col-9 d-flex flex-wrap ' >
                    <div className="form-check mr-2" style={{ width: 100 }} >
                        <input className="form-check-input"
                            type="radio" name="pekerjaan" id="bekerja" 
                            onChange={e => setStateForm({
                                ...stateForm,
                                has_job: true
                            })} />
                        <label className="form-check-label" htmlFor="bekerja">
                            Bekerja
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="pekerjaan" id="tidak_bekerja" value="false" defaultChecked
                            onChange={e => setStateForm({
                                ...stateForm,
                                has_job: false
                            })} />
                        <label className="form-check-label" htmlFor="tidak_bekerja">
                            Tidak Bekerja
                        </label>
                    </div>
                </div>
            </div>
            {stateForm.has_job ? <>

                <div className='row mt-4 ' >
                    <div className='col-3 d-flex align-items-center' >
                        <label className=' mb-0 ' >
                            Nama Perusahaan
                        </label>
                    </div>
                    <div className='col-9' >
                        <input className='form-control bg-white  ' />
                    </div>
                </div>

                <div className='row mt-4 ' >
                    <div className='col-3 d-flex align-items-center' >
                        <label className=' mb-0 ' >
                            Jabatan
                        </label>
                    </div>
                    <div className='col-9' >
                        <input className='form-control bg-white  ' />
                    </div>
                </div>

                <div className='row mt-4 ' >
                    <div className='col-3 d-flex ' >
                        <label className=' mb-0 ' >
                            Alamat Perusahaan
                    </label>
                    </div>
                    <div className='col-9' >
                        <textarea className='form-control bg-white  ' />
                    </div>
                </div>

                <div className='row mt-4 ' >
                    <div className='col-3 d-flex align-items-center' >
                        <label className=' mb-0 ' >
                            Email Perusahaan
                        </label>
                    </div>
                    <div className='col-9' >
                        <input className='form-control bg-white  ' />
                    </div>
                </div>

                <div className='row mt-4 ' >
                    <div className='col-3 d-flex align-items-center' >
                        <label className=' mb-0 ' >
                            No. Telp Perusahaan
                    </label>
                    </div>
                    <div className='col-9' >
                        <input type='number' className='form-control bg-white  ' />
                    </div>
                </div>

            </> : ''
            }

            <div className='row mt-4 ' >
                <div className='col ' >
                    <table className='table table-bordered '>
                        <thead>
                            <tr>
                                <th scope="col">Jenis Dokumen</th>
                                <th scope="col">Nama Dokumen</th>
                                <th scope="col" width='150' >Status</th>
                                <th scope="col" width='180' >Aksi</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white' >
                            <tr>
                                <td>Pas Photo</td>
                                <td>FotoBGmerah</td>
                                <td>
                                    <button className='btn btn-sm btn-success '> Sudah Diunggah </button>
                                </td>
                                <td>
                                    <button className='btn btn-sm btn-success mr-2'> Lihat </button>
                                    <button className='btn btn-sm btn-primary '> Unggah </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Ijazah Terakhir</td>
                                <td>ijazahSMA</td>
                                <td>
                                    <button className='btn btn-sm btn-danger '> Sudah Diunggah </button>
                                </td>
                                <td>
                                    <button className='btn btn-sm btn-success mr-2' disabled > Lihat </button>
                                    <button className='btn btn-sm btn-primary '> Unggah </button>
                                </td>
                            </tr>
                            <tr>
                                <td >KTP</td>
                                <td >FotoKTP</td>
                                <td>
                                    <button className='btn btn-sm btn-danger '> Sudah Diunggah </button>
                                </td>
                                <td>
                                    <button className='btn btn-sm btn-success mr-2' disabled > Lihat </button>
                                    <button className='btn btn-sm btn-primary '> Unggah </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='row mt-4 ' >
                <div className='col-3 ' >
                    <label className=' mb-0 ' >
                        Tanda Tangan
                    </label>
                </div>
                <div className='col-9' >
                    <SignatureCanvas penColor='black'
                        ref={ref => sigPad = ref}
                        canvasProps={{ height: 150, className: 'sigCanvas', style: { width: '100%', background: '#fff' } }} />
                    <a href='/#' className='float-right' onClick={(e) => {
                        e.preventDefault()
                        sigPad.clear()
                    }} >Ulangi Tanda Tangan</a>
                </div >
            </div>
                
            <div className='row mt-4 ' >
                    <div className='col ' >
                        <button className='btn btn-primary float-right ' >
                            Selanjutnya
                        </button>
                        </div>
                    </div>
        </div>
    )
}

export default Apl01