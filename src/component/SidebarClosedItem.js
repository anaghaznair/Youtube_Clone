import React from "react";

const SidebarClosedItem = ({ icon }) => {
  return (
    <div>
      <div>
        <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          {icon}
        </li>
      </div>
    </div>
  );
};

export default SidebarClosedItem;
