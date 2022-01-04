import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Novedades from "./pages/Novedades";
import Footer from "./components/layout/Footer";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" exact element={<About />} />
        <Route path="/Contact" exact element={<Contact />} />
        <Route path="/Novedades" exact element={<Novedades />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
