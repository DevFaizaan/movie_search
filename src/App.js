import './App.css';
import FilmRequest from './component/FilmRequest';
import Contact from './component/Contact';
import User from './component/User';
import Details from './component/Details';
import { BrowserRouter, Link, Route, Routes, Router } from 'react-router-dom';
import ColorSchemesExample from './component/Navbar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ColorSchemesExample />
        <FilmRequest />
        {/* <Film /> */}
        {/* <div className='navContainer'>
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
          </div> */}
        <Routes>
          <Route path='/User/:id' element={<User />} />
          <Route exact path='/User' element={<User />} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='/FilmRequest' element={<FilmRequest />} />
          <Route path='/details/:imdbID' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
