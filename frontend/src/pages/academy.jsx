import AcademyVerticalCard from "../components/academy/cards/academyVerticalCard.jsx";
import AcademyHorizontalCard from "../components/academy/cards/academyHorizontalCard.jsx";

import Filters from "../components/academy/filters.jsx";
import FilterBar from "../components/academy/filterBar.jsx";

function Academy() {
  return (
    <>
      <div className="flex items-center justify-center py-12">
        <div className="mx-6">
          <h1 className="text-4xl font-display font-semibold text-base-content mb-6">
            Topics at Academy
          </h1>
          <Filters />
        </div>
      </div>

      <div className="bg-base-200 w-full">
        <div className="max-w-[1100px] mx-auto">
          <FilterBar />
        </div>
      </div>

      <div className="flex items-center justify-center py-12">
        <div className="mx-6">
          <div className="flex flex-row justify-between mb-8">
            <h2 className="text-3xl font-display font-semibold text-base-content">
              Articles
            </h2>
            <button className="btn btn-sm btn-primary rounded-xl">
              Recently Published
            </button>
          </div>

          {/* Cards */}
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
