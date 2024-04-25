import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
   //const [isActive, setIsActive] = useState(false);
   return (
      <>
         <nav>
            <ul>
               <li>
                  <Link to="/">TerraTrade</Link>
               </li>
               <li>
                  <Link to="/markets">Markets</Link>
               </li>
               <nav className='dropdown'>
                  <li>
                     <Link to="/trade">Trade</Link>
                  </li>
                  <ul>
                     <li>
                        <Link to="/trade/spot">Spot</Link>
                     </li>
                     <li>
                        <Link to="/trade/futures">Futures</Link>
                     </li>

                  </ul>

               </nav>

               <li>
                  <Link to="/news">News</Link>
               </li>
               <li>
                  <Link to="/portfolio">Portfolio</Link>
               </li>
               <li>
                  <Link to="/wallet">Wallet</Link>
               </li>
               <li>
                  <Link to="/academy">Academy</Link>
               </li>
            </ul>
         </nav>
      </>
   )
}

export default Navbar;
