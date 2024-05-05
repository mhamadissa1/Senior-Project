import RightMenu from "./rightMenu.jsx";
import Navbar from "./navbar.jsx";

function Header() {
  return (
    <>
      <header className="bg-base-100 font-display font-semibold top-0 h-16 px-6 z-10 sticky flex flex-row justify-between border-b-2 border-base-300">
        <Navbar />

        <RightMenu />
      </header>
    </>
  );
}

export default Header;


/*

*/