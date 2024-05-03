import Logo from "../assets/icons/logo.jsx";
import { Link } from "react-router-dom";
import DropdownLink from "./dropdownLink.jsx";
import TradeContent from "./TradeContent.jsx";
import ExpandDown from "../assets/icons/expandDown.jsx"

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
                Markets
                
              </Link>
            </li>
            <li>
              <DropdownLink href="/trade" DropdownContent={TradeContent}>
                Trade
                {/* <ExpandDown /> */}
              </DropdownLink>
              
            </li>
            <li>
              <Link
                className="hover:text-primary text-base"
                to="/news"
              >
                News
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-primary text-base"
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-primary text-base"
                to="/wallet"
              >
                Wallet
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-primary text-base"
                to="/academy"
              >
                Academy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
