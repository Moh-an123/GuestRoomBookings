import React from "react";
import img1 from "../assets/guestroom1studioashby.jpeg";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import gpic1 from "../assets/roompics/gpic1.jpeg";
import gpic2 from "../assets/roompics/gpic2.jpeg";
import gpic3 from "../assets/roompics/gpic3.jpeg";
import gpic4 from "../assets/roompics/gpic4.jpeg";
import gpic5 from "../assets/roompics/gpic5.jpeg";
import gpic6 from "../assets/roompics/gpic6.jpeg";
import gpic7 from "../assets/roompics/gpic7.jpeg";
import gpic8 from "../assets/roompics/gpic8.jpeg";
import gpic9 from "../assets/roompics/gpic9.jpeg";
import gpic10 from "../assets/roompics/gpic10.jpeg";
import gpic11 from "../assets/roompics/gpic11.jpeg";
const images = [
  gpic1,
  gpic2,
  gpic3,
  gpic4,
  gpic5,
  gpic6,
  gpic7,
  gpic8,
  gpic9,
  gpic10,
  gpic11,
];
const CardRoom = () => {
  const data = [
    {
      rid: "123",
      name: "Luxury Suite",
      location: "Coimbatore",
      price: 5000,
      image: images[0],
    },
    {
      rid: "124",
      name: "Deluxe Room",
      location: "Chennai",
      price: 3500,
      image: images[1],
    },
    {
      rid: "125",
      name: "Executive Suite",
      location: "Bangalore",
      price: 6000,
      image: images[2],
    },
    {
      rid: "126",
      name: "Family Room",
      location: "Hyderabad",
      price: 4500,
      image: images[3],
    },
    {
      rid: "127",
      name: "Penthouse",
      location: "Mumbai",
      price: 10000,
      image: images[4],
    },
    {
      rid: "128",
      name: "Standard Room",
      location: "Delhi",
      price: 2500,
      image: images[5],
    },
    {
      rid: "129",
      name: "Studio Apartment",
      location: "Kolkata",
      price: 4000,
      image: images[6],
    },
    {
      rid: "130",
      name: "Ocean View Suite",
      location: "Goa",
      price: 7500,
      image: images[7],
    },
    {
      rid: "131",
      name: "Business Suite",
      location: "Ahmedabad",
      price: 5500,
      image: images[8],
    },
    {
      rid: "132",
      name: "Royal Suite",
      location: "Jaipur",
      price: 12000,
      image: images[9],
    },
  ];

  const card =
    data &&
    data.map((val) => {
      return (
        <li key={val.rid + val.name}>
<Link to={`/roomid/${val.rid}/`} state={{ room: val }}>            <Card>
              <CardHeader>
                <h1>Name:{val.name}</h1>
              </CardHeader>
              <CardBody>
                <h3>Location:{val.location}</h3>
                <h4>Pictures</h4>
                <div className="max-w-60 h-60">
                  <Image src={val.image} alt="room image" />
                </div>{" "}
              </CardBody>
              <CardFooter>
                {/* <h2>Price:{val.price}/day</h2> */}

                <Button color="success">Book Now</Button>
                <h2>Price:{val.price}/day</h2>
              </CardFooter>
            </Card>
          </Link>
        </li>
      );
    });
  return (
    <div className="m-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {card}
      </ul>
    </div>
  );
};

export default CardRoom;
