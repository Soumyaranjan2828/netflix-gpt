import React from "react";
import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-10 absolute text-white">
      <h1 className="text-bold text-2xl">{title}</h1>
      <p className="w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black px-16 rounded text-2xl hover:opacity-10">
          <FaPlay /> Play
        </button>
        <button className="bg-gray-400 text-white px-14 rounded text-2xl ms-2">
          <IoMdInformationCircleOutline /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
