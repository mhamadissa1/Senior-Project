import MarketBodyEntryCard from "../entries/marketBodyEntryCard";


function MarketBodyCard(){
    return(
        <>
        <div>
            <MarketBodyEntryCard name="BTC" price="60,000" percentChange24hrs="4%" volumeChange24hrs="3.1B" marketCap24hrs="1T" />
        </div>
        </>
    );
}
export default MarketBodyCard;