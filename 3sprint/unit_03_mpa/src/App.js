import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cat' element={<Category />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </Router >
    </>);
}

export default App;
