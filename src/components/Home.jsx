import React from "react";
import ProfPic from "./../../public/image04.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen gap-16 relative">
      <div>
        <span className="p-0 min-w-min block rounded-full animate-pulse">
          <span className="p-2 bg-blue1 rounded-full block">
            <img
              src={ProfPic}
              alt="profile picture"
              className="rounded-full min-w-[270px] h-[270px] inline"
            />
          </span>
        </span>
      </div>
      <div>
        <h1 className="text-zinc-50 text-7xl font-bold">
          Control Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue1 to-blue2">
            Wealth
          </span>
        </h1>
        <div className="mt-8 mx-auto shady w-10 h-1"></div>
        <p className="text-shady text-2xl mt-8">
          Take control of your financial situation and start investing{" "}
          <span className="font-semibold">TODAY!</span>
        </p>
      </div>
      <a
        href="#product1"
        className="absolute flex justify-center items-center bottom-10 shady p-3 rounded-full text-4xl animate-bounce"
      >
        <MdKeyboardArrowDown />
      </a>
    </div>
  );
};

export default Home;
