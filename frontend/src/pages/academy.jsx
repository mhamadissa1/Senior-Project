import AcademyVerticalCard from "../components/widgets/cards/academyVerticalCard.jsx";
import AcademyHorizontalCard from "../components/widgets/cards/academyHorizontalCard.jsx";
import data from "../db.json";
import Range from "../components/widgets/range.jsx";
import Badge from "../components/widgets/badge.jsx";

function Academy() {
  return (
    <>
      {/* Filters */}

      <div className="flex flex-col items-center gap-y-8 mt-12 ">

        <h1 className="text-3xl font-display font-semibold text-base-content">
          Topics at Academy
        </h1>

        <div className="grid grid-cols-2 auto-cols-fr justify-items-center gap-x-10">
          <div className="flex flex-col justify-self-end gap-y-4 p-4">
            <h5>Topics</h5>
            <div className="flex flex-rows flex-wrap w-auto">
              <Badge />
              <Badge />
              <Badge />
              <Badge />
              <Badge />
              <Badge />
              <Badge />
              <Badge />
              <Badge />
            </div>
          </div>

          <div className="flex flex-col justify-self-start min-w-[530px]">
            <div className="flex flex-col gap-y-4 p-4">
              <h5>Difficulty</h5>
              <div className="flex flex-row gap-4">
                <button className="bg-[#E89296] text-base-content font-body font-medium px-3 py-2 rounded-xl text-xs flex items-center">
                  Beginner
                </button>
                <button className="bg-[#FFE5A8] text-base-content font-body font-medium px-3 py-2 rounded-xl text-xs flex items-center">
                  Intermediate
                </button>
                <button className="bg-[#D8E4C2] text-base-content font-body font-medium px-3 py-2 rounded-xl text-xs flex items-center">
                  Advanced
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-y-4 p-4">
              <h5>Reading Time</h5>
              <Range />
            </div>
          </div>
        </div>

      </div>

      {/* Filter Bar */}
      <div></div>

      {/* Cards */}
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
