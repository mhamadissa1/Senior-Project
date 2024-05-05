import { Link } from "react-router-dom";

import LogoSVG from "../../assets/icons/logoSVG.jsx";

import DropdownLink from "../dropdown/dropdownLink.jsx";
import UnderlineLink from "../underlineLink.jsx";

import TradeContent from "../dropdown/TradeContent.jsx";

function Navbar() {
  return (
    <> 
      <div className="flex flex-row items-center gap-4">
        <div>
          <Link
            className="text-primary text-2xl h-4 flex flex-row items-center"
            to="/"
          >
            <LogoSVG />
            TerraTrade
          </Link>
        </div>

        <div>
          <ul className="hidden lg:flex flex-row gap-4">
            <li>
              <Link
                className="hover:text-primary text-sm"
                to="/markets"
              >
                <UnderlineLink>Markets</UnderlineLink>
                
              </Link>
            </li>
            
            <li>
              <DropdownLink href="/trade" DropdownContent={TradeContent}>
                Trade
              </DropdownLink>
              
            </li>
            <li>
              <Link
                className="hover:text-primary text-sm"
                to="/news"
              >
                <UnderlineLink>News</UnderlineLink>
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-primary text-sm"
                to="/portfolio"
              >
                <UnderlineLink>Portfolio</UnderlineLink>
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-primary text-sm"
                to="/wallet"
              >
                <UnderlineLink>Wallet</UnderlineLink>
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-primary text-sm"
                to="/academy"
              >
                <UnderlineLink>Academy</UnderlineLink>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
