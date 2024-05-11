import MarketBodyCard from "../components/markets/cards/marketBodyCard";
import MarketOverviewCard from "../components/markets/cards/marketOverviewCard";
import MarketTabs from "../components/markets/cards/marketTabs";
import MarketTabsList from "../components/markets/cards/marketTabsList";
function Markets() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mx-6">
          <h1 className="text-3xl font-display font-semibold text-base-content mt-8">
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
        </div>
      </div>
    </>
  );
}

export default Markets;
