import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { MdSearch } from 'react-icons/md'

const nowYear = (new Date()).getFullYear()
const arrPerTahun = [...Array(5)].map((val, index) => nowYear - index )
const DataPemegang = () => {

    const [ filterTahun , setFilterTahun ] = useState(nowYear)

    const [ schemes , setScheme ] = useState([
        { 
            name : 'bintang' , 
            no_register : '123456789' , 
            no_certificate : 'A123456789' ,
            skema : 'Staf Penggajian',
            date_certificate : '20-08-2019',
            masa_berlaku : '20-08-2021'
        },
        { 
            name : 'budi' , 
            no_register : '123456789' , 
            no_certificate : 'A123456789' ,
            skema : 'Talent Manager',
            date_certificate : '29-07-2020',
            masa_berlaku : '29-07-2023'
        },
        { 
            name : 'Bagus Budi' , 
            no_register : '123456789' , 
            no_certificate : 'A123456789' ,
            skema : 'Talent Manager',
            date_certificate : '29-07-2020',
            masa_berlaku : '29-07-2023'
        }
    ])

    const columns = [
        { selector : 'name' , name : 'Name', sortable : true },
        { selector : 'no_register' , name : 'No. Registrasi' , sortable : true },
        { selector : 'no_certificate' , name : 'No. Sertifikat', sortable : true },
        { selector : 'skema' , name : 'Skema', sortable : true },
        { selector : 'date_certificate' , name : 'Tanggal Sertifikat', sortable : true },
        { selector : 'masa_berlaku' , name : 'Masa Berlaku' , sortable : true },
    ];


    const subHeaderComponent = () => {
        return (<div className="input-group col-md-6 col-sm-6">
        <select className='form-control mr-3'>
            <option>Data per Tahun</option>
        </select>
        <input type="text" className="form-control px-3 py-2" placeholder="Search ..." aria-label="Recipient's username" aria-describedby="button-addon2" />
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" >
              <MdSearch />
            </button>
        </div>
      </div>)
    }
   
    return(
        <div className=' col-sm-10 col-md-8 ml-auto mr-auto mt-5 mb-5 ' >
            <DataTable
                title='Pemegang Sertifikat'
                pagination
                columns={columns}
                data={schemes}
                subHeader
                subHeaderComponent={subHeaderComponent()}
             />
        </div>
    )
}

export default DataPemegang

