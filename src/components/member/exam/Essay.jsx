import {useSelector, useDispatch} from 'react-redux';
import * as types from '../../../redux/types/ujian.type';

const Essay = ({ title, content, id }) => {
    const answer = useSelector(state => state.ujian.answer[id]);
    const dispatch = useDispatch();

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
                        onChange={ e => dispatch({
                            type: types.SET_ANSWER,
                            id,
                            answer: e.target.value
                        }) } ></textarea>      
                </div>
            </div>
        </div>

    )
}

export default Essay
