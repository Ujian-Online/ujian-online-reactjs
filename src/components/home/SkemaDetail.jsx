import { useState,useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSertikasiDetailAction } from '../../redux/actions/sertifikasi.action';

const SkemaDetail = () => {
    //tampil data ke dalam datatable
    const [ kompetensi , setKompetensi ] = useState([])
    const sertifikasi=useSelector(state=>state.sertifikasi)
   
    useEffect(()=>{
        console.log('detail sertifikasi',sertifikasi.sertifikasi.id)
        setKompetensi([ ...(sertifikasi.sertifikasi || []).map(s=>({
           kode_unit:s.id,
           unit_kompetensi:s.title
        }))])
    },[sertifikasi.sertifikasi.id])
    
    //ekstrak id kemudian fetch ke dalam action
    const {id} =useParams()
    useEffect(()=>{
        skemaSertifikasiDetail()
    },[])

    //get sertifikasi detail action dan masukan id
    const dispatch=useDispatch()
    const skemaSertifikasiDetail =()=>{
        dispatch(getSertikasiDetailAction(id))
    }

    

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
                            <input type="text" disabled class="form-control" value={sertifikasi} />
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
