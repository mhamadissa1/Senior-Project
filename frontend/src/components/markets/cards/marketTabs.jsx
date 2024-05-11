import { Link } from "react-router-dom";
import { useState } from "react";

function MarketTabs() {
  const [isActive, setIsActive] = useState(1);

  function handleClick(index) {
    setIsActive(index);
  }
  return (
    <>
      <div className="flex flex-row gap-x-6 font-display font-semibold text-[#797A7B] text-base mb-6">
        <Link
          to=""
          onClick={() => handleClick(0)}
          className={`"text-base-content ${
            isActive === 0 ? "text-base-content" : ""
          }`}
        >
          Favorites
        </Link>
        
        <Link
          to=""
          onClick={() => handleClick(1)}
          className={`"text-base-content ${
            isActive === 1 ? "text-base-content" : ""
          }`}
        >
          All Cryptos
        </Link>

        <Link
          to=""
          onClick={() => handleClick(2)}
          className={`"text-base-content ${
            isActive === 2 ? "text-base-content" : ""
          }`}
        >
          Forex
        </Link>
        <Link
          to=""
          onClick={() => handleClick(3)}
          className={`"text-base-content ${
            isActive === 3 ? "text-base-content" : ""
          }`}
        >
          Stocks
        </Link>
        <Link
          to=""
          onClick={() => handleClick(4)}
          className={`"text-base-content ${
            isActive === 4 ? "text-base-content" : ""
          }`}
        >
          Zones
        </Link>
      </div>
    </>
  );
}

export default MarketTabs;
