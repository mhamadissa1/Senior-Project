function MarketCardOverviewEntry(props) {
  return (
    <>
      <ul className="flex flex-row justify-between items-center gap-x-6">
        <li className="font-body">{props.name}</li>
        <li className="font-body">{props.price}</li>
        <li className="font-body">{props.percentage}</li>
      </ul>
    </>
  );
}

export default MarketCardOverviewEntry;
