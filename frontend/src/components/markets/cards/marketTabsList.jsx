import { Link } from "react-router-dom";

function MarketTabsList() {
  return (
    <>
      <div className="flex flex-row gap-x-6 font-display font-medium text-[#797A7B] text-sm">
        <Link to="">All</Link>
        <Link to="">AI</Link>
        <Link to="" className="text-base-content">
          Payments
        </Link>
        <Link to="">Metaverse</Link>
        <Link to="">DeFi</Link>
        <Link to="">Gaming</Link>
        <Link to="">DePin</Link>
      </div>
    </>
  );
}

export default MarketTabsList;
