import { lazy, Suspense } from 'react'
import Navbar from './Navbar'
import { Switch, Route } from "react-router-dom";
const MyExam = lazy(() => import('./exam/MyExam'))
const MyExamDetail = lazy(() => import('./exam/MyExamDetail'))
const Exam = lazy(() => import('./exam/Exam'))
const SkemaDetail = lazy(() => import('./SkemaDetail'))
const Main = lazy(() => import('./Main'))
const DaftarUjian = lazy(() => import('./DaftarUjianBaru'))
const UploadPembayaran=lazy(()=>import('./uploadBuktiPembayaran/uploadBuktiPage'))
const UploadPembayaranSukses=lazy(()=>import('../success/SuccessInvoice'))

const MemberPage = () => {
    return(
        <div className='container-fluid bg-light'>
            <Navbar />
            <Main>                
                <Suspense fallback={<div className='d-flex justify-content-center w-100 mt-5' >Loading ...</div>}>
                    <Switch>
                        <Route  exact path='/member' component={MyExam} />
                        <Route  exact path='/member/ujian-saya' component={MyExam} />
                        <Route  exact path='/member/ujian-saya/:id' component={MyExamDetail} />
                        <Route  exact path='/member/ujian-saya/:id/soal' component={Exam} />
                        <Route  path='/member/detail-skema-sertifikasi/:id' component={SkemaDetail} />
                        <Route path='/member/ujian-baru' component={DaftarUjian} />
                        <Route path='/member/Upload-Pembayaran-detail' component={UploadPembayaran} />
                        <Route path='/member/upload-bukti-pembayaran-detail/sukses' component={UploadPembayaranSukses}/>
                    </Switch>
                </Suspense>
            </Main>
        </div>
    )
}

export default MemberPage