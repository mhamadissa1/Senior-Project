function Card(props) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={props.img}
            alt={props.alt}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.cardTitle}</h2>
          <p>{props.cardBody}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;