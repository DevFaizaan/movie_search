import './App.css';
import Film from './component/FilmRequest';
import Homepage from './component/Homepage';
import Contact from './component/Contact';
import User from './component/User';
import { BrowserRouter, Link, Route, Routes, Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <div className='navContainer'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/User'>Users</Link>
              </li>
              <li>
                <Link to='/Contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/User/:id' element={<User />} />
          <Route path='/User' element={<User />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
