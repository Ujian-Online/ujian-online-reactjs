import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    container: {
        background: '#160D3C'
    }
})

const Footer = () => {
    const classes = useStyles()

    return (
        <footer className={`row text-white p-3 ${classes.container} pt-lg-4 pb-1`}  >
            <div className='col-md-4' >
                <h4>Lembaga Serifikasi Profesi</h4>
                <p className='text-muted'>
                    Lembaga Sertifikasi Profesi Manajemen Sumber Daya Manusia Nasional adalah Lembaga Serfikasi Profesi Pihak Ketiga, berkedudukan di Yogyakarta, Jawa Tengah.
                </p>
            </div>
            <div className='col-md-2' ></div>
            <div className='col-md-3' >
                <h4>Eksplorasi</h4>
                <ul className="list-unstyled text-muted" >
                    <li>Skema Sertifikasi</li>
                    <li>Data Pemegang Sertifikat</li>
                    <li>Petunjuk</li>
                </ul>
            </div>
            <div className='col-md-3' >
                <h4>Hubungi Kami</h4>
                <ul className="list-unstyled text-muted" >
                    <li>support@LSP.id</li>
                    <li>021 - 1012 - 2343</li>
                    <li>Lembaga Sertifikasi Profesi, Yogyakarta, Jawa Tengah</li>
                </ul>
            </div>
            <div className='col-12 text-center'>
            Copyright 2020 - All rights reserved - LSP
            </div>
        </footer>
    )
}

export default Footer