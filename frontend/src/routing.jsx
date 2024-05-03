import { Route, Routes } from 'react-router-dom';

import Academy from './pages/academy.jsx';
import Dashboard from './pages/dashboard.jsx';
import Login from './pages/login.jsx';
import Markets from './pages/markets.jsx';
import News from './pages/news.jsx';
import Portfolio from './pages/portfolio.jsx';
import Trade from './pages/trade.jsx';
import Wallet from './pages/wallet.jsx';


function Routing() {

   return (
      <>
         <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/academy" element={<Academy />} />
            <Route path='/login' element={<Login />} />
            <Route path='/markets' element={<Markets />} />
            <Route path='/news' element={<News />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/trade' element={<Trade />} />
            <Route path='/trade/spot' element={<Trade />} />
            <Route path='/trade/futures' element={<Trade />} />
            <Route path='/wallet' element={<Wallet />} />
         </Routes>
      </>
   )
}

export default Routing;