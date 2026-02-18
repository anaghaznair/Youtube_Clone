import React from "react";
import Button from "./Button";

const list = [
  "All",
  "News",
  "Music",
  "Malayalam Cinema",
  "Dramedy",
  "Tamil Cinema",
  "Akshay Saini",
  "Mixes",
  "Live",
  "Sports",
  "Interviews",
  "Wedding",
  "India",
  "Watched",
  "Subsribed",
  "New To You",
  "Visual Arts",
  "Recently Uploaded",
];

const ButtonList = () => {
  return (
    <div className="flex max-w-[95vw] overflow-auto scrollbar-hide ml-11">
      {list.map((title) => (
        <Button key={title} title={title} />
      ))}
    </div>
  );
};

export default ButtonList;
