import { Carousel , Table } from 'react-bootstrap'
import { useState } from 'react'

const Skema = () => {
    const [ schemes , setScheme ] = useState([
        { no : 1 , skema : 'Supervisor Pengelolaan Sumber Daya Manusia' , unit: '29 unit' },
        { no : 2 , skema : 'Manager Pengelolaan Sumber Daya Manusia' , unit: '32 unit' },
        { no : 3 , skema : 'Training and Development Supervisor' , unit: '28 unit' },
        { no : 4 , skema : 'Industrial Relation Manager' , unit: '35 unit' },
        { no : 5 , skema : 'Talent Manager' , unit: '30 unit' }  
    ])


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
            <div className='container'>
                <h4 className='text-center my-3 my-lg-5' >Daftar Skema Sertifikasi</h4>
                <div className='d-flex align-items-center justify-content-between'>
                    <button className='btn' >Filter</button>
                    <div>
                        <input type='search' className='form-control border' placeholder='Cari data' />
                    </div>
                </div>
                <Table responsive bordered className='my-4 bg-white'>
                    <thead>
                        <tr className='bg-secondary text-white' >
                            <th className='text-center' >No</th>
                            <th >Skema Sertifikasi</th>
                            <th className='text-center' >Unit</th>
                            <th className='text-center' >Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            schemes.map( (scheme , index ) => (
                                <tr key={ index } >
                                    <td className='text-center' >{ scheme.no }</td>
                                    <td>{ scheme.skema }</td>
                                    <td className='text-center' >{ scheme.unit }</td>
                                    <td className='text-center' >
                                        <button className='btn btn-success'>Daftar Sekarang</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default Skema