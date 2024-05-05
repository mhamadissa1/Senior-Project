import AcademyVerticalCard from "../components/widgets/cards/academyVerticalCard.jsx";
import AcademyHorizontalCard from "../components/widgets/cards/academyHorizontalCard.jsx";
import data from "../db.json";

function Academy() {
  return (
    <>
      <div className="place-content-center">
        <h1>Academy</h1>
        <div className="grid grid-cols-3 justify-items-center gap-x-10 gap-y-0">
          <AcademyVerticalCard
            img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            cardTitle="Shoes!"
            cardBody={data.Users[0].email}
          />
          <AcademyVerticalCard
            img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            cardTitle="Shoes!"
            cardBody={data.Users[0].email}
          />
          <AcademyVerticalCard
            img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            cardTitle="Shoes!"
            cardBody={data.Users[0].email}
          />
          <AcademyVerticalCard
            img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            cardTitle="Shoes!"
            cardBody={data.Users[0].email}
          />
          <AcademyVerticalCard
            img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            cardTitle="Shoes!"
            cardBody={data.Users[0].email}
          />
        </div>

        {/* <div className="">
          <AcademyHorizontalCard
            img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            cardTitle="Shoes!"
            cardBody={data.Users[0].email}
          />
        </div> */}
      </div>
    </>
  );
}

export default Academy;
