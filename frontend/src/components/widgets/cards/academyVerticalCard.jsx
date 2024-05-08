import ClockSVG from "../../../assets/icons/clockSVG";


function AcademyVerticalCard(props) {
  return (
    <>
      <div className="bg-base-100 rounded-xl xl:max-w-[357px] shadow-md overflow-hidden max-w-5/12">
        <div className="flex flex-col">

          <div className="">
            <img
              className="object-cover h-full w-full"
              src={props.img}
              alt={props.alt}
            />
          </div>

          <div className="flex flex-col gap-10 p-8">

            <div className="text-base-content text-xl font-display font-semibold">
              <h5>{props.title}</h5>
            </div>
            
            <div className="flex flex-row items-center gap-4 text-base-content font-body font-medium">

              <p className="bg-[#FFE5A8] px-3 py-2 rounded-xl text-xs flex items-center">{props.diff}</p>
              <p className="text-base text-[#797A7B]">{props.date}</p>
              <p className="flex flex-row text-base text-[#797A7B]"><ClockSVG className="" />{props.duration}</p>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default AcademyVerticalCard;
