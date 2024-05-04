import Card from "../components/widgets/cards/academyVerticalCard.jsx";
import data from "../db.json";

function News() {
  return (
    <>
      <div className="h-[1000px]">
        <h1>News</h1>
        <div className="flex flex-row">
          <Card 
          img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" 
          alt="Shoes"
          cardTitle="Shoes!" 
          cardBody={data.Users[0].email}
          />
        </div>
      </div>
    </>
  );
}

export default News;
