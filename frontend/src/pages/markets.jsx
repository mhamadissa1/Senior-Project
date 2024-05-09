import MarketBodyCard from "../components/markets/cards/marketBodyCard";
import MarketOverviewCard from "../components/markets/cards/marketOverviewCard";
import { Link } from "react-router-dom";
function Markets() {
  return (
    <>
      <h1 className="text-3xl font-display font-semibold text-base-content">
        Markets Overview
      </h1>
      <div className="flex flex-row justify-center items-center gap-4 py-8">
        <MarketOverviewCard />
        <MarketOverviewCard />
        <MarketOverviewCard />
        <MarketOverviewCard />
      </div>

      <div className="flex flex-row gap-x-8 font-display font-semibold text-[#797A7B] text-lg">
        <Link to="">Favorites</Link>
        <Link to="" className="text-base-content">All Cryptos</Link>
        <Link to="">Forex</Link>
        <Link to="">Stocks</Link>
        <Link to="">Zones</Link>
      </div>

      <div className="flex flex-row gap-x-6 font-display font-medium text-[#797A7B] text-sm">
        <Link to="">All</Link>
        <Link to="">AI</Link>
        <Link to="" className="text-base-content">Payments</Link>
        <Link to="">Metaverse</Link>
        <Link to="">DeFi</Link>
        <Link to="">Gaming</Link>
        <Link to="">DePin</Link>
      </div>

      <MarketBodyCard />
    </>
  );
}

export default Markets;
