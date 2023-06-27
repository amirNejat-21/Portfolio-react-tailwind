import './App.css';

import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skilles from './components/Skilles';

function App() {
  return (
   <>
   <Header/>
   <Banner/>
   <Skilles/>
      <Projects/>
      <Contact/>
      <Footer/>
   </>
  );
}

export default App;
