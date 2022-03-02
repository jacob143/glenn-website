import React from 'react'; 
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About'
import Contact from './pages/ContactPage/Contact'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop/>
        <Navbar />
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/About" exact element={<About/>} />
            <Route path="/Contact" exact element={<Contact/>} />
          </Routes>
          <Footer/>
    </Router>
  );
}

export default App;
