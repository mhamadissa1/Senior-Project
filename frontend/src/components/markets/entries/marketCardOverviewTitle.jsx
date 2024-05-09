function MarketCardOverviewTitle(props) {
  return (
    <>
      <div className="flex flex-row justify-between mb-2">
        <h3>{props.title}</h3>
        <button>{props.buttonName}</button>
      </div>
    </>
  );
}

export default MarketCardOverviewTitle;
