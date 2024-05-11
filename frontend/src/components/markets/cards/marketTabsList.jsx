import { Link } from "react-router-dom";
import { useState } from "react";

function MarketTabsList() {
  const [isActive, setIsActive] = useState(0);

  function handleClick(index) {
    setIsActive(index);
  }
  return (
    <>
      <div className="flex flex-row gap-x-6 font-display font-medium  text-sm mb-8">
        <Link
          to=""
          onClick={() => handleClick(0)}
          className={`${
            isActive === 0 ? "text-base-content" : "text-[#797A7B]"
          }`}
        >
          All
        </Link>
        <Link
          to=""
          onClick={() => handleClick(1)}
          className={`${
            isActive === 1 ? "text-base-content" : "text-[#797A7B]"
          }`}
        >
          AI
        </Link>
        <Link
          to=""
          onClick={() => handleClick(2)}
          className={`${
            isActive === 2 ? "text-base-content" : "text-[#797A7B]"
          }`}
        >
          Payments
        </Link>
        <Link
          to=""
          onClick={() => handleClick(3)}
          className={`${
            isActive === 3 ? "text-base-content" : "text-[#797A7B]"
          }`}
        >
          Metaverse
        </Link>
        <Link
          to=""
          onClick={() => handleClick(4)}
          className={`${
            isActive === 4 ? "text-base-content" : "text-[#797A7B]"
          }`}
        >
          DeFi
        </Link>
        <Link
          to=""
          onClick={() => handleClick(5)}
          className={`${
            isActive === 5 ? "text-base-content" : "text-[#797A7B]"
          }`}
        >
          Gaming
        </Link>
        <Link
          to=""
          onClick={() => handleClick(6)}
          className={`${
            isActive === 6 ? "text-base-content" : "text-[#797A7B]"
          }`}
        >
          DePin
        </Link>
      </div>
    </>
  );
}

export default MarketTabsList;
