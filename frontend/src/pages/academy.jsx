import AcademyVerticalCard from "../components/widgets/cards/academyVerticalCard.jsx";
import AcademyHorizontalCard from "../components/widgets/cards/academyHorizontalCard.jsx";
import data from "../db.json";

function Academy() {
  return (
    <>
      <h1>Academy</h1>

      <div className="flex items-center justify-center">
        <div class="mx-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
            <AcademyVerticalCard
              img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              title="What is Bitcoin?"
              diff="Intermediate"
              date="May 5, 2024"
              duration="5m"
            />
            <AcademyVerticalCard
              img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              title="What is Bitcoin?"
              diff="Intermediate"
              date="May 5, 2024"
              duration="5m"
            />
            <AcademyVerticalCard
              img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              title="What is Bitcoin?"
              diff="Intermediate"
              date="May 5, 2024"
              duration="5m"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Academy;
