import React, { useRef } from "react";

import { useSelector } from "react-redux";
import SidebarOpen from "./SidebarOpen";
import SidebarClosed from "./SidebarClosed";

const Sidebar = () => {
  const menuClicked = useSelector((store) => store.app.isMenuOpen);

  return menuClicked ? <SidebarClosed /> : <SidebarOpen />;
};

export default Sidebar;
