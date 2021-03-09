import { useEffect, useState } from 'react';
import MultipleChoice from './MultipleChoice'
import Essay from './Essay'
import { createUseStyles } from 'react-jss'
import { startExamAPI ,detailQuestionExamAPI} from '../../../redux/api/exam.api';
import { useSelector } from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
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
    let params = useParams();
    let history = useHistory();
    const [state, setState] = useState({
        firstRender: true,
        loading: true,
        soal_ganda: [],
        soal_essay : [],
        answered: {},
        sisa_waktu : 0,
        waktu : "00 : 00 : 00"
    });
    const [ msgModal , setMsgModal ] = useState('');
    let actionCloseModal

    const getTime = passes => {
        if(state.sisa_waktu >= passes) {
            let hours = Math.floor((state.sisa_waktu - passes) / 3600);
            let minutes = Math.floor((state.sisa_waktu - passes) / 60) % 60;
            let seconds = (state.sisa_waktu - passes) % 60;
            hours = hours < 10 ? `0${hours}` : hours;
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;
    
            setState(prevState => {
                return {
                    ...prevState,
                    waktu: `${hours} : ${minutes} : ${seconds}`
                }
            })
        }
    } 
    
    useEffect(() => {
        if (state.firstRender) {
            startExamAPI(token, params.id).then(res => {
                setState(prevState => {
                    return {
                        ...prevState,
                        sisa_waktu: res.data.ujian_sisa_menit * 60
                    }
                })

                let passes = 0;
                setInterval(() => {
                    getTime(passes);
                    passes += 1
                }, 1000)

                detailQuestionExamAPI(token, params.id).then(res => {
                    setState(prevState => {
                        return {
                            ...prevState,
                            soal_ganda: (res.ujianasesijawaban).filter(v => v.question_type == 'multiple_option').sort((a,b) => a.urutan - b.urutan),
                            soal_essay: (res.ujianasesijawaban).filter(v => v.question_type == 'essay').sort((a,b) => a.urutan - b.urutan),
                            loading: false,
                            firstRender: false,
                        }
                    })
                })
            }).catch(err => {
                setMsgModal('Anda tidak terdaftar ujian ini atau ujian telah berakhir');
                actionCloseModal = () => history.push('/member/ujian-saya')
            })
        }
    })

    const doneExam = () => {
        if(window.confirm('Apa anda ingin mengakhiri ujian?')) {
            history.push('/member/ujian-saya')
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
                                <h5>Soal Pilihan Ganda</h5>
                                {(state.soal_ganda).map((v, i) => (
                                    <MultipleChoice title={`Soal Nomor ${i + 1}`} content={v.question} multipleChoice={v.options_label} id={v.id} key={v.id} defaultAnswer={v.user_answer} setState={setState} />
                                ))}
                                <h5 className='mt-4' >Soal Essay</h5>
                                {(state.soal_essay).map((v, i) => (
                                    <Essay title={`Soal Nomor ${i + 1}`} content={v.question} id={v.id} key={v.id} setState={setState} defaultAnswer={v.user_answer} />
                                ))}
                            </div>
                            <div className='col-md-4' >
                                <div className='sticky-top' >
                                    <div className='text-right' >
                                        <span className='btn bg-white p-0 pl-2' >
                                            <span className='mr-2'>Sisa waktu</span>
                                            <button className='btn btn-primary' > {state.waktu} </button>
                                        </span>
                                    </div>
                                    <div className='text-right' >
                                        <button className='btn btn-success mt-2' style={{ fontSize: '14px' }} onClick={doneExam} >Selesai Ujian</button>
                                    </div>
                                    <br />
                                    <div className='card ' >
                                        <strong className='card-header bg-white text-center py-2' > Soal Pilihan Ganda </strong>
                                        <div className='card-body d-flex flex-wrap' >
                                            {(state.soal_ganda).map((v, i) => (
                                                <button className={`btn btn-${(state.answered[v.id] || (v.user_answer && v.user_answer !== "")) ? 'success' : 'secondary ' + classes.noExamDefault} mr-2 mt-1`} > {i + 1} </button>
                                            ))}
                                        </div>
                                    </div>
                                    <br />
                                    <div className='card ' >
                                        <strong className='card-header bg-white text-center py-2' > Soal Essay </strong>
                                        <div className='card-body d-flex flex-wrap' >
                                            {(state.soal_essay).map((v, i) => (
                                                    <button className={`btn btn-${((state.answered[v.id] && state.answered[v.id] !== "") || (v.user_answer && v.user_answer !== "")) ? 'success' : 'secondary ' + classes.noExamDefault} mr-2 mt-1`} > {i + 1} </button>
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

