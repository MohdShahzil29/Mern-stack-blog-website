import React from "react";
import { BsTwitter } from "react-icons/bs";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
// const data = [
//   { id: 1, name: "All Category", link: "/All-category" },
// ];

const Banner = () => {
  const navigation = useNavigate()
  return (
    <div className="bg-black mt-2 h-[280px] mx-auto max-w-screen-2xl p-4 banner">
      <div className="text-white ml-[29px]">
        <h1 className="text-2xl pt-8 font-bold">Discover Nice Article Here</h1>
        <p className="w-[600px] pt-4 font-mono">
          Discover Nice Article Here: Is your go-to source for a diverse
          selection of high-quality articles covering a wide range of topics.
        </p>
        <div className="flex justify-end cursor-pointer ">
          <BsTwitter className="mt-[-65px] mr-[10px] text-blue-700" size={30} />
          <TiSocialYoutubeCircular
            className="mt-[-65px] mr-[40px] text-red-700"
            size={32}
          />
        </div>
      </div>
      <div className="flex  justify-between pt-[57px]">
        <div className="relative text-white ml-[29px]">
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="bg-gray-500 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 mr-4"
          ></button>
        </div>
        {/* <div className="flex gap-[20px] mr-[33%]">
          {data.map((c) => (
            <li
              className="text-white list-none cursor-pointer hover:text-yellow-500"
              key={c.id}
              onClick={(() => navigation(c.link))}
            >
              {c.name}
            </li>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
