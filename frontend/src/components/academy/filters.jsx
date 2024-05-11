import Range from "../../components/widgets/range.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

function Filters() {
  const [isActive, setIsActive] = useState(null);

  function handleClick(index) {
    setIsActive(index);
  }
  function toggle() {
    setIsActive(!isActive);
  }

  return (
    <>
      <div className="flex flex-col items-center gap-y-8">
        <div className="grid grid-cols-2 auto-cols-fr justify-items-center gap-x-10">
          <div className="flex flex-col justify-self-end gap-y-4 p-4">
            <h5>Topics</h5>
            <div className="flex flex-rows flex-wrap w-auto">
              <ul>
                <li>
                  <Link
                    to=""
                    onClick={() => handleClick(0)}
                    className={`bg-[#F6F6F6] text-[#797A7B] py-1 px-2 rounded-full text-xs font-semibold ${
                      isActive === 0 ? "text-base-content border" : ""
                    }`}
                  >
                    Altcoin
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    onClick={() => handleClick(1)}
                    className={`bg-[#F6F6F6] text-[#797A7B] py-1 px-2 rounded-full text-xs font-semibold ${
                      isActive === 1 ? "text-base-content border" : ""
                    }`}
                  >
                    DeFi
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-self-start min-w-[530px]">
            <div className="flex flex-col gap-y-4 p-4">
              <h5>Difficulty</h5>
              <div className="flex flex-row gap-4">
                <button className="bg-[#E89296] text-base-content font-body font-medium px-3 py-2 rounded-xl text-xs flex items-center">
                  Beginner
                </button>
                <button className="bg-[#FFE5A8] text-base-content font-body font-medium px-3 py-2 rounded-xl text-xs flex items-center">
                  Intermediate
                </button>
                <button className="bg-[#D8E4C2] text-base-content font-body font-medium px-3 py-2 rounded-xl text-xs flex items-center">
                  Advanced
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-y-4 p-4">
              <h5>Reading Time</h5>
              <Range />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filters;
