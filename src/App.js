import './App.scss';
import Header from './components/Header';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Rates from './pages/Rates';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Rates' element={<Rates/>}/>
          <Route path='/Gallery' element={<Gallery/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
