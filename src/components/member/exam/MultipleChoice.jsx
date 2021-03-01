import {useSelector, useDispatch} from 'react-redux';
import * as types from '../../../redux/types/ujian.type';

import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
    option: {
        width: 25,
        height: 25
    },
    optionHightlight: {
        width: 25,
        height: 25,
        background: '#087afc',
        color: 'white'
    }
})

const MultipleChoice = ({ title, content, multipleChoice, id }) => {
    const classes = useStyles()
    const answer = useSelector(state => state.ujian.answer[id]);
    const dispatch = useDispatch();

    let choices = []
    Object.keys(multipleChoice).forEach(v => {
        choices.push({
            value: v,
            question: multipleChoice[v]
        })
    })

    return (
        <div className='card mt-2' >
            <h5 className='card-header bg-white' >
                {title}
            </h5>
            <div className='card-body' >
                <div className='border rounded p-2' >
                    {content}
                </div>
                <div className='d-flex flex-column p-2' >
                    {
                        choices.map(val => (
                            <label key={val.value} className='d-flex align-items-center mb-1 cursor-pointer '>
                                <input
                                    type='radio'
                                    name='soal'
                                    className='d-none'
                                    value={val.value}
                                    onClick={e => dispatch({
                                        type: types.SET_ANSWER,
                                        id,
                                        answer: e.target.value
                                    })} />
                                <span className={`rounded-circle border text-center mr-2 ${answer === val.value ? classes.optionHightlight : classes.option}`} >
                                    {val.value}
                                </span>
                                {val.question}
                            </label>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default MultipleChoice
