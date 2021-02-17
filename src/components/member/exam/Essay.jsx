import { createUseStyles } from 'react-jss'
import { useState } from 'react'

const Essay = ({ title, content, multipleChoice }) => {
    const [answer, setAnswer] = useState(null)
    content = (<span>
        Udang ronggeng memiliki duri-duri yang keras, terutama di bagian atas kepala dan antena. Badannya yang besar dilindungi kulit keras yang mengandung zat kapur dan mempunyai bentuk tubuh yang menyerupai belalang. Habitat hidup udang ini di perairan karang, suatu kawasan laut yang banyak terdapat karang-karang, terumbu karang, batuan granit, atau vulkanis.
        <br />
        Makna istilah kata vulkanis pada kutipan teks tersebut adalah ….
    </span>)

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
                        onChange={ (e) => setAnswer(e.target.value) } ></textarea>      
                </div>
            </div>
        </div>

    )
}

export default Essay
