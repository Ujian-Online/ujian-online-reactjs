import { useState,useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { MdSearch } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import {getHolderSertifikatAction} from '../../redux/actions/pemegangSertifikat.action'

const DataPemegang = () => {

    const dispatch=useDispatch()
    const [schemes,setScheme]=useState([])
    const holder=useSelector(state=>state.holder)
    useEffect(()=>{
        dataPemilik()
   },[])

   useEffect(()=>{
       console.log('Pemilik sertifikasi',holder)
       let no = 1
       setScheme([ ...(holder.holder || []).map(ps=>({
           no:no++,
           name:ps.name,
           nomor_register:ps.nomor_registrasi,
           sertifikasi_nomor_skema:ps.sertifikasi_nomor_skema,
           sertifikasi_title:ps.sertifikasi_title,
           tanggal_sertifikasi:ps.tanggal_sertifikasi,
       }))])
   },[holder.holder])

   const dataPemilik=()=>{
    dispatch(getHolderSertifikatAction())
    }
    
    const columns = [
        { selector : 'name' , name : 'Name', sortable : true },
        { selector : 'nomor_register' , name : 'No. Registrasi' , sortable : true },
        { selector : 'sertifikasi_nomor_skema' , name : 'No. Sertifikat', sortable : true },
        { selector : 'sertifikasi_title' , name : 'Skema', sortable : true },
        { selector : 'tanggal_sertifikasi' , name : 'Tanggal Sertifikat', sortable : true },
    ];


    const subHeaderComponent = () => {
        return (<div className="input-group col-md-6 col-sm-6 align-items-center ">
        <select className='form-control mr-3 py-2 rounded ' style={{ height: 'auto' }} >
            <option>Data per Tahun</option>
        </select>
        <input type="text" className="form-control px-3 py-2" placeholder="Search ..." aria-label="Recipient's username" aria-describedby="button-addon2" value={filterData} onChange={(e)=>setFilterData(e.target.value)} />
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" >
              <MdSearch />
            </button>
        </div>
      </div>)
    }

    //filter data
    const [filterData,setFilterData ]=useState("");
    function search(rows){
        const column=rows[0] && Object.keys(rows[0])
        return rows.filter((row)=>column.some((column)=> row[column].toString().toLowerCase().indexOf(filterData.toLowerCase())>-1
            )
        )
    }
   
    return(
        <div className=' col-sm-10 col-md-8 ml-auto mr-auto mt-5 mb-5 ' >
            <DataTable
                title='Pemegang Sertifikat'
                pagination
                columns={columns}
                data={search(schemes)}
                subHeader
                subHeaderComponent={subHeaderComponent()}
             />
        </div>
    )
}

export default DataPemegang

