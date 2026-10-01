import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 h-20 border">
      <span className="text-4xl font-medium cursor-pointer">meesho</span>
      <div className="flex w-130 border h-10 items-center gap-3 rounded-md px-2">
        <CiSearch className="size-7 text-gray-500" />
        <input
          type="text"
          name="searchAny"
          id="searchAny"
          placeholder="Try Saree, Kurthi or Search by Product Code"
          className="w-full h-full outline-none"
        />
      </div>
      <div className="flex flex-col justify-center items-center cursor-pointer">
        <IoPersonOutline className="size-7" />
        <span>Profile</span>
      </div>
      <div className="flex flex-col justify-center items-center cursor-pointer">
        <FiShoppingCart className="size-7" />
        <span>Cart</span>
      </div>
    </nav>
  );
}

export default Navbar;
