import { Avatar } from "@nextui-org/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ islogged, userDetails, isOwner }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('userDetails');
    localStorage.removeItem('islogged');

    // Navigate to the home page or login page after logout
    navigate('/login');
    window.location.reload();
  };

  return (
    <div>
      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold">GuestRoomBooking</h1>
          <nav>
            <ul className="flex justify-center items-center space-x-8">
              {!islogged ? (
                <>
                  <li>
                    <a href="#features" className="text-blue-500">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#how-it-works" className="text-blue-500">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials" className="text-blue-500">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-blue-500">
                      Contact
                    </a>
                  </li>
                  <li>
                    <Link className="text-blue-500" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="text-blue-500" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-blue-500">
                    <Link to="/home" className="hover:border-b-4 border-b-black">Home</Link>
                  </li>
                  <li className="text-blue-500">
                    <Link to="/Bookings" className="hover:border-b-4 border-b-black">Bookings</Link>
                  </li>
                  {isOwner && (
                    <li className="text-blue-500">
                      <Link to="/yourroom/123">My House</Link>
                    </li>
                  )}
                  <li className="">
                    <Link to="/profile"><Avatar name="hello" /></Link>
                  </li>
                  <li className="">
                    <button onClick={handleLogout} className="text-blue-500">Logout</button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
