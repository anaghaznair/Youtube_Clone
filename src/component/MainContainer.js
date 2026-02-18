import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { iconMenuOpen, menuToggleMain } from "../utils.js/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(iconMenuOpen(true));
    dispatch(menuToggleMain(true));
  }, []);

  return (
    <div className="mt-3">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
