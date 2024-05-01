import { useState } from 'react';
import { Link } from 'react-router-dom';

function Heading() {
   //const [isActive, setIsActive] = useState(false);
   return (
      <>
         <nav className='mx-128 my-16 inline-flex justify-between' >
            <ul
               className='list-none flex flex-row text-18 space-x-16 leading-tight'>
               <li className='flex'>
                  <Link
                     className='text-primary no-underline font-display' to="/">
                     TerraTrade
                  </Link>
               </li>
               <li className='flex'>
                  <Link className='text-primary-500 no-underline font-display' to="/markets">Markets</Link>
               </li>
               <nav className='dropdown'>
                  <li >
                     <Link className='text-primary-500 no-underline font-display' to="/trade">Trade </Link>
                  </li>
                  <ul className='list-none'>
                     <li>
                        <Link className='text-primary-500 no-underline font-display' to="/trade/spot">Spot</Link>
                     </li>
                     <li>
                        <Link className='text-primary-500 no-underline font-display' to="/trade/futures">Futures</Link>
                     </li>

                  </ul>

               </nav>

               <li className='flex justify-start'>
                  <Link className='text-primary-500 no-underline font-display' to="/news">News</Link>
               </li>
               <li className='flex justify-start'>
                  <Link className='text-primary-500 no-underline font-display' to="/portfolio">Portfolio</Link>
               </li>
               <li className='flex justify-start'>
                  <Link className='text-primary-500 no-underline font-display' to="/wallet">Wallet</Link>
               </li>
               <li className='flex justify-start'>
                  <Link className='text-primary-500 no-underline font-display' to="/academy">Academy</Link>
               </li>
            </ul>
         </nav >
         <div className='inline'>
            <button>click me</button>
         </div>

      </>
   )
}

export default Heading;
