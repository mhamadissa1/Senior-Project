import LogoSVG from "../assets/icons/logoSVG.jsx";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <>
            <div className="flex flex-row items-center">
                <Link
                    className="text-primary text-2xl h-4  flex flex-row items-center"
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