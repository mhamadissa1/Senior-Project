function MarketCardOverviewEntry(props) {
  return (
    <>
      <div className="flex flex-row justify-between items-center gap-x-6">
        <p className="font-body">{props.name}</p>
        <p className="font-mono">{props.price}</p>
        <p className="font-body">{props.percentage}</p>
      </div>
    </>
  );
}

export default MarketCardOverviewEntry;
