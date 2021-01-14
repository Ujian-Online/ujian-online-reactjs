import { Dropdown, ButtonGroup, Button } from 'react-bootstrap'
import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { MdFilterList, MdSearch } from 'react-icons/md'
import { useHistory, Link } from 'react-router-dom'
import Footer from './Footer'
  
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

const Skema = () => {

    const history = useHistory()
    
    const [ schemes , setScheme ] = useState([
        { no : 1 , skema : 'Supervisor Pengelolaan Sumber Daya Manusia' , unit: '29 unit' },
        { no : 2 , skema : 'Manager Pengelolaan Sumber Daya Manusia' , unit: '32 unit' },
        { no : 3 , skema : 'Training and Development Supervisor' , unit: '28 unit' },
        { no : 4 , skema : 'Industrial Relation Manager' , unit: '35 unit' },
        { no : 5 , skema : 'Talent Manager' , unit: '30 unit' }  
    ])

    const columns = [
        { selector : 'no' , name : 'No' , sortable : true },
        { selector : 'skema' , name : 'Skema' , sortable : true },
        { selector : 'unit' , name : 'Unit' , sortable : true },
    ];

    const Search = () => {
        return (
                <div className="input-group col-md-4 col-sm-6 ml-auto mt-3">
        <input type="text" className="form-control px-3 py-2" placeholder="Search ..." aria-label="Recipient's username" aria-describedby="button-addon2" />
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
        history.push(`/member/detail-skema-sertifikasi/${row.no}`)
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
                        data={schemes}
                        customStyles={customStyles}
                        onRowClicked={onClickRow}
                        noHeader
                        // subHeader
                        // subHeaderComponent={subHeaderFilter()}
                    />
                </div>
                </div>
                <br />
                <br />
                <br />              
                    {/* <DataTable
                        title='Daftar Skema Sertifikasi'
                        pagination
                        columns={columns}
                        data={schemes}
                        customStyles={customStyles}
                        subHeader
                        onRowClicked={onClickRow}
                        subHeaderComponent={subHeaderComponent()}
                        /> */}
                 </div>
                 <Footer />
        </>
    )
}
export default Skema