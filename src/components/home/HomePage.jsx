import { lazy, Suspense } from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
import { Switch, Route } from "react-router-dom";
const Skema = lazy(() => import('./Skema'))
const SkemaDetail = lazy(() => import('./SkemaDetail'))
const DataPemegang = lazy(() => import('./DataPemegang'))
const Petunjuk = lazy(() => import('./Petunjuk'))

const HomePage = () => {
    return (
        <div className='container-fluid bg-light' style={{ overflowX: 'hidden' }} >
            <Navbar />
            <Main>                
                <Suspense fallback={<div className='d-flex justify-content-center w-100 mt-5' >Loading ...</div>}>
                    <Switch>
                        <Route  exact path='/' component={Skema} />
                        <Route  path='/skema/:id' component={SkemaDetail} />
                        <Route  path='/pemegang-sertifikat' component={DataPemegang} />
                        <Route  path='/petunjuk' component={Petunjuk} />
                    </Switch>
                </Suspense>
            </Main>
            <Footer />
        </div>
    )
}

export default HomePage