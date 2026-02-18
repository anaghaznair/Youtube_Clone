import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { iconMenuOpen } from "../utils.js/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

export const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(iconMenuOpen(false));
  }, [dispatch]);

  return (
    <div className="flex  w-full bg-gray-100 min-h-screen">
      <div className=" px-4 py-6">
        <div className="relative  rounded-2xl overflow-hidden shadow-lg bg-black">
          <iframe
            width="800"
            height="450"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1&mute=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-6">
          <CommentsContainer />
        </div>
      </div>
      <div className="px-4 py-6 w-full">
        <LiveChat />
      </div>
    </div>
  );
};
