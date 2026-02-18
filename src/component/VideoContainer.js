import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils.js/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { videoResultStore } from "../utils.js/appSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.app.videoResult);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async function () {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
    // console.log(json.items);
    dispatch(videoResultStore(json.items));
    console.log(json.items);
  };

  // return <div>{videos.length > 0 && <VideoCard info={videos[0]} />}</div>;
  return (
    <div className="flex flex-wrap absolute left-14">
      {videoList.length > 0 && <AdVideoCard info={videoList[5]} />}
      {videoList.length > 0 &&
        videoList.map((video) => (
          <Link
            key={video.id.videoId ? video.id.videoId : video.id}
            to={"/watch?v=" + (video.id.videoId ? video.id.videoId : video.id)}
          >
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
