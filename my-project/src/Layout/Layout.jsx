import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const [userDetails, setUserDetails] = useState({ email: '', password: '', owner: false });
  const [islogged, setIslogged] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const setvis = (logdetails) => {
    console.log(logdetails);
    setUserDetails(logdetails);
    setIslogged(true);
    setIsOwner(logdetails.owner);

    // Save user details to localStorage
    localStorage.setItem('userDetails', JSON.stringify(logdetails));
    localStorage.setItem('islogged', 'true');
  };

  useEffect(() => {
    // Check localStorage for user details
    const storedUserDetails = localStorage.getItem('userDetails');
    const storedIsLogged = localStorage.getItem('islogged');

    if (storedUserDetails && storedIsLogged === 'true') {
      const parsedUserDetails = JSON.parse(storedUserDetails);
      setUserDetails(parsedUserDetails);
      setIslogged(true);
      setIsOwner(parsedUserDetails.owner);
    }
  }, []);

  return (
    <div>
      <Header islogged={islogged} userDetails={userDetails} isOwner={isOwner} />
      <Outlet context={{ setUserDetails, setIslogged, setvis, islogged }} />
      <Footer />
    </div>
  )
}

export default Layout
