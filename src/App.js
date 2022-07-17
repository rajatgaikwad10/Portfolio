
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import About from './containers/About';
import Resume from './containers/Resume';
import Portfolio from './containers/Portfolio';
import Contact from './containers/Contact';
import Skills from './containers/Skills';
function App() {
  return (
    <div className="App">
      {/*particles js*/}


      {/*navbar component */}
      <Navbar/>


      {/*main page content*/}
      <Routes>

        {/*create all routes */}
        <Route path="/Home" index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>

    </div>
  );
}

export default App;
