import { Link } from "react-router-dom";
import { useState } from "react";

function MarketTabsList() {
  const [isActive, setIsActive] = useState(0);

  function handleClick(index) {
    setIsActive(index);
  }
  return (
    <>
      <div className="flex flex-row gap-x-6 font-display font-medium text-[#797A7B] text-sm mb-8">
        <Link
          to=""
          onClick={() => handleClick(0)}
          className={`"text-base-content ${
            isActive === 0 ? "text-base-content" : ""
          }`}
        >
          All
        </Link>
        <Link
          to=""
          onClick={() => handleClick(1)}
          className={`"text-base-content ${
            isActive === 1 ? "text-base-content" : ""
          }`}
        >
          AI
        </Link>
        <Link
          to=""
          onClick={() => handleClick(2)}
          className={`"text-base-content ${
            isActive === 2 ? "text-base-content" : ""
          }`}
        >
          Payments
        </Link>
        <Link
          to=""
          onClick={() => handleClick(3)}
          className={`"text-base-content ${
            isActive === 3 ? "text-base-content" : ""
          }`}
        >
          Metaverse
        </Link>
        <Link
          to=""
          onClick={() => handleClick(4)}
          className={`"text-base-content ${
            isActive === 4 ? "text-base-content" : ""
          }`}
        >
          DeFi
        </Link>
        <Link
          to=""
          onClick={() => handleClick(5)}
          className={`"text-base-content ${
            isActive === 5 ? "text-base-content" : ""
          }`}
        >
          Gaming
        </Link>
        <Link
          to=""
          onClick={() => handleClick(6)}
          className={`"text-base-content ${
            isActive === 6 ? "text-base-content" : ""
          }`}
        >
          DePin
        </Link>
      </div>
    </>
  );
}

export default MarketTabsList;
