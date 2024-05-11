import { Link } from "react-router-dom";
import { useState } from "react";

function MarketTabs() {
  const [isActive, setIsActive] = useState(1);

  function handleClick(index) {
    setIsActive(index);
  }
  return (
    <>
      <div className="flex flex-row gap-x-6 font-display font-semibold  text-base mb-6">
        <Link
          to=""
          onClick={() => handleClick(0)}
          className={` ${
            isActive === 0 ? "text-base-content" : "text-[#797A7B]"
          }`}
        >
          Favorites
        </Link>

        <Link
          to=""
          onClick={() => handleClick(1)}
          className={`${
            isActive === 1 ? "text-base-content" : "text-[#797A7B]"
          }`}
        >
          All Cryptos
        </Link>

        <Link
          to=""
          onClick={() => handleClick(2)}
          className={`${
            isActive === 2 ? "text-base-content" : "text-[#797A7B]"
          }`}
        >
          Forex
        </Link>
        <Link
          to=""
          onClick={() => handleClick(3)}
          className={`${
            isActive === 3 ? "text-base-content" : "text-[#797A7B]"
          }`}
        >
          Stocks
        </Link>
        <Link
          to=""
          onClick={() => handleClick(4)}
          className={`${
            isActive === 4 ? "text-base-content" : "text-[#797A7B]"
          }`}
        >
          Zones
        </Link>
      </div>
    </>
  );
}

export default MarketTabs;
