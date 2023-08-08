import { Link } from "react-router-dom";

export default function Show(props) {
  const { show } = props;
  console.log(show);
  return (
    <>
      <div className="show">
        <div className="show-image-container">
          <Link to={`/shows/${show.show.id}`}>
            <img
              src={show.show.image?.original}
              width="200"
              height="200"
              className="show-image"
              alt={show.show.name}
            />
          </Link>
        </div>
        <div className="show-info">
          <h3>{show.show.name}</h3>
          <p>{show.show.language}</p>
          <p>{show.show.genres.join(" , ")}</p>
          <p>{`Only on : ${
            show.show.network?.name ? show.show.network.name : "NA"
          }`}</p>
        </div>
      </div>
    </>
  );
}
