import MarketCardEntry from "./entries/marketCardEntry";
import MarketCardTitle from "./entries/marketCardTitle";

function MarketOverviewCard() {
  return (
    <>
      <div className="flex flex-col gap-y-1 px-6 py-4 w-72 border-2 shadow-xl rounded-lg">

        <MarketCardTitle title="Hot Coins" buttonName="More" />

        <MarketCardEntry name="BTC" price="60,000" percentage="3.5%" />
        <MarketCardEntry name="BTC" price="60,000" percentage="3.5%" />
        <MarketCardEntry name="BTC" price="60,000" percentage="3.5%" />
       
      </div>
    </>
  );
}
export default MarketOverviewCard;
