import { Link } from "react-router-dom";

import GlobeSVG from "../../assets/icons/globeSVG.jsx";
import NotificationSVG from "../../assets/icons/notificationSVG.jsx";
import WalletSVG from "../../assets/icons/walletSVG.jsx";
import SearchSVG from "../../assets/icons/searchSVG.jsx";

import InputField from "../widgets/inputField.jsx";
import Avatar from "../widgets/avatar.jsx";
import DropdownAvatar from "../dropdown/dropdownAvatar.jsx";

import ProfileContent from "../dropdown/profileContent.jsx";
import TradeContent from "../dropdown/TradeContent.jsx";



function RightMenu() {
    return (
        <>
            <div className="flex flex-row gap-2 items-center ml-20">

                <InputField className="input input-bordered input-sm rounded-full" type="text" placeholder="Search" />

                <Link className="btn btn-sm btn-primary h-8 rounded-xl" to="/deposit">
                    Deposit
                </Link>

                <DropdownAvatar
                    Avatar={<Avatar img={"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />}
                    DropdownContent={TradeContent}
                />

                <WalletSVG className="" />

                <NotificationSVG className="" />

                <GlobeSVG className="" />

            </div>
        </>
    );
}
export default RightMenu;