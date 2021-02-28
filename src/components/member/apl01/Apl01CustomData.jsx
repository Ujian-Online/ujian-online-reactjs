import { useState, useEffect } from "react";
import ImageUploader from 'react-images-upload';

import { Modal } from 'react-bootstrap'
import TdTable from './Apl01Td'


const CustomDataComponents = ({ apl01 , isDisabled }) => {


    const [show , setShow ] = useState(false);
    const [modalState , setModalState ] = useState({});


    const openModal = (title , value , onChange ) => {
        setModalState({ title , value , onChange })
        setShow(true)
    }

    const renderModal = () => {
        return (
            <Modal show={show} onHide={() => setShow(false)}>
                
                <h6 className='p-3' >{modalState.title || '' }</h6>
                <div className='d-flex justify-content-center flex-column align-items-center ' >
                    <ImageUploader
                        withIcon={false}
                        withPreview={true}
                        buttonText='Choose images'
                        onChange={(pictures) => {
                            setModalState({...modalState , value : '' })
                            modalState.onChange(pictures[0]) 
                        }}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={52428800}
                        singleImage={true}
                        style={{ width: '70%' }}
                    />                    
                {modalState.value && <img src={modalState.value } style={{ maxWidth: 300 , maxHeight: 300 }} /> || '' }
                </div>
                <div className='p-3 d-flex justify-content-end' >
                    <button className='btn btn-default' onClick={() => setShow(false)} >Selesai</button>
                </div>
            </Modal>
        )
    }



    return (
        <div className='table-responsive ' >
            <table className='table table-bordered '>
                <thead>
                    <tr>
                        <th scope="col" >Judul</th>
                        <th scope="col"  >Jenis Data</th>
                        {isDisabled ? <th scope="col" width='300' >Status</th> : <th scope="col" width='300' >Aksi</th> } 
                    </tr>
                </thead>
                <tbody className='bg-white' >
                    {
                        (apl01.customData || []).map((cmData, key) => (
                            <TdTable customData={cmData} key={key} openModal={openModal} isDisabled={isDisabled} />
                        ))
                    }

                </tbody>
            </table>
            {renderModal()}
        </div>
    )
}

export default CustomDataComponents
