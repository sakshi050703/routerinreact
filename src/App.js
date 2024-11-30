import './App.css';
import Navbar from './Components/Layout/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Gallery from './Components/Pages/Gallery'
import Service from './Components/Pages/Service'
import Contact from './Components/Pages/Contact'
import Error from './Components/Pages/Error';
import Service1 from './Components/Pages/Service1';
import Service2 from './Components/Pages/Service2';
import Service3 from './Components/Pages/Service3';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/service' element={<Service />} >
            <Route path='/service/service1' element={<Service1 />} ></Route>
            <Route path='/service/service2' element={<Service2 />}></Route>
            <Route path='/service/service3' element={<Service3 />}></Route>
          </Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
