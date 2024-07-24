import { Button, Chip, Input } from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useOutletContext } from "react-router-dom";
const OwnerSignup = () => {
  const [ownerdetails, setOwnerdetails] = useState({
    name: null,
    email: null,
    mobilenumber: null,
    password: null,
    address: null,
    location: null,
    rooms: null,
    image: [],
    owner:true
  });
  const [dataexist, setDataexist] = useState(false);
  const {setvis } = useOutletContext();
  const [img, setImg] = useState(null);
  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      const file = e.target.files[0]; // Get the first file
      if (file) {
        console.log("success");
        setImg(URL.createObjectURL(file)); // Create a URL and set it in state
      }
    }
    setOwnerdetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(ownerdetails);
  
    try {
      const res = await axios.post("http://localhost:3000/owner-signup", ownerdetails);
      console.log(res.data);
      if (res.data.message === "Owner registered successfully") {
        setDataexist(false);
        setvis(ownerdetails.email, ownerdetails.password);
        navigate('/');
      }
    } catch (err) {
      console.log(err.response.data);
      setDataexist(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-w-[800px] w-[80%]    margintop">
      <div className="p-8 rounded-md shadow-lg bg-slate-200 mx-10 mb-10">
        <h2 className="text-2xl font-bold mb-8 text-center">Sign Up</h2>
        <div className="flex flex-row flex-wrap gap-12 items-center justify-center">
          <Input
            className="mb-4 min-w-[300px] max-w-[400px]"
            label="Name"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            isRequired
          />
          <Input
            className="mb-4 min-w-[300px] max-w-[400px]"
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            isRequired
          />
          <Input
            className="mb-4 min-w-[300px] max-w-[400px]"
            label="Number"
            type="number"
            name="mobilenumber"
            placeholder="Enter your number"
            onChange={handleChange}
            isRequired
          />
          <Input
            className="mb-4 min-w-[300px] max-w-[400px]"
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your Password"
            onChange={handleChange}
            isRequired
          />
          <Input
            className="mb-4 min-w-[300px] max-w-[400px]"
            label="Address"
            type="address"
            name="address"
            placeholder="Enter the address"
            onChange={handleChange}
            isRequired
          />
          <Input
            className="mb-4 min-w-[300px] max-w-[400px]"
            label="Location"
            type="text"
            name="location"
            placeholder="Enter the location"
            onChange={handleChange}
            isRequired
          />
          <Input
            className="mb-4 min-w-[300px] max-w-[400px]"
            label="Total Rooms"
            type="number"
            name="rooms"
            placeholder="Enter No of Rooms you have"
            onChange={handleChange}
            isRequired
          />
          <Input
            className="mb-4 w-full"
            type="file"
            name="image"
            placeholder="choose file"
            onChange={handleChange}
            isRequired
            multiple
          />{" "}
          <br />
          <div>{img !== null ? <img src={img} alt="pp" /> : "blah"}</div>
          <div className="w-full text-center flex flex-col justify-center items-center">
            {dataexist && (
              <Chip color={"danger"} className=" rounded mb-4">
                Email or MobileNumber Already Exist Try Again
              </Chip>
            )}
            <Button
              type="submit"
              onClick={handleSubmit}
              className=" bg-blue-500 text-white "
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerSignup;
