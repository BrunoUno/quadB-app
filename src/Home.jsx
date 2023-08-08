import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>Online shopping simplified</h1>
        <p>
          Book your shows from <em>QuadB</em> with our easy to use app, and
          enjoy it with your friends and family.
        </p>
        <Link to="/shows" className="btn btn-default">
          Start shopping
        </Link>
      </div>
      <img
        src="https://st3.depositphotos.com/1643295/37229/i/450/depositphotos_372294580-stock-photo-positive-attractive-young-black-woman.jpg"
        width="350"
        height="240"
        className="rounded"
        alt=""
      />
    </div>
  );
}
