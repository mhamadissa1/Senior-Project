function NewsCard(props) {
  return (
    <>
      <div className="rounded-2xl w-fit hover:bg-base-300 p-2">
        <div className="flex flex-col gap-y-1">

          <ul className="flex flex-row items-center gap-x-4">
            <li>{props.logo}</li>
            <li>{props.dateUploaded}</li>
            <li>{props.newsSource}</li>
          </ul>

          <div className="flex flex-row justify-between gap-x-6">
            <p className="w-96 text-base">{props.body}</p>
            <img
              className="object-cover h-20 w-20 rounded-2xl"
              src={props.img}
              alt={props.alt}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default NewsCard;
