import {useState} from 'react';
import {useSelector} from 'react-redux';
import {answerQuestionAPI} from '../../../redux/api/exam.api';


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

const MultipleChoice = ({ title, content, multipleChoice, id, defaultAnswer, setState }) => {
    const classes = useStyles()
    const [answer, setAnswer] = useState(defaultAnswer)
    const token = useSelector(state => state.auth.token)

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
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <div className='d-flex flex-column p-2' >
                    {
                        choices.map(val => (
                            <label key={val.value} className='d-flex align-items-center mb-1 cursor-pointer '>
                                <input
                                    type='radio'
                                    name='soal'
                                    className='d-none'
                                    value={val.value}
                                    onClick={e => {
                                        answerQuestionAPI(token, id, e.target.value);
                                        setAnswer(e.target.value);
                                        setState(prevState => {
                                            return {
                                                ...prevState,
                                                answered : {
                                                    ...prevState.answered,
                                                    [id] : e.target.value
                                                }
                                            }
                                        })
                                    }} />
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
