import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import { useRef } from "react";
import Button from "./Button";

export default function ShowDetails() {
  const [show, setShow] = useState({});
  const inputRef = useRef();
  const navigate = useNavigate();
  const { get } = useFetch("https://api.tvmaze.com/search");
  const params = useParams();
  useEffect(() => {
    get(`/shows?q=all`)
      .then((data) => {
        let currentShow = data.find(
          (show) => show.show.id === parseInt(params.id)
        );
        setShow(currentShow);
        inputRef.current.innerHTML = currentShow.show.summary;
      })
      .catch((error) => console.log("Could not load show details", error));
  }, [params.id, get]);

  function handleBookingOnClick() {
    navigate("/form", { state: { show_id: params.id } });
  }

  return (
    <>
      <div className="show-details-layout">
        <div>
          <h2>{show.show?.name}</h2>
        </div>
        <div className="show-booking">
          <div className="book-movie">
            <img
              src={show.show?.image?.original}
              width="350"
              height="350"
              className="show-details-image"
              alt={show.show?.name}
            />
            <div className="book-button">
              <Button outline onClick={handleBookingOnClick}>
                Book Now
              </Button>
            </div>
          </div>
          <div className="show-booking-content">
            <div ref={inputRef} className="show-summary"></div>
          </div>
        </div>
      </div>
    </>
  );
}
