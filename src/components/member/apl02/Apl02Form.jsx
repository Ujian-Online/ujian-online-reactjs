import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom'
// import { Modal, Button } from 'react-bootstrap'
// import SignatureCanvas from 'react-signature-canvas'
import { getApl02DetailAction } from '../../../redux/actions/apl02.action'
import Apl2asuk from './apl02ASUK'
import { MdCreate } from 'react-icons/md'


const Apl02Form = () => {
    // let sigPad = useRef()
    const dispatch = useDispatch()
    const [isEdit , setEdit ] = useState(false)

    //reducer auth.token
    const auth = useSelector(state => state.auth)

    //reducer apl02
    const apl02 = useSelector(state => state.apl02 || {})
    const detailApl = apl02.detailApl || {}
    const sertifikasi = detailApl.sertifikasi || {}
    const { id } = useParams()

    useEffect(() => {
        dispatch(getApl02DetailAction(auth.token, id))
    }, [])   

    return (
        <>
            <div className='container mt-5'>
                <div className='row ' >
                {
                        isEdit ? (<button className='btn btn-sm btn-secondary text-white  ml-auto mr-3 mb-2  ' onClick={() => setEdit(false) } >
                                       Selesai
                                    </button>) : 
                        (<button className='btn btn-sm btn-warning text-white  ml-auto mr-3 mb-2  ' onClick={() => setEdit(true)} >
                            <MdCreate /> Edit Form
                        </button>) 
                        
                    }
                </div>
                <div className="form-group row mb-5">
                    <label htmlFor="inputSkemaSertifikasi" className="col-sm-2 col-form-label">Judul Skema Sertifikasi</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputSkemaSertifikasi" disabled value={sertifikasi.title} />
                    </div>
                </div>
                <div className='table-responsive ' >
                    <table className="table table-bordered bg-white " style={{minWidth: '400px' }} >
                        <thead>
                            <tr className='bg-success text-white' >
                                <th scope="col" className='text-center ' colSpan="2" >Unit Kompoetensi</th>
                                <th scope="col" className='text-center ' colSpan="3">Nomor UK / Keterangan</th>
                            </tr>
                            <tr>
                                <th scope="col" >No</th>
                                <th scope="col">Kode Unit Kompetensi</th>
                                <th scope="col" colSpan="3" >Judul</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (detailApl.unitkompetensi || []).map((uk, key) => (<React.Fragment key={key} >
                                    <tr >
                                        <th scope="row">{key + 1}</th>
                                        <td>{uk.kode_unit_kompetensi}</td>
                                        <td colSpan="3" >{uk.title}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col" colSpan="2" style={{ width: '50%' }} >Pertanyaan</th>
                                        <th scope="col" className='text-center' >Status</th>
                                        <th scope="col" className='text-center' >Catatan</th>
                                    </tr>
                                    {(uk.asesisertifikasiunitkompetensielement || []).map((asuk, keyy) => (
                                        <Apl2asuk asuk={asuk} sertifikasi={sertifikasi} key={keyy} isEdit={ isEdit } />
                                    ))
                                    }

                                </React.Fragment>))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Apl02Form