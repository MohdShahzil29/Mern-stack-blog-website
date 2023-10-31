import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../assist/Gen-AI-Banner.jpg";

const Card = () => {
  const naviagation = useNavigate();
  const [posts, setPosts] = useState([])
  console.log(posts)

 const gettAllPost = async () => {
  try {
    const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/post/get-all-blogs`)
    setPosts(data?.posts)
  } catch (error) {
    console.log(error)
  }
 }

 useEffect(() => {
  gettAllPost()
 }, [])

  return (
    <>
 
        <>
          <div  className="mx-auto max-w-screen-2xl p-4">
            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
              <div className="px-4 py-2">
                <h1 className="text-gray-900 font-bold text-3xl uppercase">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="text-gray-600 text-sm mt-1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore praesentium modi perferendis possimus atque, consequatur natus. Temporibus iste possimus commodi?  
                  </p>
              </div>
              <img
                className="h-56 w-full object-cover mt-2"
                // src={`${process.env.REACT_APP_API}/api/v1/post/get-photo/${p._id}`}
                alt="NIKE AIR"
              />
              <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <button
                  className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"
                  //  onClick={(() => naviagation(`/post/${p.slug}`))}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </>
 
    </>
  );
};

export default Card;
