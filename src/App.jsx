import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const HomePage = lazy(() => import('./components/home/HomePage'))
const RegisterPage = lazy(() => import('./components/register/RegisterPage'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>} >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/pemegang-sertifikat" component={HomePage} />
          <Route path="/Petunjuk" component={HomePage} />
          <Route path="/registrasi" component={RegisterPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
