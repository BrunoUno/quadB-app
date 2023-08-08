import { useRef, useEffect, useState } from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";
import useFetch from "./useFetch";
import Input from "./Input";

export default function Form() {
  const [show, setShow] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const location = useLocation();
  const inputRef = useRef();
  const { get } = useFetch("https://api.tvmaze.com/search");
  useEffect(() => {
    get(`/shows?q=all`)
      .then((data) => {
        let currentShow = data.find(
          (show) => show.show.id === parseInt(location.state.show_id)
        );
        setShow(currentShow);
        inputRef.current.innerHTML = "Show : " + currentShow.show.name;
      })
      .catch((error) => console.log("Could not load show details", error));
  }, [location.state.show_id, get]);

  function handleSubmit(event) {
    event.preventDefault();
    const userData = {
      username: username,
      email: email,
      phone: phone,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  return (
    <>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-container">
          {/* eslint-disable-next-line */}
          <h1 ref={inputRef}></h1>
          <div className="user-name">
            <Input
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
              type="text"
              required
            />
          </div>
          <div className="email-id">
            <Input
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              type="email"
              required
            />
          </div>
          <div className="mobile-number">
            <Input
              placeholder="Mobile Number"
              onChange={(event) => setPhone(event.target.value)}
              value={phone}
              type="text"
              pattern="[789][0-9]{9}"
              required
            />
          </div>
          <Button type="submit">Submit</Button>
        </div>
        <div className="form-photo">
          <img
            src={show.show?.image?.original}
            width="400"
            height="400"
            className="show-details-image"
            alt={show.show?.name}
          />
        </div>
      </form>
    </>
  );
}
