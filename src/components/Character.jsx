import React from "react";
import { Link } from "react-router-dom";
const Character = ({ charac }) => {
  return (
    <Link to={`/characters/${charac.id}`} key={charac.id}>
      <div className="w-72 h-110 bg-[#FFF4BF] relative rounded-[22px] overflow-hidden flex flex-col items-center hover:shadow-lg hover:border-black hover:scale-102 transition-all cursor-pointer ">
        <div className="relative w-full h-1/2 flex items-center justify-center">
          <div className="w-full h-full bg-linear-to-l from-[#FFBEFB] to-[#8C56D4] absolute z-0 rounded-b-[110px]"></div>

          <div className="w-[120px] h-[120px] rounded-full bg-white p-1 shadow-md relative  flex items-center justify-center overflow-hidden border-4 border-white">
            <img
              src={charac.image}
              alt={charac.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="flex-1 w-full max-h-[50%] flex justify-center items-start pt-5 pb-3">
          <div className="w-[85%] bg-white p-4 flex flex-col gap-2 rounded-2xl ">
            <h1 className="text-[22px] font-bold text-center text-gray-900 mb-6 truncate">
              {charac.name}
            </h1>
            <div className="flex justify-center gap-3 items-center">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Status:
              </span>
              <div className="flex gap-2 items-center">
                {charac.status === "Alive" ? (
                  <div className="bg-green-500 w-3.5 h-3.5 rounded-full shadow-sm"></div>
                ) : charac.status === "Dead" ? (
                  <div className="bg-red-600 w-3.5 h-3.5 rounded-full shadow-sm"></div>
                ) : (
                  <div className="bg-gray-400 w-3.5 h-3.5 rounded-full shadow-sm"></div>
                )}

                <span className="text-sm font-semibold text-gray-800">
                  {charac.status}
                </span>
              </div>
            </div>
            <div className="h-[2px] w-full rounded-full bg-gray-100 my-1"></div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Species
              </span>
              <span className="text-sm font-semibold text-gray-800 text-right truncate max-w-[50%]">
                {charac.species}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Character;
