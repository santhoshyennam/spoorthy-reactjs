import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import FacultyPage from './Pages/FacultyPage';
import CoursePage from './Pages/CoursePage';
import ContactPage from './Pages/ContactPage';
import RegisterPage from './Pages/RegisterPage';
import ScannerPage from './Pages/ScannerPage';
import Notfound from './components/Notfound';
import SixthClassPage from './Pages/SixthClassPage';
import NinthClassPage from './Pages/NinthClassPage';

function App() {
  
  return (
  <div>
      <Header />
      <div class="body container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path='/about' element={< AboutPage />}></Route>
          <Route exact path='/contact' element={< ContactPage />}></Route>
          <Route exact path='/course' element={< CoursePage />}></Route>
          <Route exact path='/faculty' element={< FacultyPage />}></Route>
          {/* <Route exact path='/price' element={< PricePage />}></Route> */}
          <Route exact path='/register' element={< RegisterPage />}></Route>
          <Route exact path='/scanner' element={< ScannerPage />}></Route>
          <Route exact path='/sixth' element={< SixthClassPage />}></Route>
          <Route exact path='/ninth' element={< NinthClassPage />}></Route>
          <Route path="*" element={<Notfound/>} />
        </Routes>
        </Router>
        </div>
      <Footer />
      {/* <Loader /> */}
</div>
  );
}

export default App;
