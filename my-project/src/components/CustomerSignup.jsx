import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import axios from "axios";

const CustomerSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/customer-signup",
        formData
      );
      console.log("Signup successful:", response.data);

      setError("");
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response) {
        setError(
          error.response.data.message || "An error occurred during signup"
        );
      } else if (error.request) {
        setError("No response received from server. Please try again.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-80 mb-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Sign Up</h2>
        <Input
          className="mb-4"
          label="Name"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <Input
          className="mb-4"
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <Input
          className="mb-4"
          label="Number"
          type="number"
          name="number"
          placeholder="Enter your number"
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
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <Button className="w-full bg-blue-500 text-white" onClick={handleClick}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default CustomerSignup;
