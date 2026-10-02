import React from "react";

function HomeImage() {
  return (
    <div>
      <img
        src="https://images.meesho.com/images/marketing/1790686803620.webp"
        alt="HomeImage"
        className="relative"
      />
      <div className="flex flex-col absolute top-52 right-32 text-4xl text-center items-center space-y-3 font-black text-white">
        <p className="font-black">Smart Shopping</p>
        <p>Trusted by Millions</p>
        <button className="w-52 rounded-md font-thin text-center py-3 bg-white text-primary mt-2 cursor-pointer">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default HomeImage;
