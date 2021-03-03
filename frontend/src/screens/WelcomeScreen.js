import React from "react";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <main className="w-screen h-screen cover relative">
      <div className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 font-kufi">
        <div className="text-typing px-10">
          <h1 className="text-7xl text-gray-50 font-semibold mb-2">
            مرحبا بك يا محب التاريخ
          </h1>
          <p className="text-gray-50 text-2xl my-4">
            احجز مقعدك واخبرنا عن مجد اجدادنا
          </p>
        </div>
        <Link to="/home">
          <button className="bg-gray-200 opacity-70 float-left py-2 px-4 rounded text-xl font-thin shadow-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:opacity-100">
            ابدإ الرحلة
          </button>
        </Link>
      </div>
    </main>
  );
};

export default WelcomeScreen;
