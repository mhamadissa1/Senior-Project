import { Link } from "react-router-dom";

function MarketBodyEntryCard(props) {
  return (
    <>
      <div className="flex flex-row gap-x-64">
        <Link to="" className="">
          {props.name}
        </Link>
        <ul className="flex flex-row gap-x-24">
          <li>
            <Link to="" className="">
              {props.price}
            </Link>
          </li>
          <li>
            <Link to="" className="">
              {props.percentChange24hrs}
            </Link>
          </li>
          <li>
            <Link to="" className="">
              {props.volumeChange24hrs}
            </Link>
          </li>
          <li>
            <Link to="" className="">
              {props.marketCap24hrs}
            </Link>
          </li>
          <li>
            <Link to="" className="">
              <button className="btn btn-sm btn-primary rounded-xl">Trade</button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default MarketBodyEntryCard;
