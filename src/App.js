import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';

import Market from './Market/Market';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Roost from './Container/Roost/Roost'
import Roostr from './Container/Roostr/Roostr'
import ChiknFaq from './Components/Wallet/ChiknFaq/ChiknFaq'
import Chikn from './Components/Wallet/Chikn/Chikn'
import Table from './Components/Table/Table'
import Tiles from './Components/Tiles/Tiles'
import Leaderborder from './Components/Leaderborder/Leaderborder';
import ChiknCard from './Components/Wallet/Chikncard/Chikncard'
import Plfarm from './Components/Plfarm/Plfarm'
import Swap from './Container/Swap/Swap'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/ChiknRoost' element={<Roost />} />
        <Route path='/RoostrRoost' element={<Roostr />} />
        <Route path='/WalletChikn' element={<>
          <ChiknCard selected = 'CHIKN'/>
          <ChiknFaq />
        </>} />
        <Route path='/WalletRoostr' element={<>
          <ChiknCard  selected = 'ROOSTR' />
          <ChiknFaq />
        </>} />
        <Route path='/WalletFarmland' element={<>
          <ChiknCard selected = 'FARMLAND' />
          <ChiknFaq />
        </>} />
        <Route path='/LpFarm' element={<Plfarm />} />
        <Route path='/Tiles' element={<Tiles />} />
        <Route path='/Leaderboard' element={<Leaderborder />} />
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
