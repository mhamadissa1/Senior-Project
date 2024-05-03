import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.jsx";
import Globe from "../assets/icons/globe.jsx";
import Notification from "../assets/icons/notification.jsx";
import ExpandDown from "../assets/icons/expandDown.jsx";

function Header() {
  return (
    <>
      <header className="navbar bg-base-100 font-display font-semibold top-0 h-16 p-0 z-10 sticky">
        <div className="navbar-start ml-12">
          <Link
            className="text-primary text-2xl h-4 mr-4 flex items-center"
            to="/"
          >
            <Logo />
            TerraTrade
          </Link>
          <ul className="flex flex-row flex-nowrap gap-4 items-center">
            <li>
              <Link className="hover:text-primary text-base" to="/markets">
                Markets
              </Link>
            </li>
            <li>
              <div className="dropdown dropdown-hover relative flex items-center">
                <Link
                  className="hover:text-primary text-base flex flex-row"
                  to="/trade"
                >
                  Trade
                  <ExpandDown />
                </Link>

                <ul className="dropdown-content z-10">
                  <li className="mt-4 absolute">
                    <Link
                      className="hover:text-primary text-base pt-3"
                      to="/trade/spot"
                    >
                      Spot
                    </Link>
                  </li>
                  <li className="mt-10 absolute">
                    <Link
                      className="hover:text-primary text-base"
                      to="/trade/futures"
                    >
                      Futures
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link className="hover:text-primary text-base" to="/news">
                News
              </Link>
            </li>

            <li>
              <Link className="hover:text-primary text-base" to="/portfolio">
                Portfolio
              </Link>
            </li>

            <li>
              <Link className="hover:text-primary text-base" to="/wallet">
                Wallet
              </Link>
            </li>

            <li>
              <Link className="hover:text-primary text-base" to="/academy">
                Academy
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-12">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-44 h-8 mx-1 rounded-full  flex"
          />

          <Link
            className="btn btn-sm btn-primary h-8 mx-1 rounded-xl"
            to="/deposit"
          >
            Deposit
          </Link>

          <div className="avatar">
            <div className="w-8 h-8 mx-1 rounded-full flex items-center">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>

          <div className="mx-1 flex items-center">
            <Notification />
          </div>

          <div className="mx-1 flex items-center">
            <Globe />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
