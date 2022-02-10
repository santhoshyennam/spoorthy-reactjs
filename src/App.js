import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import FacultyPage from './Pages/FacultyPage';
import CoursePage from './Pages/CoursePage';
import PricePage from './Pages/PricePage';
import ContactPage from './Pages/ContactPage';
function App() {
  return (
  <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path='/about' element={< AboutPage />}></Route>
          <Route exact path='/contact' element={< ContactPage />}></Route>
          <Route exact path='/course' element={< CoursePage />}></Route>
          <Route exact path='/faculty' element={< FacultyPage />}></Route>
          <Route exact path='/price' element={< PricePage />}></Route>
        </Routes>
        </Router>
      <Footer />
      {/* <Loader /> */}
</div>
  );
}

export default App;
