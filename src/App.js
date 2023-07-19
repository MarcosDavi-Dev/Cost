import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home.Js';
import Company from './components/pages/Company.JS';
import Contact from './components/pages/Contact.JS';
import NewProject from './components/pages/Newproject';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>}>
          <Home />
        </Route>
        <Route exact path='/company'element={<Company/>}>
          <Company />
        </Route>
        <Route exact path='/contact'element={<Contact/>}>
          <Contact />
        </Route>
        <Route exact path='/newproject'element={<NewProject/>}>
          <NewProject />
        </Route>
        </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;
