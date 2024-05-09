import MarketOverviewCard from "../components/widgets/cards/marketOverviewCard";

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
    </>
  );
}

export default Markets;
