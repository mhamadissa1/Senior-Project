import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <div className="navbar top-0 sticky flex h-64 font-semibold font-display p-[0px] z-10 bg-base-100">
        <div className="navbar-start ml-48">
          <Link className="text-primary h-64 flex items-center text-24 mr-16" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M660-570q-25 0-42.5-17.5T600-630q0-25 17.5-42.5T660-690q25 0 42.5 17.5T720-630q0 25-17.5 42.5T660-570Zm-360 0q-25 0-42.5-17.5T240-630q0-25 17.5-42.5T300-690q25 0 42.5 17.5T360-630q0 25-17.5 42.5T300-570Zm180 110q-25 0-42.5-17.5T420-520q0-25 17.5-42.5T480-580q25 0 42.5 17.5T540-520q0 25-17.5 42.5T480-460Zm0-220q-25 0-42.5-17.5T420-740q0-25 17.5-42.5T480-800q25 0 42.5 17.5T540-740q0 25-17.5 42.5T480-680Zm0 520q-20 0-40.5-3t-39.5-8v-143q0-35 23.5-60.5T480-400q33 0 56.5 25.5T560-314v143q-19 5-39.5 8t-40.5 3Zm-140-32q-20-8-38.5-18T266-232q-28-20-44.5-52T205-352q0-26-5.5-48.5T180-443q-10-13-37.5-39.5T92-532q-11-11-11-28t11-28q11-11 28-11t28 11l153 145q20 18 29.5 42.5T340-350v158Zm280 0v-158q0-26 10-51t29-42l153-145q12-11 28.5-11t27.5 11q11 11 11 28t-11 28q-23 23-50.5 49T780-443q-14 20-19.5 42.5T755-352q0 36-16.5 68.5T693-231q-16 11-34.5 21T620-192Z"/></svg>
            TerraTrade
          </Link>
          <ul className="flex flex-row">
            <li>
              <Link className="mx-12 h-64 hover:text-primary flex items-center text-16" to="/markets">
                Markets
              </Link>
            </li>
            <li>
              <div className="dropdown dropdown-hover h-64 flex items-center relative">
                  <Link className="hover:text-primary  mx-12 text-16 flex flex-row" to="/trade">
                    Trade
                    <svg className="self-center" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                  </Link>

                <ul className="dropdown-content z-10">
                  <li className="absolute mt-16">
                    <Link className="hover:text-primary m-12 text-16" to="/trade/spot">
                      Spot
                    </Link>
                  </li>
                  <li className="absolute mt-40">
                    <Link className="hover:text-primary m-12 text-16" to="/trade/futures">
                      Futures
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link className="hover:text-primary mx-12 h-64 flex items-center text-16" to="/news">
                News
              </Link>
            </li>

            <li>
              <Link className="hover:text-primary mx-12 h-64 flex items-center text-16" to="/portfolio">
                Portfolio
              </Link>
            </li>

            <li>
              <Link className="hover:text-primary mx-12 h-64 flex items-center text-16" to="/wallet">
                Wallet
              </Link>
            </li>

            <li>
              <Link className="hover:text-primary mx-12 h-64 flex items-center text-16" to="/academy">
                Academy
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end h-64 mr-48">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered rounded-full w-40 h-32 mx-4 flex"
          />

          <Link className="btn btn-sm btn-primary h-32 rounded-12 mx-4" to="/deposit">
            Deposit
          </Link>

          <div className="avatar">
            <div className="w-32 h-32 rounded-full mx-4 flex items-center">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>

          <div className="mx-4 h-64 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
            </svg>
          </div>

          <div className="mx-4 h-64 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
