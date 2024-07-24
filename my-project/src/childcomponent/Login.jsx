import { Input, Button, Chip } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [logdetails, setLogdetails] = useState({ email: "", password: "",owner:false });
  const { setUserDetails, setIslogged, setvis } = useOutletContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogdetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    try {
        const response = await axios.get('http://localhost:3000/logindata', {
            params: logdetails
        });
        
        console.log("Full response:", response.data);

        if (response.data.success) {
            console.log('logged in');
            console.log(response.data);
            console.log(response.data.user.owner);
            setUserDetails(response.data.user);
            setIslogged(true);
            // setvis(logdetails);
            setvis({email:logdetails.email,password:logdetails.password,owner:response.data.user.owner});

            navigate('/home');
        } else {
            console.log("Login details:", logdetails);
            console.log("Response data:", response.data);
            setError("Invalid credentials");
        }
    } catch (error) {
        console.error("Login error:", error);
        setError("An error occurred during login");
    }
};
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-80 my-10">
        <h2 className="text-2xl font-bold mb-8 text-center border-b-2">
          Log In
        </h2>
        <Input
          className="mb-4"
          label="Email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <Input
          className="mb-4"
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your Password"
          onChange={handleChange}
        />
        <Button className="w-full bg-blue-500 text-white" onClick={handleClick}>Login</Button>
        {error && <Chip color="danger" className="w-full mt-2 mx-auto rounded-md">{error}</Chip>}
      </div>
    </div>
  );
};

export default Login;