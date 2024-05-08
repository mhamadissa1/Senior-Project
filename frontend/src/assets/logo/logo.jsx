import { Link } from "react-router-dom";

import LogoSVG from "../../assets/icons/logoSVG.jsx";

function Logo() {
  return (
    <>
      <div>
        <Link
          className="text-primary text-2xl h-4 flex flex-row items-center"
          to="/"
        >
          <LogoSVG />
          TerraTrade
        </Link>
      </div>
    </>
  );
}

export default Logo;
