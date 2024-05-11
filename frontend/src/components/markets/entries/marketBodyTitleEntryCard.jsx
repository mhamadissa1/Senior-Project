import { Link } from "react-router-dom";

function MarketBodyTitleEntryCard(props) {
  return (
    <>
      <div className="flex flex-row justify-between items-center text-xs text-[#797A7B] font-medium h-9 px-4 -mx-4 rounded-xl">
        <div to="" className="w-36">
          Name
        </div>

        <div className="flex flex-row items-center text-right h-8 gap-x-4">
          <div to="" className="w-36">
            Price
          </div>

          <div to="" className="w-36">
            Change
          </div>

          <div to="" className="w-36">
            24hr Volume
          </div>

          <div to="" className="w-36">
            Market Cap
          </div>

          <div to="" className="w-36">
            Action
          </div>
        </div>
      </div>
    </>
  );
}
export default MarketBodyTitleEntryCard;
