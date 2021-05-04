import { useState } from 'react'
import DataTable from 'react-data-table-component'
import Slider from "react-slick";
import Banner1 from '../../assets/banner-1.svg'
import Banner2 from '../../assets/banner-2.svg'
import { MdSearch } from 'react-icons/md'
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

const Skema = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const sertifikasi = useSelector(state => state.sertifikasi)
    const [schemes, setScheme] = useState([])
    
    
    useEffect(() => {
        const initGetSertifikasi = () => {
            dispatch(getSertifikasiAction(sertifikasi.query))
        }
        initGetSertifikasi()
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
    }, [sertifikasi.sertifikasi,sertifikasi])


    const columns = [
        { selector: 'no', name: 'No', sortable: true },
        { selector: 'id', name: 'id', omit: true },
        { selector: 'nomor_skema', name: 'Nomor Skema', sortable: true },
        { selector: 'title', name: 'Judul', sortable: true },
    ]

    const [search, setSearch] = useState("");
    const onSearch = (e) => {
        e.preventDefault()
        dispatch(getSertifikasiAction({ ...sertifikasi.query, search }))
    }

    const subHeaderComponent = () => {
        return (<form className="input-group col-md-4 col-sm-6 ml-auto mt-3" onSubmit={onSearch} >
            <input type="text"
                className="form-control px-3 py-2"
                placeholder="Search ..."
                value={search} onChange={(e) => setSearch(e.target.value)} />
            <div className="input-group-append ml-auto">
                <button className="btn btn-outline-secondary" type="button" >
                    <MdSearch />
                </button>
            </div>
        </form>)
    }

    const onClickRow = (row) => {
        history.push(`/skema/${row.id}`)
    }
    var slidersettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className='w-100' >
                <Slider {...slidersettings}>
                    <div className='position-relative ' >
                        <img className='w-100' src={Banner1} alt='banner-1' />
                        <h2 className='text-white position-absolute d-none d-sm-inline ' style={{ top: '30%', left: '50px' }}  > Lembaga Sertifikasi Profesi</h2>
                        <h4 className='text-white position-absolute col-md-5 d-none d-sm-inline ' style={{ top: '45%', left: '35px', fontWeight: 300 }} > Manajemen dan pengembangan sumber daya manusia. </h4>
                    </div>
                    <div className='position-relative ' >
                        <img className='w-100' src={Banner2} alt='banner-2' />
                        <h2 className='position-absolute col-md-5 d-none d-sm-inline ' style={{ top: '30%', left: '50px', color: '#FFC001' }}  >
                            LSP MPSDM mampu melayani sertifikasi secara valid, reliabel, fleksibel dan adik
                        </h2>
                    </div>
                </Slider>
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
                    paginationServer={true}
                    paginationServerOptions={{
                        persistSelectedOnPageChange: true
                    }}
                    paginationPerPage={sertifikasi.query.limit}
                    paginationTotalRows={sertifikasi.query.count}
                    onChangePage={(page) => {
                        dispatch(getSertifikasiAction({ ...sertifikasi.query, offset: (page - 1) * sertifikasi.query.limit }))
                    }}
                    onChangeRowsPerPage={(limit) => {
                        dispatch(getSertifikasiAction({ ...sertifikasi.query , limit: limit  }))
                    }}
                />
            </div>
        </>
    )
}
export default Skema