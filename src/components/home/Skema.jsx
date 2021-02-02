import { Carousel  } from 'react-bootstrap'
import { useState } from 'react'

import DataTable from 'react-data-table-component'
import { MdSearch } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getSertifikasiAction } from '../../redux/actions/sertifikasi.action'
import { useMemo } from 'react'
  
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
    const dispatch=useDispatch()
    const sertifikasi=useSelector(state=>state.sertifikasi)
    const [ schemes , setScheme ] = useState([])
    useEffect(()=>{
         dataSertifikasi()
    },[])

    useEffect(()=>{
        console.log('sertifikasi',sertifikasi)
        setScheme([ ...(sertifikasi.sertifikasi || []).map(s=>({
            no:s.id,
            nomor_skema:s.nomor_skema,
            title:s.title,
        }))])
    },[sertifikasi.sertifikasi])

    

    const dataSertifikasi=()=>{
        dispatch(getSertifikasiAction())
    }
    const columns = [
        { selector : 'no' , name : 'No' , sortable : true },
        { selector : 'nomor_skema' , name : 'Nomor Skema' , sortable : true },
        { selector : 'title' , name : 'Judul' , sortable : true },
    ]

    const subHeaderComponent = () => {
        return (<div className="input-group col-md-4 col-sm-6">
        <input type="text" className="form-control px-3 py-2" placeholder="Search ..." aria-label="Recipient's username" aria-describedby="button-addon2" />
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" >
              <MdSearch />
            </button>
        </div>
      </div>)
    }
  
    const onClickRow = (row) => {
        history.push(`/skema/${row.no}`)
    }

    return (
        <>
            <div className='w-100' >
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://via.placeholder.com/640x200"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://via.placeholder.com/640x200"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://via.placeholder.com/640x200"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
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