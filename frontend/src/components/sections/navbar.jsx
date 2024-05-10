import { Link } from "react-router-dom";

import Logo from "../../assets/logo/logo.jsx";

import DropdownLink from "../dropdown/dropdownLink.jsx";
import UnderlineLink from "../underlineLink.jsx";

import TradeContent from "../dropdown/TradeContent.jsx";

function Navbar() {
  return (
    <>
      <div className="flex flex-row items-center gap-4">
        <Logo />

        <ul className="hidden lg:flex flex-row">
          <li className=" hover:bg-[#F6F6F6] py-2 px-3 rounded-full">
            <Link className="hover:text-primary text-sm" to="/markets">
              Markets
            </Link>
          </li>

          <li className=" hover:bg-[#F6F6F6] py-2 px-3 rounded-full">
            {/* <DropdownLink href="/trade" DropdownContent={TradeContent}>
                
              </DropdownLink> */}
            <Link className="hover:text-primary text-sm" to="/news">
              Trade
            </Link>
          </li>
          <li className=" hover:bg-[#F6F6F6] py-2 px-3 rounded-full">
            <Link className="hover:text-primary text-sm" to="/news">
              News
            </Link>
          </li>

          <li className=" hover:bg-[#F6F6F6] py-2 px-3 rounded-full">
            <Link className="hover:text-primary text-sm" to="/portfolio">
              Portfolio
            </Link>
          </li>

          <li className=" hover:bg-[#F6F6F6] py-2 px-3 rounded-full">
            <Link className="hover:text-primary text-sm" to="/wallet">
              Wallet
            </Link>
          </li>

          <li className=" hover:bg-[#F6F6F6] py-2 px-3 rounded-full">
            <Link className="hover:text-primary text-sm" to="/academy">
              Academy
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
