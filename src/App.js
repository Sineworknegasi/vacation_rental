import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Hero from './Components/Hero/Hero';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';

function App() {
  return (
    <>
     <Header/>
     <Hero/>
     <Services/>
    </>
  );
}

export default App;
