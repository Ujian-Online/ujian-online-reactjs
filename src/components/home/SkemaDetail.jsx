import { useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSertikasiDetailAction } from '../../redux/actions/sertifikasi.action';

const SkemaDetail = () => {
    //tampil data ke dalam datatable
    const { detailSertifikasi } = useSelector( state => state.sertifikasi ) || {}
    console.log('detailSertifikasi', detailSertifikasi)
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
        { selector : 'unitkompetensi.kode_unit_kompetensi' , name : 'Kode Unit' , sortable : true },
        { selector : 'unitkompetensi.title' , name : 'Unit Kompetensi' , sortable : true },
    ];
    
    return (
        <div className='container' >
            <div className='bg-white ml-auto mr-auto py-3 px-3 my-5' >
                <form>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Kode Skema</label>
                        <div className="col-sm-9">
                            <input type="text" disabled className="form-control" value={ detailSertifikasi.nomor_skema || '-' } />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Judul Skema</label>
                        <div className="col-sm-9">
                            <input type="text" disabled className="form-control" value={ detailSertifikasi.title } />
                        </div>
                    </div>
                </form>
            </div>
             <DataTable
                title='DAFTAR UNIT KOMPENTESI'
                columns={columns}
                data={ detailSertifikasi.sertifikasiunitkompentensi || [] } />
            <br />
        </div>
    )
}

export default SkemaDetail
