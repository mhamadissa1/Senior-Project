import { Link } from "react-router-dom";

function TradeContent() {
  return (
    <>
      <div className="absolute bg-base-200 top-10 w-52 h-32 -translate-x-1/2 left-1/2">
        {/*transparent div to bridge the link to the dropdown content */}
        <div className="absolute -top-6 inset-x-0 h-6 bg-[ffffff00]" />

        <ul className="">
          <li className="">
            <Link className="hover:text-primary text-base" to="/trade/spot">
              Spot
            </Link>
          </li>
          <li className="">
            <Link className="hover:text-primary text-base" to="/trade/futures">
              Futures
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TradeContent;
