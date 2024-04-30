import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import CategoryDesription from './CategoryDesription';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './Error';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cat' element={<Category />} />
          <Route path='/cat/:categoryName' element={<CategoryDesription />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router >
    </>);
}

export default App;
