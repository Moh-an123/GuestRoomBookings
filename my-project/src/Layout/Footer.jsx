import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="bg-blue-500 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <p>© 2024 GuestRoomBooking. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white">Facebook</a>
            <a href="#" className="text-white">Twitter</a>
            <a href="#" className="text-white">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
