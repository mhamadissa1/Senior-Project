import { Link } from "react-router-dom";

function MarketTabs() {
  return (
    <>
      <div className="flex flex-row gap-x-8 font-display font-semibold text-[#797A7B] text-lg">
        <Link to="">Favorites</Link>
        <Link to="" className="text-base-content">
          All Cryptos
        </Link>
        <Link to="">Forex</Link>
        <Link to="">Stocks</Link>
        <Link to="">Zones</Link>
      </div>
    </>
  );
}

export default MarketTabs;
