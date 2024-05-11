import Range from "../../components/widgets/range.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import PlusSVG from "../../assets/icons/plusSVG.jsx";
import CheckSVG from "../../assets/icons/checkSVG.jsx";

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
          {/*Left Side*/}
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

          {/*Right Side*/}
          <div className="flex flex-col justify-self-start min-w-[530px]">
            {/*Difficulty*/}
            <div className="flex flex-col gap-y-4 p-4">
              <h5>Difficulty</h5>

              <div className="flex flex-row gap-4">
                <div onClick={()=>handleClick()} className="flex items-center gap-x-1 bg-[#D8E4C2] text-base-content font-body font-medium px-3 py-2 rounded-xl text-xs">
                  <div class="rounded-full w-1 h-1 bg-[#B4D479]"></div>
                  Beginner
                  <div>
                    <CheckSVG />
                  </div>
                </div>

                <div className="flex items-center gap-x-1 bg-[#FFE5A8] text-base-content font-body font-medium px-3 py-2 rounded-xl text-xs">
                  <div class="rounded-full w-1 h-1 bg-[#FFC419]"></div>
                  Intermediate
                  <div>
                    <CheckSVG />
                  </div>
                </div>
                <div className="flex items-center gap-x-1 bg-[#E89296] text-base-content font-body font-medium px-3 py-2 rounded-xl text-xs">
                  <div class="rounded-full w-1 h-1 bg-[#D85151]"></div>
                  Advanced
                  <div>
                    <CheckSVG />
                  </div>
                </div>
              </div>
            </div>

            {/*Reading Time*/}
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
