import { Carousel  } from 'react-bootstrap'
import { useState } from 'react'

import DataTable from 'react-data-table-component'
import { MdSearch } from 'react-icons/md'
import {BsFilter} from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
  
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

    const subHeaderComponent = () => {
        return (<div className="input-group col-md-4 col-sm-6">
        <input type="text" className="form-control px-3 py-2" placeholder="Search ..." aria-label="Recipient's username" aria-describedby="button-addon2" />
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" >
              <MdSearch />
            </button>
        </div>
      </div>
      )
    }

   


    
    const onClickRow = (row) => {
        history.push(`/member/detail-skema-sertifikasi/${row.no}`)
    }

    return (
        <>
            
            <div className='container py-4'>
                <br />
                <br />
                <br />              
                    <DataTable
                        title='Daftar Skema Sertifikasi'
                        pagination
                        columns={columns}
                        data={schemes}
                        customStyles={customStyles}
                        subHeader
                        onRowClicked={onClickRow}
                        subHeaderComponent={subHeaderComponent()}
                        />
                 </div>
        </>
    )
}
export default Skema