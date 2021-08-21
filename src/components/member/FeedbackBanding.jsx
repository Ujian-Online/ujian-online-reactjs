import {  useState } from 'react'

const Feedback = () => {
    const [stateForm, setStateForm] = useState({
        training: false,
    });
    return (
    
    <div className='container my-4 ' >
        <div className='row ' >
            <div className='col-12 ' >
                <div className='card p-2 ' >
                    <h4 className='text-center ' >Download dokumen</h4>
                    <div className='container mt-4 mt-md-5 ' >
                        <div className='row mt-2 d-flex justify-content-between' >
                            <div className='col-sm-6' >
                                <label className=' mb-0 ' >
                                Silahkan Download form feedback (Umpan Balik) di sini
                                </label>
                            </div>
                            <div className='col-sm-6 d-flex flex-wrap' >
                                <a href='https://s3.ap-southeast-1.amazonaws.com/s3.lsp-mpsdm.com/form/FR.AK.03.docx'>Download</a>
                            </div>
                        </div>
                        <div className='row mt-2' >
                            <div className='col-sm-6' >
                                <label className=' mb-0 ' >
                                   Keterangan
                                </label>
                            </div>
                            <div className='col-sm-6 d-flex flex-wrap' >
                                <label className=' mb-0 ' >
                                Isi form dan kirimkan ke alamat email lsp.mpsdm@gmail.com
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='container mt-4 mt-md-5 ' >
                        <div className='row mt-2 d-flex justify-content-between' >
                            <div className='col-sm-6' >
                                <label className=' mb-0 ' >
                                Silahkan Download form banding di sini
                                </label>
                            </div>
                            <div className='col-sm-6 d-flex flex-wrap' >
                                <a href='https://s3.ap-southeast-1.amazonaws.com/s3.lsp-mpsdm.com/form/FR.AK.04.docx'>Download</a>
                            </div>
                        </div>
                        <div className='row mt-2' >
                            <div className='col-sm-6' >
                                <label className=' mb-0 ' >
                                   Keterangan
                                </label>
                            </div>
                            <div className='col-sm-6 d-flex flex-wrap' >
                                <label className=' mb-0 ' >
                                Isi form dan kirimkan ke alamat email lsp.mpsdm@gmail.com
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}
export default Feedback
