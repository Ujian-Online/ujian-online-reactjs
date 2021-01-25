import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const HomePage = lazy(() => import('./components/home/HomePage'))
const MemberPage = lazy(() => import('./components/member/MemberPage'))
const RegisterPage = lazy(() => import('./components/register/RegisterPage'))
const LoginPage = lazy(()=> import ('./components/login/LoginPage'))
const SuccessRegister = lazy(()=> import ('./components/success/SuccessRegister'))
const VerifikasiAkun=lazy(()=>import('./components/success/VerifikasiAkun'))
const ResendEmail =lazy(()=>import('./components/success/ResendEmail'))
const SuccessRegisterUjiSertifikasi =lazy(()=> import('./components/success/SuccessRegisterSertifikasi'))
const SuccessInvoice = lazy(()=>import ('./components/success/SuccessInvoice'))
const Finish =lazy(()=> import ('./components/success/Finish'))
const ResetPassword=lazy(()=>import ('./components/resetPassword/ResetPage'))
const ForgetPassword=lazy(()=>import ('./components/lupaPassword/ForgetPage'))
const SuccessReset=lazy(()=>import ('./components/success/SuccessReset'))
const SuccessForget=lazy(()=>import('./components/success/SuccessForget'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>} >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/skema/:id" component={HomePage} />
          <Route path="/pemegang-sertifikat" component={HomePage} />
          <Route path="/Petunjuk" component={HomePage} />
          <Route path="/registrasi" component={RegisterPage} />
          <Route path="/verifikasi-akun" component={VerifikasiAkun}/>
          <Route path="/resend-email" component={ResendEmail}/>
          <Route path="/login" component={LoginPage} />
          <Route path="/reset-password" component={ResetPassword}/>
          <Route path="/forget-password" component={ForgetPassword}/>
          <Route path="/sukses-register" component={SuccessRegister}/>
          <Route path="/sukses-register-uji-sertifikasi" component={SuccessRegisterUjiSertifikasi} />
          <Route path="/sukses-lupa-password" component={SuccessRegister} />
          <Route path="/sukses-reset-password" component={SuccessReset} />
          <Route path="/Pemesanan-berhasil" component={SuccessInvoice}/>
          <Route path="/selesai" component={Finish}/>
          <Route path="/member" component={MemberPage}/>
          <Route path="/password/reset" component={ForgetPassword}/>
          <Route path="/sukses-ubah-password" component={SuccessForget} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
