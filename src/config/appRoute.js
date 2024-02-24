import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import MainNav from '../components/MainNav'
import { Services } from '../pages/Services'
import { Contact } from '../pages/Contact'
import Footer from '../components/Footer/Footer'
export const AppRoute = () => {
  return (
    <>
    <Router>
    <MainNav />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Services' element={<Services />}/>
            <Route path='/Contact' element={<Contact />}/>
        </Routes>
        <Footer />
    </Router>
    </>
  )
}
