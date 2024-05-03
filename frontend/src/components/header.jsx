import { Link } from "react-router-dom";

import Globe from "../assets/icons/globe.jsx";
import Notification from "../assets/icons/notification.jsx";
import Navbar from "./navbar.jsx";
import Avatar from "./avatar.jsx";
import DropdownAvatar from "./dropdownAvatar.jsx";
import ProfileContent from "./profileContent.jsx";
import TradeContent from "./TradeContent.jsx";

function Header() {
  return (
    <>
      <header className="bg-base-100 font-display font-semibold top-0 h-16 m-0 px-12 z-10 sticky flex flex-row justify-between">
        <Navbar />

        <div className="flex flex-row gap-2 items-center">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-44 h-8 rounded-full"
          />

          <Link className="btn btn-sm btn-primary h-8 rounded-xl" to="/deposit">
            Deposit
          </Link>

          <div>
            <DropdownAvatar
              Avatar={
                <Avatar
                  img={
                    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              }
              DropdownContent={TradeContent}
            ></DropdownAvatar>
          </div>

          <div className="">
            <Notification />
          </div>

          <div className="">
            <Globe />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
