import { createUseStyles } from 'react-jss'
import { useState } from 'react'
const useStyles = createUseStyles({
    option: {
        width: 25,
        height: 25
    },
    optionHightlight: {
        width: 25,
        height: 25,
        background: '#087afc',
        color: '#087afc'
    }
})

const MultipleChoice = ({ title, content, multipleChoice }) => {
    const [answer, setAnswer] = useState(null)
    const classes = useStyles()
    content = (<span>
        Udang ronggeng memiliki duri-duri yang keras, terutama di bagian atas kepala dan antena. Badannya yang besar dilindungi kulit keras yang mengandung zat kapur dan mempunyai bentuk tubuh yang menyerupai belalang. Habitat hidup udang ini di perairan karang, suatu kawasan laut yang banyak terdapat karang-karang, terumbu karang, batuan granit, atau vulkanis.
        <br />
            Makna istilah kata vulkanis pada kutipan teks tersebut adalah ….
    </span>)

    multipleChoice = [
        { value: 'A', question: 'Memiliki sifat gunung berapi' },
        { value: 'B', question: 'Memiliki sifat gunung berapi' },
        { value: 'C', question: 'Memiliki sifat gunung berapi' },
        { value: 'D', question: 'Memiliki sifat gunung berapi' },
        { value: 'E', question: 'Memiliki sifat gunung berapi' },
    ]

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
                        multipleChoice.map(val => (
                            <label key={val.value} className='d-flex align-items-center mb-1 cursor-pointer '>
                                <input
                                    type='radio'
                                    name='soal'
                                    className='d-none'
                                    value={val.value}
                                    onClick={(e) => setAnswer(e.target.value)} />
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
