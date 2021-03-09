import {useState} from 'react';
import {useSelector} from 'react-redux';
import {answerQuestionAPI} from '../../../redux/api/exam.api';

const Essay = ({ title, content, id, setState, defaultAnswer }) => {
    const [answer, setAnswer] = useState(defaultAnswer)
    const token = useSelector(state => state.auth.token)

    return (
        <div className='card mt-2' >
            <h5 className='card-header bg-white' >
                {title}
            </h5>
            <div className='card-body' >
                <div className='border rounded p-2' >
                    {content}
                </div>
                <div className='d-flex flex-column mt-2' >
                    <textarea 
                        className='form-control p-2' 
                        placeholder='Ketik jawaban kamu disini...' 
                        rows='3' 
                        value={answer}
                        onChange={ e => {
                            setAnswer(e.target.value)
                            setState(prevState => {
                                return {
                                    ...prevState,
                                    answered : {
                                        ...prevState.answered,
                                        [id] : e.target.value
                                    }
                                }
                            });
                        } }
                        onBlur={() => {
                            answerQuestionAPI(token, id, answer)
                        }}
                        ></textarea>      
                </div>
            </div>
        </div>

    )
}

export default Essay
