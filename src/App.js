import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRoute } from './config/appRoute';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    
   <>
   <AppRoute/>
   </>
  );
}

export default App;
