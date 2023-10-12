import{ BrowserRouter,Routes,Route} from'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Index from './pages/index';
import About from './pages/About';
import Contact from './pages/Contact';


function Master (){
    return(
        < BrowserRouter >

        <NavBar/>
       
        <Routes>
        <Route path='/' Component={Index}  />
         <Route path='/about' Component={About } />
        <Route path='/contact' Component={ Contact}  />
        
        
        
        </Routes>
        <Footer/>
        
        
        </BrowserRouter>
         
    )

}
export default Master;