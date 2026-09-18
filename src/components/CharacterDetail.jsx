import React from "react";
import { useNavigate } from "react-router-dom";

const CharacterDetail = ({ charac }) => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-[#FFF4BF] p-6 flex flex-col items-center justify-center font-sans relative">
      
      <div className="w-full max-w-5xl mb-6 flex justify-start">
        <button onClick={()=>navigate(-1)} className="bg-white text-gray-700 hover:bg-gray-100 rounded-full px-6 py-2 cursor-pointer shadow-sm transition-all font-medium flex items-center gap-2 hover:scale-105">
          <span>←</span> Back
        </button>
      </div>

      <div className="flex flex-col md:flex-row h-auto md:h-[500px] w-full max-w-5xl rounded-[32px] bg-white overflow-hidden shadow-2xl border border-white">
        
        <div className="w-1/2 bg-linear-to-b from-[#8C56D4] to-[#FFBEFB] p-8 flex flex-col items-center justify-center gap-8">
          
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-white/20 p-2 backdrop-blur-sm shadow-inner border-4 border-white">
            <img
              src={charac.image}
              alt={charac.name}
              className="w-full h-full object-cover rounded-full shadow-md"
            />
          </div>
          <div className="flex flex-col gap-4 items-center text-center w-full">
            <h1 className="text-3xl md:text-[45px] font-extrabold text-white drop-shadow-sm w-full">
              {charac.name}
            </h1>
            <div className="px-5 py-2.5 bg-white/30 rounded-full flex items-center justify-center gap-2.5 backdrop-blur-sm border border-white/20 shadow-inner">
              <div
                className={`w-4 h-4 rounded-full shadow-lg ${
                  charac.status === "Alive"
                    ? "bg-green-400"
                    : charac.status === "Dead"
                    ? "bg-red-500"
                    : "bg-gray-300"
                }`}
              ></div>
              <span className="text-lg font-bold text-white tracking-wide">
                {charac.status}
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-8 md:p-12 bg-gray-50/50 flex flex-col">
          <p className="text-3xl font-bold mb-10 text-gray-900 tracking-tight border-b pb-4 border-gray-200">
            Character Details
          </p>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5 content-start">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Species</span>
              <p className="text-base font-semibold text-gray-900 truncate">{charac.species}</p>
            </div>
             <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Gender</span>
              <p className="text-base font-semibold text-gray-900 truncate">{charac.gender}</p>
            </div>
             <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Origin</span>
              <p className="text-base font-semibold text-gray-900 truncate">{charac.origin?.name}</p>
            </div>
             <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Last Location</span>
              <p className="text-base font-semibold text-gray-900 truncate">{charac.location?.name}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;