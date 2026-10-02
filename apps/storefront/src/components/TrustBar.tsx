import React from "react";
import returns from "../../assets/returns.svg";
import cod from "../../assets/cod.svg";
import lowestPrices from "../../assets/lowest-price.svg";

function TrustBar() {
  const trustBarContent = [
    { image: returns, text: "7 Days Easy Return" },
    { image: cod, text: "Cash On Delivery" },
    { image: lowestPrices, text: "Lowest Prices" },
  ];
  return (
    <div className="flex justify-center gap-5 bg-white h-12 w-[1250px] rounded-md items-center">
      {trustBarContent.map((content) => (
        <div className="flex gap-2 items-center">
          <img src={content.image} alt="return-img" className="w-8 h-8" />
          <p className="text-sm">{content.text}</p>
        </div>
      ))}
    </div>
  );
}

export default TrustBar;
