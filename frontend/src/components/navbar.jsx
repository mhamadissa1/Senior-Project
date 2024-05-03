import Logo from "../assets/icons/logo.jsx";
import { Link } from "react-router-dom";
import DropdownLink from "./dropdownLink.jsx";
import UnderlineLink from "./underlineLink.jsx";
import TradeContent from "./TradeContent.jsx";

function Navbar() {
  return (
    <>
      <div className="flex flex-row items-center gap-7">
        <div>
          <Link
            className="text-primary text-2xl h-4 flex flex-row items-center"
            to="/"
          >
            <Logo />
            TerraTrade
          </Link>
        </div>

        <div>
          <ul className="flex flex-row gap-4">
            <li>
              <Link
                className="hover:text-primary text-base"
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
                className="hover:text-primary text-base"
                to="/news"
              >
                <UnderlineLink>News</UnderlineLink>
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-primary text-base"
                to="/portfolio"
              >
                <UnderlineLink>Portfolio</UnderlineLink>
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-primary text-base"
                to="/wallet"
              >
                <UnderlineLink>Wallet</UnderlineLink>
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-primary text-base"
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
