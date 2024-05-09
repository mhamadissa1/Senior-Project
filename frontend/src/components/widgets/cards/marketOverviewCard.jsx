import MarketCardOverviewEntry from "./entries/marketCardOverviewEntry";
import MarketCardOverviewTitle from "./entries/marketCardOverviewTitle";

function MarketOverviewCard() {
  return (
    <>
      <div className="flex flex-col gap-y-1 px-6 py-4 w-72 border-2 shadow-xl rounded-lg">

        <MarketCardOverviewTitle title="Hot Coins" buttonName="More" />

        <MarketCardOverviewEntry name="BTC" price="60,000" percentage="3.5%" />
        <MarketCardOverviewEntry name="BTC" price="60,000" percentage="3.5%" />
        <MarketCardOverviewEntry name="BTC" price="60,000" percentage="3.5%" />
       
      </div>
    </>
  );
}
export default MarketOverviewCard;
