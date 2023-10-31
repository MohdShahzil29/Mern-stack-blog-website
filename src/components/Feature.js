import React from "react";
// import img from "../assist/Gen-AI-Banner.jpg";
import img2 from "../assist/banner.png";
const Feature = () => {
  return (
    <div>
      <div className="flex justify-around bg-black mx-auto max-w-screen-2xl p-4 mt-2 text-white feature">
        <img className="h-[450px] " src={img2} alt="" />
        <h1 className="pt-[110px] text-4xl text-orange-50 font-mono mr-[22px]">
          Age Of Artificial Intelligence
        </h1>
      </div>
      <div className="flex justify-end relative bottom-[267px] w-[800px] left-[765px] text-center mx-auto]">
        <p className="text-white font-mono">
          Artificial Intelligence has been advancing beyond what humans have
          imagined, revolutionizing industries and reshaping our future.
        </p>
        {/* <button className="  relative top-[78px] right-[46%] w-[14%] bg-black border-stone-100 text-red-600">click here</button> */}
        <button class="relative top-[78px] right-[46%] w-[23%] transform -translate-x-1/2 w-1/7   border-2 border-red-500 text-white py-2 px-4 font-bold rounded-md cursor-pointer">
          Click here
        </button>
      </div>
    </div>
  );
};

export default Feature;
