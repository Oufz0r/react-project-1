import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Toper from './components/Toper';
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";


function App() {

  return (
    <>
      <div className="bodyContainer">
        <Toper mail="contact@prettyprint.fdr" phone="+336 000 000 00" horaires="Lundi - Vendredi / 9h - 17h" facebook="/" instagram="/" tiktok="/" />
        <Header />
        <Routes>
          {/* <Route path="/location/:locationId" element={<Location />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Apropos />} />
          {/* <Route path="*" element={<Lost />} /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
