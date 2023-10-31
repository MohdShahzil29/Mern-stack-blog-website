import axios from "axios";
import React, { useEffect, useState } from "react";
import img from "../assist/Gen-AI-Banner.jpg"
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const [post, setPost] = useState([])
  // console.log(post)
  const params = useParams()

  const getSinglePost = async () => {
    try {
      const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/post/get-selected-post/${params.slug}`)
      setPost(data?.post)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSinglePost()
  }, [])
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
  
          <>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              Lorem ipsum dolor sit amet.
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-2">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 6.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <img
              src={img}
              alt="Post Image"
              className="w-[50%] mx-auto h-[50%] rounded-lg shadow-md mb-4"
            />
            <div className="text-gray-700">
              <p className="custom-line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo temporibus odio ex at velit cumque, voluptatem aliquid error ad quidem tempore et esse ipsam harum iusto, pariatur maxime? Explicabo unde nisi necessitatibus laborum neque? Voluptatum, accusamus dignissimos atque ad tenetur vel, nam iure quos enim ipsum pariatur facilis. Placeat voluptas blanditiis numquam? Corporis praesentium fugiat id repellat, dolorum dolore autem. Aliquam natus hic est eligendi veniam temporibus sed obcaecati neque.
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300">
                Share
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full ml-2 transition duration-300">
                Like
              </button>
            </div>
          </>
     
      </div>
    </>
  );
};

export default PostDetails;
