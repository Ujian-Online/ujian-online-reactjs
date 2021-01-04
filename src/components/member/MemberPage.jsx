import { lazy, Suspense } from 'react'
import Navbar from './Navbar'
import { Switch, Route } from "react-router-dom";
const UjianSaya = lazy(() => import('./UjianSaya'))
const Main = lazy(() => import('./Main'))

const MemberPage = () => {
    return(
        <div className='container-fluid bg-light'>
            <Navbar />
            <Main>                
                <Suspense fallback={<div className='d-flex justify-content-center w-100 mt-5' >Loading ...</div>}>
                    <Switch>
                        <Route  exact path='/member' component={UjianSaya} />
                        <Route  exact path='/member/ujian-saya' component={UjianSaya} />
                    </Switch>
                </Suspense>
            </Main>
        </div>
    )
}

export default MemberPage