import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setSearchTerm } from "../redux/slices/searchSlice";

const Navbar = () => {
    const search=useSelector(state=>state.search.searchTerm);
    const dispatch=useDispatch()
  return (
    <div className="flex gap-4">
    
    <input type="text" value={search} onChange={(e)=>dispatch(setSearchTerm(e.target.value))} className="border border-gray-300 rounded-lg px-3 py-1.5 outline-none focus:border-purple-500"/>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-5 py-2 rounded-full font-semibold transition-all ${
            isActive
              ? "bg-[#8C56D4] text-white shadow-md"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/characters"
        className={({ isActive }) =>
          `px-5 py-2 rounded-full font-semibold transition-all ${
            isActive
              ? "bg-[#8C56D4] text-white shadow-md"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`
        }
      >
        Characters
      </NavLink>
    </div>
  );
};

export default Navbar;
