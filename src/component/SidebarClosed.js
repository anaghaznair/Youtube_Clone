import React from "react";
import {
  HOME_ICON_CLOSED,
  SHOPPING_ICON_CLOSED,
  SHORTS_ICON_CLOSED,
  MOVIES_ICON_CLOSED,
} from "../utils.js/constants";
import SidebarClosedItem from "./SidebarClosedItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SidebarClosed = () => {
  const isIconMenuOpened = useSelector((store) => store.app.isIconMenuOpen);
  return (
    isIconMenuOpened && (
      <aside className="mt-5 fixed">
        <Link to="/">
          <SidebarClosedItem icon={HOME_ICON_CLOSED} />
        </Link>

        <SidebarClosedItem icon={SHOPPING_ICON_CLOSED} />
        <SidebarClosedItem icon={SHORTS_ICON_CLOSED} />
        <SidebarClosedItem icon={MOVIES_ICON_CLOSED} />
      </aside>
    )
  );
};

export default SidebarClosed;
