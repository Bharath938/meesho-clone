import React, { useState } from "react";
import Modal from "./Modal";

const categoryList = [
  { id: 1, text: "Popular" },
  { id: 2, text: "Kurthi, Saree & Lehenga" },
  { id: 3, text: "Women Western" },
  { id: 4, text: "Lingerie" },
  { id: 5, text: "Men" },
  { id: 6, text: "Kids & Toys" },
  { id: 7, text: "Home & Kitchen" },
  { id: 8, text: "Beauty & Health" },
  { id: 9, text: "Jewellery & Accessories" },
  { id: 10, text: "Bags" },
];

function Category() {
  const [activeId, setActiveId] = useState(0);

  return (
    <div className="relative" onMouseLeave={() => setActiveId(0)}>
      <ul className="flex justify-between items-stretch h-12 px-4 border border-base">
        {categoryList.map((item) => (
          <li
            key={item.id}
            onMouseEnter={() => setActiveId(item.id)}
            className={`flex items-center  px-3 cursor-pointer border-b-2 ${
              activeId === item.id
                ? "hover: text-primary"
                : "border-transparent"
            }`}
          >
            {item.text}
          </li>
        ))}
      </ul>

      {activeId !== 0 && (
        <div className="absolute top-full left-0 right-0 w-full z-50 bg-white shadow-lg">
          <div className="max-w-[1400px] mx-auto">
            <Modal categoryId={activeId} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;
