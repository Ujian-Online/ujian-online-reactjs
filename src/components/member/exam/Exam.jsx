import MultipleChoice from './MultipleChoice'
import Essay from './Essay'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    noExamDefault: {
        background: '#ccc' ,
        border: 0 ,
        color: '#000' ,
    }
})

const Exam = () => {
    const classes = useStyles()

    return (
        <div className='container my-4' >
            <div className='row'>
                <div className='col-md-8'>
                    <h5>Soal Pilihan Ganda</h5>
                    <MultipleChoice title='Soal Nomor 1' />
                    <MultipleChoice title='Soal Nomor 2' />
                    <h5 className='mt-4' >Soal Essay</h5>
                    <Essay title='Soal Nomor 1' />
                    <Essay title='Soal Nomor 2' />
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
                        <button className='btn btn-success mt-2' style={{ fontSize: '14px' }} >Selesai Ujian</button>
                    </div>
                    <br />
                    <div className='card ' >
                        <strong className='card-header bg-white text-center py-2' > Soal Pilihan Ganda </strong>
                        <div className='card-body d-flex flex-wrap' >
                            <button className='btn btn-success mr-2 mt-1 ' >1</button>
                            <button className={`btn btn-secondary mr-2 mt-1 ${classes.noExamDefault}`} >2</button>
                            <button className={`btn btn-secondary mr-2 mt-1 ${classes.noExamDefault}`} >3</button>
                            <button className={`btn btn-secondary mr-2 mt-1 ${classes.noExamDefault}`} >4</button>
                            <button className={`btn btn-secondary mr-2 mt-1 ${classes.noExamDefault}`} >5</button>
                            <button className={`btn btn-secondary mr-2 mt-1 ${classes.noExamDefault}`} >6</button>
                            <button className={`btn btn-secondary mr-2 mt-1 ${classes.noExamDefault}`} >6</button>
                            <button className={`btn btn-secondary mr-2 mt-1 ${classes.noExamDefault}`} >7</button>
                            <button className={`btn btn-secondary mr-2 mt-1 ${classes.noExamDefault}`} >8</button>
                            <button className={`btn btn-secondary mr-2 mt-1 ${classes.noExamDefault}`} >9</button>
                            <button className={`btn btn-secondary mr-2 mt-1 ${classes.noExamDefault}`} >10</button>
                        </div>
                    </div>
                    <br />
                    <div className='card ' >
                        <strong className='card-header bg-white text-center py-2' > Soal Essay </strong>
                        <div className='card-body d-flex flex-wrap' >
                            <button className='btn btn-success mr-2 mt-1 ' >1</button>
                            <button className={`btn btn-secondary mr-2 mt-1 ${classes.noExamDefault}`} >2</button>
                            <button className={`btn btn-secondary mr-2 mt-1 ${classes.noExamDefault}`} >3</button>
                            <button className={`btn btn-secondary mr-2 mt-1 ${classes.noExamDefault}`} >4</button>
                            <button className={`btn btn-secondary mr-2 mt-1 ${classes.noExamDefault}`} >5</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Exam

