const SidebarItem = ({ label, icon }) => {
  return (
    <li
      className="
      flex items-center gap-4 
      px-3 py-2 
      rounded-lg 
      cursor-pointer
      text-gray-700
      hover:bg-gray-100
      active:bg-gray-200
      transition
    "
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span className="truncate">{label}</span>
    </li>
  );
};

export default SidebarItem;
