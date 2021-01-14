import { useState } from 'react'
import DataTable from 'react-data-table-component'
import Footer from './Footer';

const SkemaDetail = () => {

    const [ kompetensi , setKompetensi ] = useState([
        { kode_unit : 'AB.1000.01' , unit_kompetensi : 'Menyusun Intervensi Interpersonal' },
        { kode_unit : 'AB.1000.02' , unit_kompetensi : 'Menyusun Intervensi Interpersonal' },
        { kode_unit : 'AB.1000.03' , unit_kompetensi : 'Menyusun Intervensi Interpersonal' },
        { kode_unit : 'AB.1000.04' , unit_kompetensi : 'Menyusun Intervensi Interpersonal' },
        { kode_unit : 'AB.1000.05' , unit_kompetensi : 'Menyusun Intervensi Interpersonal' },
    ])

    const columns = [
        { selector : 'kode_unit' , name : 'Kode Unit' , sortable : true },
        { selector : 'unit_kompetensi' , name : 'Unit Kompetensi' , sortable : true },
    ];

    return (
        <>
        <div className='container' >
            <div className='bg-white ml-auto mr-auto py-3 px-3 my-5' >
                <form>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Kode Skema</label>
                        <div class="col-sm-9">
                            <input type="text" disabled class="form-control" value='SKM.MSDM.01' />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Judul Skema</label>
                        <div class="col-sm-9">
                            <input type="text" disabled class="form-control" value='Supervisor Pengelolaan Sumber Daya Manusia' />
                        </div>
                    </div>
                </form>
            </div>
             <DataTable
                title='DAFTAR UNIT KOMPETENSI'
                columns={columns}
                data={kompetensi}
                button={true} />
            <br />
            <div className="form-group mt-3 col-md-3 col-sm-5 mr-auto ml-auto mb-5">
                <button type="submit" className="btn btn-primary btn-block ">Daftar
                </button>
            </div>
        </div>
        <Footer/>
    </>
    )
}

export default SkemaDetail
