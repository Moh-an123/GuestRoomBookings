// import Link from 'next/li';

import { Link } from "@nextui-org/react";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  const { islogged } = useOutletContext();

  return (
    <div>
      
      <main>
      { !islogged&& <section className="hero bg-blue-500 text-white text-center py-20">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold">Welcome to Guest Room Booking</h1>
            <p className="mt-4 text-lg">Easily manage and book rooms for short stays</p>
            <a className="mt-6 inline-block bg-white text-blue-500 py-2 px-4 rounded" href="/signup">Get Started</a>
          </div>
        </section>
}

        <section id="features" className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Features</h2>
            <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/3 p-4">
                <h3 className="text-2xl font-semibold">Easy Room Management</h3>
                <p className="mt-2">Create, edit, and manage rooms with ease.</p>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <h3 className="text-2xl font-semibold">Seamless Booking</h3>
                <p className="mt-2">Effortlessly book rooms for your stay.</p>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <h3 className="text-2xl font-semibold">Secure Payments</h3>
                <p className="mt-2">Safe and secure payment options.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">How It Works</h2>
            <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/3 p-4">
                <h3 className="text-2xl font-semibold">1. Register</h3>
                <p className="mt-2">Sign up as a house owner or customer.</p>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <h3 className="text-2xl font-semibold">2. Add or Browse Rooms</h3>
                <p className="mt-2">House owners add rooms, customers browse and book.</p>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <h3 className="text-2xl font-semibold">3. Book and Enjoy</h3>
                <p className="mt-2">Complete your booking and enjoy your stay.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
            <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/3 p-4">
                <p className="italic">"A fantastic service! So easy to use."</p>
                <p className="mt-2 font-semibold">- Happy Customer</p>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <p className="italic">"Managing my rooms has never been easier."</p>
                <p className="mt-2 font-semibold">- Satisfied House Owner</p>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <p className="italic">"I found the perfect place to stay in minutes."</p>
                <p className="mt-2 font-semibold">- Thrilled Guest</p>
              </div>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  );
}
