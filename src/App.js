import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';

import Market from './Market/Market';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/MarketChikn' element={<Market selected='CHIKN' />} />
        <Route path='/MarketRoostr' element={<Market selected='ROOSTR'/>} />
        <Route path='/MarketFarmLand' element={<Market selected='FARMLAND'/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
