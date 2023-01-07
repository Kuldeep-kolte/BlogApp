import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import MainHeader from './components/MainHeader';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Bollywood from './components/Bollywood';
import Technology from './components/Technology';
import Hollywood from './components/Hollywood';
import Fitness from './components/Fitness';
import Food from './components/Food';
import Home from './components/Home';
import NextPage from './components/NextPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Bollywood" element={<Bollywood />}></Route>
          <Route path="/Technology" element={<Technology />}></Route>
          <Route path="/Hollywood" element={<Hollywood />}></Route>
          <Route path="/Fitness" element={<Fitness />}></Route>
          <Route path="/Food" element={<Food />}></Route>
          <Route path='/NextPage' element={<NextPage />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
