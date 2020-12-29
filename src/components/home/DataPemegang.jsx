import { useState } from 'react'
import MUIDataTable from 'mui-datatables'

import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText
} from '@material-ui/core'

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
        { name : 'name' , label : 'Name', options : { filter : false } },
        { name : 'no_register' , label : 'No. Registrasi', options : { filter : false } },
        { name : 'no_certificate' , label : 'No. Sertifikat', options : { filter : false } },
        { name : 'skema' , label : 'Skema', options : { filter : false } },
        { name : 'date_certificate' , label : 'Tanggal Sertifikat', options : { filter : false } },
        { name : 'masa_berlaku' , label : 'Masa Berlaku' , options : { filter: false } },
    ];

    const renderFilterToolbar = () => {
      return (
        <FormControl >
        <Select
          value={filterTahun}
          onChange={(e) => setFilterTahun(e.target.value)}
          label="Data per Tahun"
        >
          {arrPerTahun.map( tahun => (
            <MenuItem value={tahun} key={tahun} >{tahun}</MenuItem>
          ))}
          
        </Select>
        <FormHelperText>Data per Tahun</FormHelperText>
      </FormControl>
      )
    }


    const options = {
        viewColumns : false,
        download : false,
        print : false,
        filter : false,
        selectableRows : 'none',
        customToolbar : renderFilterToolbar
    };

   
    return(
        <div className='col-12 d-flex align-items-baseline justify-content-center ' >
             <MUIDataTable
                    title='Pemegang Sertifikat'
                    className='my-3 my-lg-5 col-md-10'
                    data={ schemes }
                    columns={columns}
                    options={options}
                    />
        </div>
    )
}

export default DataPemegang

