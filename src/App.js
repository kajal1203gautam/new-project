import logo from './logo.svg';
import './App.css';
import { Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' exact element={<Home />}></Route>
    <Route path='/about/:id/:userId' element={<About />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
   </Routes>
   </>
  );
}

export default App;
