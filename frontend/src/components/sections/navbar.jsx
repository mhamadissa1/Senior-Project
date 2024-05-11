import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/logo/logo.jsx";

import DropdownLink from "../dropdown/dropdownLink.jsx";
import UnderlineLink from "../underlineLink.jsx";

import TradeContent from "../dropdown/TradeContent.jsx";

function Navbar() {
  const [isActive, setIsActive] = useState(null);

  function handleClick(index) {
    setIsActive(index);
  }

  return (
    <>
      <div className="flex flex-row items-center gap-4 h-16 font-display font-semibold ">
        <Logo />

        <ul className="hidden lg:flex flex-row h-16">
          <li className="h-16 flex items-center">
            <Link
              onClick={() => handleClick(0)}
              className={`text-sm hover:text-primary hover:bg-[#F6F6F6] py-2 px-3 rounded-full ${isActive === 0 ? "text-primary" : ""}`}
              to="/markets"
            >
              Markets
            </Link>
          </li>

          <li className="h-16 flex items-center">
            <Link
              onClick={() => handleClick(1)}
              className={`text-sm hover:text-primary hover:bg-[#F6F6F6] py-2 px-3 rounded-full ${isActive === 1 ? "text-primary" : ""}`}
              to="/trade"
            >
              Trade
            </Link>
          </li>
          <li className="h-16 flex items-center">
            <Link
              onClick={() => handleClick(2)}
              className={`text-sm hover:text-primary hover:bg-[#F6F6F6] py-2 px-3 rounded-full ${isActive === 2 ? "text-primary" : ""}`}
              to="/news"
            >
              News
            </Link>
          </li>

          <li className="h-16 flex items-center">
            <Link
              onClick={() => handleClick(3)}
              className={`text-sm hover:text-primary hover:bg-[#F6F6F6] py-2 px-3 rounded-full ${isActive === 3 ? "text-primary" : ""}`}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>

          <li className="h-16 flex items-center">
            <Link
              onClick={() => handleClick(4)}
              className={`text-sm hover:text-primary hover:bg-[#F6F6F6] py-2 px-3 rounded-full ${isActive === 4 ? "text-primary" : ""}`}
              to="/wallet"
            >
              Wallet
            </Link>
          </li>

          <li className="h-16 flex items-center">
            <Link
              onClick={() => handleClick(5)}
              className={`text-sm hover:text-primary hover:bg-[#F6F6F6] py-2 px-3 rounded-full ${isActive === 5 ? "text-primary" : ""}`}
              to="/academy"
            >
              Academy
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
