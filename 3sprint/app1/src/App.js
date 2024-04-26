import './App.css';
import Header from './Header';
import UserId from './UserId';
import About from './About';
import Main from './Main';


import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        {/* <nav><li><Link to='/'>Main</Link></li></nav>
        <nav><li><Link to='/about'>About</Link></li></nav>
        <nav><li><Link to='/users'>Users</Link></li></nav> */}
        <Routes>
          <Route to='/' element={Main} />
          <Route path='/about' element={About} />
          <Route path='/users/:userName' element={UserId} />
        </Routes>
      </Router>
    </>);
}

export default App;
