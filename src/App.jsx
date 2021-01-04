import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const HomePage = lazy(() => import('./components/home/HomePage'))
const RegisterPage = lazy(() => import('./components/register/RegisterPage'))
const LoginPage = lazy(()=> import ('./components/login/LoginPage'))
const ForgetPage = lazy(()=> import('./components/lupaPassword/ForgetPage'))
const SuccessRegister = lazy(()=> import ('./components/success/SuccessRegister'))
const SuccessRegisterUjiSertifikasi =lazy(()=> import('./components/success/SuccessRegisterSertifikasi'))
const SuccessInvoice = lazy(()=>import ('./components/success/SuccessInvoice'))
const Finish =lazy(()=> import ('./components/success/Finish'))

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
          <Route path="/login" component={LoginPage} />
          <Route path='/forget-Password' component={ForgetPage} />
          <Route path="/sukses-register" component={SuccessRegister}/>
          <Route path="/sukses-register-uji-sertifikasi" component={SuccessRegisterUjiSertifikasi} />
          <Route path="/Pemesanan-berhasil" component={SuccessInvoice}/>
          <Route path="/selesai" component={Finish}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
