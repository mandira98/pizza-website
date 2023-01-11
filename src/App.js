
import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar.jsx";
import Footer from "../src/Components/Footer/Footer";
import Home from "../src/Components/Home/Home";
import Menu from "../src/Components/Menu/Menu";
import About from "../src/Components/About/About";
import Contact from "../src/Components/Contact/Contact";
import MenuItem from "../src/Components/Menu/MenuItem";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          
          <Route path="/menu" exact element={<Menu/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/" exact element={<Home/>} />
        </Routes>
        <MenuItem />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
