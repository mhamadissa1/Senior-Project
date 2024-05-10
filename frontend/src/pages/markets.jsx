import MarketBodyCard from "../components/markets/cards/marketBodyCard";
import MarketOverviewCard from "../components/markets/cards/marketOverviewCard";
import MarketTabs from "../components/markets/cards/marketTabs";
import MarketTabsList from "../components/markets/cards/marketTabsList";
function Markets() {
  return (
    <>
      <h1 className="text-3xl font-display font-semibold text-base-content">
        Markets Overview
      </h1>
      <div className="flex flex-row justify-center items-center gap-4 py-8">
        <MarketOverviewCard />
        <MarketOverviewCard />
        <MarketOverviewCard />
        <MarketOverviewCard />
      </div>

      
      <MarketTabs />

      <MarketTabsList />

      <MarketBodyCard />
    </>
  );
}

export default Markets;
