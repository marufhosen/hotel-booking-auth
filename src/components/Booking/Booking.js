import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../../App";

const Booking = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const { bedType } = useParams();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Congratulations!!!</h1>
      <p>
        Dear, <span style={{ color: "red" }}>{loggedInUser.name}</span> thanks
        for choose our hotel {bedType} room. Recently, we will sent confirmation via your
        Email, <span style={{ color: "red" }}>{loggedInUser.email}</span>
      </p>
      <br />
      <p>Support Team</p>
    </div>
  );
};

export default Booking;
