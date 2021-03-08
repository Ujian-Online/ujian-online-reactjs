import TdTable from './Apl01Td'


const CustomDataComponents = ({ apl01 , isDisabled , refresh }) => {

    return (
        <div className='table-responsive ' >
            <table className='table table-bordered '>
                <thead>
                    <tr >
                        <th scope="col" >Judul</th>
                       <th scope="col" width='300' >Status</th> 
                        { isDisabled ? <th scope="col" width='300' >Data</th>  : <th scope="col" width='300' >Aksi</th>  }
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
