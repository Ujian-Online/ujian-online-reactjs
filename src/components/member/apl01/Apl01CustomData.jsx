import TdTable from './Apl01Td'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
    tableHead: {
        background: 'rgb(40, 167, 69)',
        color: '#fff'
    }
})

const CustomDataComponents = ({ apl01 , isDisabled , refresh }) => {

    const classes = useStyles()
    return (
        <div className='table-responsive ' >
            <table className='table table-bordered '>
                <thead>
                    <tr className={classes.tableHead } >
                        <th scope="col" style={{minWidth: '200px' }} >Judul</th>
                        <th scope="col" className='text-center' style={{minWidth: '50px' }}  >Status</th> 
                        { isDisabled ? <th scope="col" width='300' >Data</th>  : <th scope="col" width='300' >Aksi</th>  }
                        <th scope="col" style={{minWidth: '50px' }} >Catatan</th> 
                    </tr>
                </thead>
                <tbody className='bg-white' >
                    {
                        (apl01.customData || []).map((cmData, key) => (
                            <TdTable customData={cmData} key={key} isDisabled={isDisabled} refresh={refresh} />
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default CustomDataComponents
