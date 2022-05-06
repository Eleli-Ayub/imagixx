import './App.scss';
import Header from './components/Header';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Rates from './pages/Rates';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      {/* <Rates/> */}
      <Gallery/>
    </div>
  );
}

export default App;
