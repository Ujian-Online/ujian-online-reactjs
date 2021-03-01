import { Dropdown, ButtonGroup, Button } from 'react-bootstrap'
import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { MdFilterList, MdSearch } from 'react-icons/md'
import { useHistory, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getSertifikasiAction } from '../../redux/actions/sertifikasi.action'
  
const customStyles = {
    headCells: {
        style: {
            '&:nth-child(1)' : {
              maxWidth : '50px',
              dispaly : 'flex',
              alignItems : 'center',
              justifyContent : 'center',
            }
        },        
    },
    cells: {
        style: {
            cursor : 'pointer',
            '&:nth-child(1)' : {
                maxWidth : '50px',
              dispaly : 'flex',
              alignItems : 'center',
              justifyContent : 'center',
            }
        }
    }
    
}

const DaftarUjianBaru = () => {

    const history = useHistory()
    const dispatch=useDispatch()
    const sertifikasi=useSelector(state=>state.sertifikasi)
    const [ schemes , setScheme ] = useState([])
    useEffect(()=>{
         dataSertifikasi()
    },[])

    useEffect(()=>{
        console.log('sertifikasi',sertifikasi)
        let no = 1
        setScheme([ ...(sertifikasi.sertifikasi || []).map(s=>({
            no:no++,
            id:s.id,
            nomor_skema:s.nomor_skema,
            title:s.title,
        }))])
    },[sertifikasi.sertifikasi])

    

    const dataSertifikasi=()=>{
        dispatch(getSertifikasiAction())
    }


    const columns = [
        { selector : 'no' , name : 'No' , sortable : true },
        { selector : 'id' , name : 'id' , omit : true },
        { selector : 'nomor_skema' , name : 'Nomor Skema' , sortable : true },
        { selector : 'title' , name : 'Judul' , sortable : true },
    ];
    
    
    //filter by searchbox data
    const [filterData,setFilterData ]=useState("");
    function search(rows){
        const column=rows[0] && Object.keys(rows[0])
        return rows.filter((row)=>column.some((column)=> row[column].toString().toLowerCase().indexOf(filterData.toLowerCase())>-1
            )
        )
    }

    const Search = () => {
        return (
                <div className="input-group col-md-4 col-sm-6 ml-auto mt-3">
        <input type="text" className="form-control px-3 py-2" placeholder="Search ..." aria-label="Recipient's username" aria-describedby="button-addon2"value={filterData} onChange={(e)=>setFilterData(e.target.value)} />
        <div className="input-group-append ml-auto">
            <button className="btn btn-outline-secondary" type="button" >
              <MdSearch />
            </button>
        </div>
      </div>
      )
    }

    const Filter=()=>
    {return(
        <div className="col-sm-6 mb-3">
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <MdFilterList /> Filter
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Staff</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Manajer</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Supervisor</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    </div>)
    }
    
    const onClickRow = (row) => {
        history.push(`/member/detail-skema-sertifikasi/${row.id}`)
    }
    

    return (
        <>
            
            <div className='container py-4'>
                <div className="card">
                    <div className="card-header bg-white">
                            <h5 className="text-center">Ujian Saya</h5>
                       {Search()} {Filter()}
                    </div>
                    <div className="card-body">
                        <DataTable
                            columns={columns}
                            data={search(schemes)}
                            customStyles={customStyles}
                            onRowClicked={onClickRow}
                            noHeader
                            // subHeader
                            // subHeaderComponent={subHeaderFilter()}
                        />
                    </div>
                </div>
            </div>
               
        </>
    )
}
export default DaftarUjianBaru