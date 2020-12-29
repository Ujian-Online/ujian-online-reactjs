import { Carousel , Table } from 'react-bootstrap'
import { useState } from 'react'
import MUIDataTable from 'mui-datatables'

const Skema = () => {
    const [ schemes , setScheme ] = useState([
        { no : 1 , skema : 'Supervisor Pengelolaan Sumber Daya Manusia' , unit: '29 unit' },
        { no : 2 , skema : 'Manager Pengelolaan Sumber Daya Manusia' , unit: '32 unit' },
        { no : 3 , skema : 'Training and Development Supervisor' , unit: '28 unit' },
        { no : 4 , skema : 'Industrial Relation Manager' , unit: '35 unit' },
        { no : 5 , skema : 'Talent Manager' , unit: '30 unit' }  
    ])

    const columns = [
        { name : 'no' , label : 'No' },
        { name : 'skema' , label : 'Skema' },
        { name : 'unit' , label : 'Unit' },
    ];

    const options = {
        viewColumns : false,
        download : false,
        filter : false,
        print : false,
        selectableRows : 'none'
    };

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
                <MUIDataTable
                    title='Daftar Skema Sertifikasi'
                    className='mb-lg-5'
                    data={ schemes }
                    columns={columns}
                    options={options}
                    />
                 </div>
        </>
    )
}
export default Skema