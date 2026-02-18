import React from "react";
import SidebarItem from "./SidebarItem";
import {
  HOME_ICON,
  SHOPPING_ICON,
  SHORTS_ICON,
  MOVIES_ICON,
  MUSIC_ICON,
  GAME_ICON,
} from "../utils.js/constants";
import { Link } from "react-router-dom";

const SidebarOpen = () => {
  return (
    <div className="absolute">
      <aside className="w-56 p-3 text-sm bg-white animate-slideIn fixed z-50 mt-3">
        <div className="space-y-2">
          <Link to="/">
            <SidebarItem label="Home" icon={HOME_ICON} />
          </Link>

          <SidebarItem label="Shorts" icon={SHORTS_ICON} />
        </div>

        <div className="mt-4 border-t pt-3">
          <div className="flex items-center justify-between px-2 py-2 font-semibold">
            <span>Subscriptions</span>
            <span>›</span>
          </div>

          <ul className="space-y-1">
            <SidebarItem label="Movies" icon={MOVIES_ICON} />
            <SidebarItem label="Shopping" icon={SHOPPING_ICON} />
            <SidebarItem label="Music" icon={MUSIC_ICON} />
            <SidebarItem label="Gaming" icon={GAME_ICON} />
          </ul>
        </div>

        <div className="mt-4 border-t pt-3">
          <h1 className="px-2 py-2 font-semibold">You</h1>

          <ul className="space-y-1">
            <SidebarItem label="History" />
            <SidebarItem label="Playlists" />
            <SidebarItem label="Watch later" />
            <SidebarItem label="Liked videos" />
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SidebarOpen;
