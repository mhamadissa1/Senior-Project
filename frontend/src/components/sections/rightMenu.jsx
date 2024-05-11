import { Link } from "react-router-dom";

import GlobeSVG from "../../assets/icons/globeSVG.jsx";
import NotificationSVG from "../../assets/icons/notificationSVG.jsx";
import WalletSVG from "../../assets/icons/walletSVG.jsx";
import SearchSVG from "../../assets/icons/searchSVG.jsx";
import MenuSVG from "../../assets/icons/menu.jsx";

import Avatar from "../widgets/avatar.jsx";
import DropdownAvatar from "../dropdown/dropdownAvatar.jsx";

import ProfileContent from "../dropdown/profileContent.jsx";
import TradeContent from "../dropdown/TradeContent.jsx";


function RightMenu() {
  return (
    <>
      <div className="flex flex-row gap-2 items-center font-display font-semibold">
        <input
          className="hidden xl:flex input input-bordered input-sm w-32 rounded-full"
          type="text"
          placeholder="Search"
        />

        <SearchSVG className="flex xl:hidden" />

       
        <Link className="btn btn-sm btn-primary rounded-xl" to="/deposit">
          Deposit
        </Link>

        <Avatar
          img={
            "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          }
          className=""
        />

        <WalletSVG className="hidden xl:flex fill-current hover:text-primary" />

        <NotificationSVG className="hidden xl:flex fill-current hover:text-primary" />

        <GlobeSVG className="hidden xl:flex fill-current hover:text-primary" />

        <MenuSVG className="xl:hidden flex fill-current hover:text-primary" />
      </div>
    </>
  );
}
export default RightMenu;
