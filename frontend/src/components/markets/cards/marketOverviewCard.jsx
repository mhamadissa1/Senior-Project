import MarketCardOverviewEntry from "../entries/marketCardOverviewEntry";
import MarketCardOverviewTitle from "../entries/marketCardOverviewTitle";

function MarketOverviewCard() {
  return (
    <>
      <div className="flex flex-col p-4 w-72 border rounded-xl">

        <MarketCardOverviewTitle title="Hot Coins" />

        <MarketCardOverviewEntry name="BTC" price="60,000" percentage="3.5%" />
        <MarketCardOverviewEntry name="BTC" price="60,000" percentage="3.5%" />
        <MarketCardOverviewEntry name="BTC" price="60,000" percentage="3.5%" />
       
      </div>
    </>
  );
}
export default MarketOverviewCard;
