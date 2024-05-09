function AcademyHorizontalCard(props) {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="">
          <img
            src={props.img}
            alt={props.alt}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.cardTitle}</h2>
          <p>{props.cardBody}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AcademyHorizontalCard;
