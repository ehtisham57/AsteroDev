import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/MainNav';
import HomeMainHead from './components/HomeComponents/HomeMainHead';
import HomeCardSec from './components/HomeComponents/HomeCardSec';
import HomeTechnologysec from './components/HomeComponents/HomeTechnologysec';
function App() {
  return (
   <>
   <MainNav />
   <HomeMainHead />
   <HomeCardSec />
   <HomeTechnologysec />
   </>
  );
}

export default App;
