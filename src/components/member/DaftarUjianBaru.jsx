import { Dropdown } from 'react-bootstrap'
import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { MdFilterList, MdSearch } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getSertifikasiAction } from '../../redux/actions/sertifikasi.action'

const customStyles = {
    headCells: {
        style: {
            '&:nth-child(1)': {
                maxWidth: '50px',
                dispaly: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }
        },
    },
    cells: {
        style: {
            // backgroundColor: 'green',
            color: 'black',
            '&:hover': {
                backgroundColor:'#DCDCDC'
            },
            cursor: 'pointer',
            '&:nth-child(1)' : {
                maxWidth: '50px',
                dispaly: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }
        }
    }

}

const DaftarUjianBaru = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const sertifikasi = useSelector(state => state.sertifikasi)
    const [schemes, setScheme] = useState([])
    useEffect(() => {
        dispatch(getSertifikasiAction(sertifikasi.query))
    }, [])

    useEffect(() => {
        console.log('sertifikasi', sertifikasi)
        let no = 1
        setScheme([...(sertifikasi.sertifikasi || []).map(s => ({
            no: no++,
            id: s.id,
            nomor_skema: s.nomor_skema,
            title: s.title,
        }))])
    }, [sertifikasi.sertifikasi])



    const columns = [
        { selector: 'no', name: 'No', sortable: true },
        { selector: 'id', name: 'id', omit: true },
        { selector: 'nomor_skema', name: 'Nomor Skema', sortable: true },
        { selector: 'title', name: 'Judul', sortable: true },
    ];


    const [search , setSearch ] = useState("");   
    const onSearch = (e) => {
        e.preventDefault()
        dispatch(getSertifikasiAction({ ...sertifikasi.query , search }))
    }

    const renderSearch = () => {
        return (
            <form className="input-group col-md-4 col-sm-6 ml-auto mt-3" onSubmit={onSearch } >
                <input type="text" 
                className="form-control px-3 py-2" 
                placeholder="Search ..."  
                value={search} onChange={(e) => setSearch(e.target.value)} />
                <div className="input-group-append ml-auto">
                    <button className="btn btn-outline-secondary" type="button" >
                        <MdSearch />
                    </button>
                </div>
            </form>
        )
    }

    const Filter = () => {
        return (
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
                <div className="card" style={{ boxShadow: '0 2px 2px #ccc' , border: 'none' }} >
                    <div className="card-header bg-white">
                        <h5 className="text-center">Daftar sertifikasi</h5>
                        {renderSearch()} {/*Filter()*/}
                    </div>
                    <div className="card-body">
                        <DataTable
                            columns={columns}
                            data={schemes}
                            customStyles={customStyles}
                            onRowClicked={onClickRow}
                            noHeader
                            pagination
                            paginationServer={true}
                            paginationServerOptions={{
                              persistSelectedOnPageChange: true
                            }}
                            paginationPerPage={sertifikasi.query.limit}
                            paginationTotalRows={sertifikasi.query.count}
                            onChangePage={(page) => {
                                dispatch(getSertifikasiAction({ ...sertifikasi.query , offset: (page-1)*sertifikasi.query.limit  }))
                            }}
                            onChangeRowsPerPage={(limit) => {
                                dispatch(getSertifikasiAction({ ...sertifikasi.query , limit: limit  }))
                            }}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}
export default DaftarUjianBaru