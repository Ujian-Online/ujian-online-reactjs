import { lazy, Suspense } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Switch, Route } from "react-router-dom";
const MyExam = lazy(() => import('./exam/MyExam'))
const MyExamDetail = lazy(() => import('./exam/MyExamDetail'))
const Exam = lazy(() => import('./exam/Exam'))
const SkemaDetail = lazy(() => import('./SkemaDetail'))
const Main = lazy(() => import('./Main'))
const DaftarUjianBaru = lazy(() => import('./DaftarUjianBaru'))
const UploadPembayaran=lazy(()=>import('./uploadBuktiPembayaran/uploadBuktiPage'))
const UploadPembayaranSukses=lazy(()=>import('../success/SuccessInvoice'))
const DaftarUjianPage=lazy(()=>import('./daftarUjian/DaftarUjianPage'))
const DaftarUjianSukses=lazy(()=>import('../success/SuccessRegisterSertifikasi'))
const MenungguPembayaran = lazy(()=>import('./MenungguPembayaran/MenungguPembayaran'))
const ViewApl02 =lazy(()=>import('./apl02/Apl02Form'))
const ViewApl01 = lazy(()=>import('./apl01/Apl01Form'))

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
                        <Route path='/member/ujian-baru' component={DaftarUjianBaru} />
                        <Route path='/member/Upload-Pembayaran-detail' component={UploadPembayaran} />
                        <Route path='/member/upload-bukti-pembayaran-detail/sukses' component={UploadPembayaranSukses}/>
                        <Route path='/member/daftar-ujian/sukses' component={DaftarUjianSukses} />
                        <Route path='/member/daftar-ujian' component={DaftarUjianPage} />
                        <Route path="/member/menunggu-pembayaran" component={MenungguPembayaran}/>
                        {/* <Route path='/member/isi/apl02' component={}/> */}
                        <Route path='/member/isi/apl02' component={ViewApl02} />
                        <Route path='/member/apl-01' component={ViewApl01} />
                    </Switch>
                </Suspense>
            </Main>
        </div>
    )
}

export default MemberPage