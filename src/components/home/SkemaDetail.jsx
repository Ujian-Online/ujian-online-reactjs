import { useState,useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch } from 'react-redux';
import { getSertifikasiAction } from '../../redux/actions/sertifikasi.action';

const SkemaDetail = () => {
    const dispatch=useDispatch()

    useEffect(()=>{
        onChange()
    },[])

    const onChange =(id)=>{
        dispatch(getSertifikasiAction(id))
    }

    const [ kompetensi , setKompetensi ] = useState([
        { kode_unit : 'AB.1000.01' , unit_kompetensi : 'Menyusun Intervensi Interpersonal' },
        { kode_unit : 'AB.1000.02' , unit_kompetensi : 'Menyusun Intervensi Interpersonal' },
        { kode_unit : 'AB.1000.03' , unit_kompetensi : 'Menyusun Intervensi Interpersonal' },
        { kode_unit : 'AB.1000.04' , unit_kompetensi : 'Menyusun Intervensi Interpersonal' },
        { kode_unit : 'AB.1000.05' , unit_kompetensi : 'Menyusun Intervensi Interpersonal' },
    ])

    const columns = [
        { selector : 'kode_unit' , name : 'Kode Unit' , sortable : true },
        { selector : 'unit_kompetensi' , name : 'Unit Kompetensi' , sortable : true },
    ];
    return (
        <div className='container' >
            <div className='bg-white ml-auto mr-auto py-3 px-3 my-5' >
                <form>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Kode Skema</label>
                        <div class="col-sm-9">
                            <input type="text" disabled class="form-control" value='SKM.MSDM.01' />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Judul Skema</label>
                        <div class="col-sm-9">
                            <input type="text" disabled class="form-control" value='Supervisor Pengelolaan Sumber Daya Manusia' />
                        </div>
                    </div>
                </form>
            </div>
             <DataTable
                title='DAFTAR UNIT KOMPENTESI'
                columns={columns}
                data={kompetensi} />
            <br />
        </div>
    )
}

export default SkemaDetail
