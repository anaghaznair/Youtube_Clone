import React from "react";
import { PROFILE_PIC } from "../utils.js/constants";

const VideoCard = ({ info }) => {
  if (!info) return null;
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="w-[100%] p-2 sm:w-72 ">
      <img
        className="rounded-xl w-full mb-2"
        alt="Thumbnail"
        src={thumbnails.high.url}
      />
      <div className="flex gap-1">
        <img
          className="w-10 h-10 rounded-full"
          alt="Profile Pic"
          src={PROFILE_PIC}
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />

        <ul>
          <li className="font-semibold">{title}</li>
          <li className="text-gray-600 text-sm">{channelTitle}</li>
          <li className="text-gray-600 text-sm">
            {statistics ? Math.floor(statistics.viewCount / 1000) : 0}K views
          </li>
        </ul>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="relative bg-gray-200 rounded-md ">
      <VideoCard info={info} />
      <div className="flex justify-around mb-2 ">
        <button class="px-8 py-2  rounded-full bg-neutral-800 text-white font-medium hover:bg-neutral-700 transition">
          Watch
        </button>

        <button class="px-8 py-2  rounded-full bg-white text-black font-medium shadow-sm hover:bg-gray-100 transition">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
