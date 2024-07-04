import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Hero from './Components/Hero/Hero';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Apartment from './Components/Apartment/Apartment';

function App() {
  return (
    <>
     <Header/>
     <Hero/>
     <Services/>
     <Apartment/>
    </>
  );
}

export default App;
