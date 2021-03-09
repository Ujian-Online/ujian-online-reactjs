import { useEffect, useState } from 'react';
import MultipleChoice from './MultipleChoice'
import Essay from './Essay'
import { createUseStyles } from 'react-jss'
import { DetailUjian, submitUjian } from '../../../redux/api/ujian.api';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import * as types from '../../../redux/types/ujian.type';
import { Spinner , Modal } from 'react-bootstrap'

const useStyles = createUseStyles({
    noExamDefault: {
        background: '#ccc',
        border: 0,
        color: '#000',
    }
})

const Exam = () => {
    const classes = useStyles();
    const token = useSelector(state => state.auth.token);
    const ujianReducer = useSelector(state => state.ujian);
    let params = useParams();
    let dispatch = useDispatch();
    let history = useHistory();
    const [state, setState] = useState({
        firstRender: true,
        loading: true,
        soal_ganda: [],
        soal_essay: [],
    });
    const [ msgModal , setMsgModal ] = useState('');
    let actionCloseModal

    useEffect(() => {
        if (state.firstRender) {
            DetailUjian(token, params.id).then(res => {
                setState(prevState => {
                    return {
                        ...prevState,
                        soal_ganda: (res.ujianasesijawaban).filter(v => v.question_type == 'multiple_option').sort((a, b) => a.urutan - b.urutan),
                        soal_essay: (res.ujianasesijawaban).filter(v => v.question_type == 'essay').sort((a, b) => a.urutan - b.urutan),
                        loading: false,
                        firstRender: false
                    }
                })
                if (ujianReducer.soal_id !== params.id) {
                    dispatch({
                        type: types.SET_SOAL_ID,
                        id: params.id
                    })
                    dispatch({
                        type: types.CLEAR_ANWSER
                    })
                }
            }).catch(err => {
                setMsgModal('Anda tidak terdaftar ujian ini atau ujian telah berakhir');
                actionCloseModal = () => history.push('/member/ujian-saya')
            })
        }
    })

    const onSubmit = async () => {
        if (window.confirm('Apa anda yakin untuk menyelesaikan ujian nya?')) {
            let success = [];
            for (const index of Object.keys(ujianReducer.answer)) {
                const data = {
                    "id": index,
                    "answer": ujianReducer.answer[index]
                };
                await submitUjian(token, data).then(res => success.push(res))
            }
            if (success.length !== Object.keys(ujianReducer.answer).length) {
                setMsgModal(`Terjadi kesalahan, mohon untuk submit jawaban sekali lagi!
                            ${success.length} || ${Object.keys(ujianReducer.answer).length}`);
            } else {
                dispatch({
                    type: types.CLEAR_ANWSER
                })
                setMsgModal('Terimakasih sudah menyelesaikan Ujian');
                actionCloseModal = () => history.push('/member/ujian-saya')
            }
        }
    }

    

    const renderModal = () => (
        <Modal show={msgModal !== ''} onHide={() => {
                setMsgModal('') 
                actionCloseModal && actionCloseModal()
            }} className='rounded' >
            <Modal.Header className='border-0' closeButton style={{ height: '10px' , padding: '2px 10px' }} >
            </Modal.Header>
            <Modal.Body className='text-center'>
                { msgModal }
            </Modal.Body>
        </Modal>
    )

    return (
        <div className='container my-4' >
            {state.loading ? (<div className='text-center' >
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>) :
                (
                    <>
                        <div className='row'>
                            <div className='col-md-8'>
                                <h5 onClick={() => console.log(ujianReducer)}>Soal Pilihan Ganda</h5>
                                {(state.soal_ganda).map((v, i) => (
                                    <MultipleChoice title={`Soal Nomor ${i + 1}`} content={v.question} multipleChoice={v.options_label} id={v.id} key={v.id} />
                                ))}
                                <h5 className='mt-4' >Soal Essay</h5>
                                {(state.soal_essay).map((v, i) => (
                                    <Essay title={`Soal Nomor ${i + 1}`} content={v.question} id={v.id} key={v.id} />
                                ))}
                            </div>
                            <div className='col-md-4' >
                                <div className='sticky-top' >
                                    <div className='text-right' >
                                        <span className='btn bg-white p-0 pl-2' >
                                            <span className='mr-2'>Sisa waktu</span>
                                            <button className='btn btn-primary' >59:33</button>
                                        </span>
                                    </div>
                                    <div className='text-right' >
                                        <button className='btn btn-success mt-2' style={{ fontSize: '14px' }} onClick={onSubmit} >Selesai Ujian</button>
                                    </div>
                                    <br />
                                    <div className='card ' >
                                        <strong className='card-header bg-white text-center py-2' > Soal Pilihan Ganda </strong>
                                        <div className='card-body d-flex flex-wrap' >
                                            {(state.soal_ganda).map((v, i) => (
                                                <button className={`btn btn-${ujianReducer.answer[v.id] ? 'success' : 'secondary ' + classes.noExamDefault} mr-2 mt-1`} > {i + 1} </button>
                                            ))}
                                        </div>
                                    </div>
                                    <br />
                                    <div className='card ' >
                                        <strong className='card-header bg-white text-center py-2' > Soal Essay </strong>
                                        <div className='card-body d-flex flex-wrap' >
                                            {(state.soal_essay).map((v, i) => (
                                                <button className={`btn btn-${(ujianReducer.answer[v.id] && ujianReducer.answer[v.id] !== "") ? 'success' : 'secondary ' + classes.noExamDefault} mr-2 mt-1`} > {i + 1} </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                )}
                {renderModal() }
        </div>
    )
}
export default Exam

