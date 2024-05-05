import { Link } from "react-router-dom";

import GlobeSVG from "../../assets/icons/globeSVG.jsx";
import NotificationSVG from "../../assets/icons/notificationSVG.jsx";
import Navbar from "./navbar.jsx";
import Avatar from "../widgets/avatar.jsx";
import DropdownAvatar from "../dropdown/dropdownAvatar.jsx";
import ProfileContent from "../dropdown/profileContent.jsx";
import TradeContent from "../dropdown/TradeContent.jsx";
import InputField from "../widgets/inputField.jsx";
import WalletSVG from "../../assets/icons/walletSVG.jsx";
import SearchSVG from "../../assets/icons/searchSVG.jsx";


function Header() {
  return (
    <>
      <header className="bg-base-100 font-display font-semibold top-0 h-16 px-12 z-10 sticky flex flex-row justify-between">
        <Navbar />

        <div className="flex flex-row gap-2 items-center">

          <InputField className="input input-bordered w-44 h-8 rounded-full min-[0px]:max-md:hidden" type="text" placeholder="Search" />

          <SearchSVG className="lg:hidden" />



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

          <WalletSVG className="hidden lg:flex" />
          <NotificationSVG className="hidden lg:flex" />
          <GlobeSVG className="hidden lg:flex" />



        </div>
      </header>
    </>
  );
}

export default Header;
