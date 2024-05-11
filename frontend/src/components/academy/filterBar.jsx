import ListSVG from "../../assets/icons/listSVG.jsx";
import GridSVG from "../../assets/icons/gridSVG.jsx";


function FilterBar() {

  return (
    <>
      <div className="flex justify-between items-center py-4">
        <div className="flex flex-row items-center gap-x-10">
          <p className="text-base font-semibold">Layout</p>



          <div className="flex flex-row items-center">


            <button className="p-1">
              <GridSVG  />
            </button>


            <button className="p-1">
              <ListSVG  />
            </button>



          </div>


          <div className="flex flex-row gap-x-3">
            <button className="btn btn-sm btn-primary rounded-xl">
              Apply Filters
            </button>
            <button className="btn btn-sm btn-primary rounded-xl">
              Clear Filters
            </button>
          </div>
        </div>

        <div>
          <button className="btn btn-sm btn-primary rounded-xl">
            Hide Filters
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterBar;
