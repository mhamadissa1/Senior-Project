import { Link } from "react-router-dom";

function MarketBodyEntryCard(props) {
  return (
    <>
      <div className="flex flex-row justify-between items-center text-base h-14 px-4 -mx-4 rounded-xl hover:hover:bg-[#F6F6F6]">

        <Link to="" className="">
          {props.name}
        </Link>

        <div className="flex flex-row items-center text-right h-14 gap-x-4">
          <div to="" className="w-36 font-mono">
            {props.price}
          </div>

          <div to="" className="w-36 font-mono">
            {props.percentChange24hrs}
          </div>

          <div to="" className="w-36 font-mono">
            {props.volumeChange24hrs}
          </div>

          <div to="" className="w-36 font-mono">
            {props.marketCap24hrs}
          </div>

          <Link to="" className="w-36">
            <button className="btn btn-sm btn-primary rounded-xl">Trade</button>
          </Link>
        </div>
     
      </div>
    </>
  );
}
export default MarketBodyEntryCard;
