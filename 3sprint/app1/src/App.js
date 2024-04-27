import './App.css';
import Header from './Header';
import UserId from './UserId';
import About from './About';
import Main from './Main';
import Users from './Users';


import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>

          <Route exact path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:userName' element={<UserId />} />
          {/* <Route element={<Error />} /> */}
        </Routes>

      </Router>
    </>);
}

export default App;
