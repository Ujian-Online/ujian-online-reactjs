import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DatePicker from '../../reuseable/DatePicker';
import { useHistory } from 'react-router-dom'
// import SignatureCanvas from 'react-signature-canvas'
import { getApl01Action, postApl01Action } from '../../../redux/actions/apl01.action'
import moment from 'moment'
import Apl01CustomData from './Apl01CustomData'
import { MdCreate } from 'react-icons/md'
import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
    container: {
        '& input[disabled], & textarea[disabled], & select[disabled], & input[disabled]~.form-check-label': {
            background: 'white',
            color: '#212529',
            fontSize: '16px'
        },
        '& input[disabled][type="radio"]': {
            visibility: 'hidden'
        },
    },

})

const Apl01 = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const history = useHistory()
    const auth = useSelector(state => state.auth)
    const apl01 = useSelector(state => state.apl01)
    const [isDisabled, setDisable] = useState(true)
    const [stateForm, setStateForm] = useState({
        name: '',
        address: '',
        phone_number: '',
        gender: 'pria',
        birth_place: '',
        birth_date: new Date(),
        no_ktp: '',
        pendidikan_terakhir: 'SMA',
        has_job: false,
        job_title: '',
        job_address: '',
        company_name: '',
        company_phone: '',
        company_email: ''

    });

    useEffect(() => {
        dispatch(getApl01Action(auth.token))
    }, [])

    useEffect(() => {
        if (apl01.apl01.id && !apl01.errMessage && !apl01.isLoading ) {
            const birth_date = moment(apl01.apl01.birth_date, 'YYYY-MM-DD').toDate()
            setStateForm({
                ...apl01.apl01,
                gender: apl01.apl01 && apl01.apl01.gender.toLowerCase(),
                birth_date
            })
        }

    }, [apl01])

    const onChangeField = index => e => {
        setStateForm({ ...stateForm, [index]: e.target.value })
    }

    let sigPad = useRef()

    const onSave = () => {
        dispatch(postApl01Action(auth.token, {
            ...stateForm,
            birth_date: moment(stateForm.birth_date).format('YYYY-MM-DD')
        }))
    }

    const renderErrorMsg = (message) => {
        return (<div class="invalid-tooltip position-static d-inline-block " style={{ width: 'fit-content', zIndex: 0 }}>
            {message}
        </div>)
    }

    const errors = apl01.errMessage && apl01.errMessage.errors && apl01.errMessage.errors


    return (
        <div className={`container my-4 bg-white p-3 rounded border ` + classes.container} >
            <div className='row'>
                <div className='col d-flex align-items-center justify-content-between flex-wrap ' >
                    <h6>
                        FR APL 01. <br />
                        FORMULIR PERMOHONAN SERTIFIKASI KOMPETENSI
                    </h6>
                    {
                        isDisabled ? (<button className='btn btn-sm btn-warning text-white ' onClick={() => setDisable(false)} >
                            <MdCreate /> Edit Form
                        </button>) :
                            <button className='btn btn-sm btn-secondary text-white ' onClick={() => {
                                    dispatch(getApl01Action(auth.token))    
                                    setDisable(true)
                                }} >
                                Batal
                    </button>
                    }

                </div>
            </div>
            {/* <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center' >
                    <label className=' mb-0 ' >
                        Pendaftar
                    </label>
                </div>
                <div className='col-9' >
                    <select className='form-control   ' >
                        <option>Perorangan</option>
                    </select>
                </div>
            </div> */}
            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center justify-content-between ' >
                    <label className=' mb-0 ' >
                        No. Identitas
                    </label>
                    <span>:</span>
                </div>
                <div className='col-9' >
                    <input className='form-control   '
                        disabled={isDisabled}
                        value={stateForm.no_ktp}
                        onChange={onChangeField('no_ktp')} />
                    {errors && errors.no_ktp && renderErrorMsg(errors.no_ktp[0])}
                </div>
            </div>
            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center justify-content-between ' >
                    <label className=' mb-0 ' >
                        Nama Lengkap
                    </label>
                    <span>:</span>
                </div>
                <div className='col-9' >
                    <input className='form-control   '
                        value={stateForm.name}
                        disabled={isDisabled}
                        onChange={onChangeField('name')} />
                    {errors && errors.name && renderErrorMsg(errors.name[0])}
                </div>
            </div>
            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center justify-content-between ' >
                    <label className=' mb-0 ' >
                        Tempat & Tanggal Lahir
                    </label>
                    <span>:</span>
                </div>
                <div className='col-9' >
                    <div className=' d-flex flex-wrap align-items-center ' >
                        <input className='form-control   ' style={{ flex: 1 }}
                            disabled={isDisabled}
                            value={stateForm.birth_place}
                            onChange={onChangeField('birth_place')} />
                        <span className='mx-4 ' style={{ fontSize: 30, lineHeight: 0 }} >-</span>
                        <DatePicker
                            disabled={isDisabled}
                            className='form-control   '
                            selected={stateForm.birth_date}
                            onChange={birth_date => setStateForm({ ...stateForm, birth_date })} />
                    </div>
                    {errors && errors.birth_place && renderErrorMsg(errors.birth_place[0])}
                </div>
            </div>
            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center justify-content-between ' >
                    <label className=' mb-0 ' >
                        Jenis Kelamin
                    </label>
                    <span>:</span>
                </div>
                <div className='col-9 d-flex flex-wrap ' >
                    <div className={`form-check mr-2 ` + ((isDisabled && stateForm.gender !== 'pria') ? 'd-none' : '')}
                        style={{ width: 100 }} >
                        <input className="form-check-input"
                            type="radio"
                            name="jenis_kelamin" id="pria" value="pria"
                            disabled={isDisabled}
                            checked={stateForm.gender === 'pria'} onClick={onChangeField('gender')} />
                        <label className="form-check-label" htmlFor="pria">
                            Laki-Laki
                        </label>
                    </div>
                    <div className={`form-check ` + ((isDisabled && stateForm.gender !== 'wanita') ? 'd-none' : '')} >
                        <input className="form-check-input" type="radio" name="jenis_kelamin" id="wanita" value="wanita"
                            checked={stateForm.gender === 'wanita'}
                            disabled={isDisabled}
                            onChange={onChangeField('gender')} />
                        <label className="form-check-label" htmlFor="wanita">
                            Perempuan
                        </label>
                    </div>
                </div>
            </div>
            {/* <div className='row mt-4 ' >
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
            </div> */}

            <div className='row mt-4 ' >
                <div className='col-3 d-flex justify-content-between ' >
                    <label className=' mb-0 ' >
                        Alamat
                    </label>
                    <span>:</span>
                </div>
                <div className='col-9' >
                    <textarea className='form-control  py-2 px-3 '
                        value={stateForm.address}
                        disabled={isDisabled}
                        onChange={onChangeField('address')} >
                    </textarea>
                    {errors && errors.address && renderErrorMsg(errors.address[0])}
                </div>
            </div>

            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center justify-content-between ' >
                    <label className=' mb-0 ' >
                        No. Telp
                    </label>
                    <span>:</span>
                </div>
                <div className='col-9' >
                    <input type='number' className='form-control   '
                        value={stateForm.phone_number}
                        disabled={isDisabled}
                        onChange={onChangeField('phone_number')} />
                    {errors && errors.phone_number && renderErrorMsg(errors.phone_number[0]) }
                </div>
            </div>

            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center justify-content-between ' >
                    <label className=' mb-0 ' >
                        Pendidikan Terakhir
                    </label>
                    <span>:</span>
                </div>
                <div className='col-9' >
                    <select className='form-control   '
                        value={stateForm.pendidikan_terakhir}
                        disabled={isDisabled}
                        onChange={onChangeField('pendidikan_terakhir')} >
                        <option value="SMA" >SMA Sederajat</option>
                        <option value="SMP" >SMP Sederajat</option>
                        <option value="SD" >SD Sederajat</option>
                    </select>
                </div>
            </div>

            <div className='row mt-4 ' >
                <div className='col-3 d-flex align-items-center justify-content-between ' >
                    <label className=' mb-0 ' >
                        Pekerjaan
                    </label>
                    <span>:</span>
                </div>
                <div className='col-9 d-flex flex-wrap ' >
                    <div className={`form-check mr-2 ` + ((isDisabled && !stateForm.has_job) ? 'd-none' : '')}
                        style={{ width: 100 }} >
                        <input className="form-check-input"
                            type="radio" name="pekerjaan" id="bekerja"
                            disabled={isDisabled}
                            checked={stateForm.has_job}
                            onChange={e => setStateForm({
                                ...stateForm,
                                has_job: true
                            })} />
                        <label className="form-check-label" htmlFor="bekerja">
                            Bekerja
                        </label>
                    </div>
                    <div className={`form-check ` + ((isDisabled && stateForm.has_job) ? 'd-none' : '')} >
                        <input className="form-check-input" type="radio" name="pekerjaan" id="tidak_bekerja" value="false" defaultChecked
                            checked={!stateForm.has_job}
                            disabled={isDisabled}
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
                    <div className='col-3 d-flex align-items-center justify-content-between ' >
                        <label className=' mb-0 ' >
                            Nama Perusahaan
                        </label>
                        <span>:</span>
                    </div>
                    <div className='col-9' >
                        <input className='form-control   '
                            value={stateForm.company_name}
                            disabled={isDisabled}
                            onChange={onChangeField('company_name')} />
                        {errors && errors.company_name && renderErrorMsg(errors.company_name[0]) }
                    </div>
                </div>

                <div className='row mt-4 ' >
                    <div className='col-3 d-flex align-items-center justify-content-between ' >
                        <label className=' mb-0 ' >
                            Jabatan
                        </label>
                        <span>:</span>
                    </div>
                    <div className='col-9' >
                        <input className='form-control   '
                            value={stateForm.job_title}
                            disabled={isDisabled}
                            onChange={onChangeField('job_title')} />
                        {errors && errors.job_title && renderErrorMsg(errors.job_title[0]) }
                    </div>
                </div>

                <div className='row mt-4 ' >
                    <div className='col-3 d-flex justify-content-between ' >
                        <label className='mb-0 ' >
                            Alamat Pekerjaan
                        </label>
                        <span>:</span>
                    </div>
                    <div className='col-9' >
                        <textarea className='form-control  py-2 px-3 '
                            value={stateForm.job_address}
                            disabled={isDisabled}
                            onChange={onChangeField('job_address')} />
                        {errors && errors.job_address && renderErrorMsg(errors.job_address[0]) }
                    </div>
                </div>

                <div className='row mt-4 ' >
                    <div className='col-3 d-flex align-items-center justify-content-between ' >
                        <label className=' mb-0 ' >
                            Email Perusahaan
                        </label>
                        <span>:</span>
                    </div>
                    <div className='col-9' >
                        <input className='form-control   '
                            value={stateForm.company_email}
                            disabled={isDisabled}
                            onChange={onChangeField('company_email')} />
                        {errors && errors.company_email && renderErrorMsg(errors.company_email[0]) }
                    </div>
                </div>

                <div className='row mt-4 ' >
                    <div className='col-3 d-flex align-items-center justify-content-between ' >
                        <label className=' mb-0 ' >
                            No. Telp Perusahaan
                        </label>
                        <span>:</span>
                    </div>
                    <div className='col-9' >
                        <input type='number' className='form-control   '
                            value={stateForm.company_phone}
                            disabled={isDisabled}
                            onChange={onChangeField('company_phone')} />
                        {errors && errors.company_phone && renderErrorMsg(errors.company_phone[0]) }
                    </div>
                </div>

            </> : ''
            }

            <div className='row mt-4 ' >
                <div className='col ' >
                    <Apl01CustomData apl01={apl01} isDisabled={isDisabled} />
                </div>
            </div>

            {/* <div className='row mt-4 ' >
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
            </div>  */}

            <div className='row mt-4 ' >
                <div className='col ' >
                    {
                        isDisabled ? (<button className='btn btn-primary float-right ' onClick={() => history.push('/member/apl-02')} >
                            Selanjutnya
                        </button>) :
                            (<button className='btn btn-success float-right ' onClick={onSave} >
                                Simpan
                            </button>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Apl01