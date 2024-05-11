function MarketCardOverviewTitle(props) {
  return (
    <>
      <div className="flex flex-row justify-between items-center mb-1 h-6 font-body text-xs font-semibold">
        <h3>{props.title}</h3>
        <button>More</button>
      </div>
    </>
  );
}

export default MarketCardOverviewTitle;
