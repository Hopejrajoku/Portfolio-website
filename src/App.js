
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import {Footer} from './components/Footer';
import Stars from './components/canvas/Stars'
import { Contact } from './components/Contact';



function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="">
        <Stars />
        <div>
        <Banner />
        </div>
      </div>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
