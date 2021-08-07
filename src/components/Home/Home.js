import React from "react";
import Room from "../Room/Room";
import "./Home.css";

const Home = () => {
  const rooms = [
    {
      title: "Standard Single Room",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos nemo velit obcaecati, recusandae eligendi ab ea tempora sed animi!",
      imgUrl:
        "https://3.imimg.com/data3/HL/MM/MY-10413033/single-bed-room-services-500x500.jpg",
      bed: 1,
      capacity: 1,
      bedType: "Single",
      price: 119,
    },
    {
      title: "Couple Power Room",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos nemo velit obcaecati, recusandae eligendi ab ea tempora sed animi!",
      imgUrl:
        "https://stylesatlife.com/wp-content/uploads/2020/01/romantic-bedroom-ideas-for-married-couples.jpg.webp",
      bed: 1,
      capacity: 2,
      bedType: "Double",
      price: 159,
    },
    {
      title: "Big Size Family Room",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos nemo velit obcaecati, recusandae eligendi ab ea tempora sed animi!",
      imgUrl:
        "https://static.seattletimes.com/wp-content/uploads/2019/01/01282019_hotel-upgrade_112654-780x501.jpg",
      bed: 2,
      capacity: 4,
      bedType: "Family",
      price: 199,
    },
  ];
  return (
    <div>
      <h1
        style={{ textAlign: "center", color: "#185990", margin: 30 }}
        variant="h3"
      >
        Rooms
      </h1>
      <div className="room-item">
        {rooms.map((rm) => (
          <Room key={rm.bedType} room={rm}></Room>
        ))}
      </div>
      <div
        style={{
          backgroundColor: "#3f51b5",
          padding: 20,
          marginTop: 50,
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Home;
