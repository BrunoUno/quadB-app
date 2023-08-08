import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import Show from "./Show";
import Loader from "./Loader";

export default function Shows() {
  const [shows, setShows] = useState([]);
  const { get, loading } = useFetch("https://api.tvmaze.com/search");

  useEffect(() => {
    get("/shows?q=all")
      .then((data) => {
        setShows(data);
      })
      .catch((error) => console.log("Could not load products", error));
  }, [get]);
  return (
    <>
      <div className="shows-layout">
        <h1>Shows</h1>
        <div className="shows-grid">
          {loading && <Loader />}
          {shows.map((show, index) => {
            return <Show key={index} show={show}></Show>;
          })}
        </div>
      </div>
    </>
  );
}
