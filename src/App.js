import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import Works from './components/works/Works';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { useGlobalContext } from './Context';

function App() {
  const { state}=useGlobalContext()
  const {darkMode}=state
  return (
    <div className="App" style={darkMode?{background:'black', color:'white'}: {background:'', color:'black'}}>
        <Intro/>
        <Services/>
        <Experience/>
        <Works/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
