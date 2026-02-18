import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle, videoResultStore } from "../utils.js/appSlice";
import { YOUTUBE_SEARCH_API, GOOGLE_API_KEY } from "../utils.js/constants";
import { searchResults } from "../utils.js/searchSlice";
import { current } from "@reduxjs/toolkit";

const Head = () => {
  const menuClicked = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSelected, setsearchSelected] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const handleHamburgerClick = () => {
    dispatch(menuToggle(menuClicked));
  };

  useEffect(() => {
    if (!searchSelected) return;
    getVideos(searchSelected);
    console.log(searchSelected);
  }, [searchSelected]);

  const handleSearchClick = (value) => {
    setsearchSelected(value);
    setShowSuggestions(false);

    setSearchQuery(value);
    getVideos(value);
  };

  const getVideos = async function (query) {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=" +
        query +
        "&key=" +
        GOOGLE_API_KEY,
    );
    const json = await data.json();
    console.log(json.items);
    dispatch(videoResultStore(json.items));
  };

  const handleClickSearch = () => {
    if (!searchQuery) return;
    setShowSuggestions(false);
    getVideos(searchQuery);
    console.log(searchQuery);
  };

  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        searchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const searchSuggestions = async function () {
    console.log("API CALL MADE - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      searchResults({
        [searchQuery]: json[1],
      }),
    );
  };
  return (
    <div className="grid grid-cols-12 items-center px-5 pt-5 z-50 fixed top-0 bg-white">
      <div className="flex col-span-1 gap-4 items-center">
        <img
          className="h-6 cursor-pointer"
          alt="Hamburger menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg=="
          onClick={handleHamburgerClick}
        />
        <img
          className="h-6"
          alt="Youtube-Icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJUrUMJcbDFXOD1gulriAKqggj-hx6lE1gEA&s"
        />
      </div>

      <div className="col-span-10 flex justify-center">
        <div className="relative w-1/2">
          <div className="flex">
            <input
              className="w-full border border-gray-300 px-5 py-2 rounded-l-full focus:outline-none focus:border-blue-500"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              onFocus={() => setShowSuggestions(true)}
              // onBlur={() => setShowSuggestions(false)}
            />

            <button
              className="border border-gray-300 px-5 py-2 rounded-r-full bg-gray-100 hover:bg-gray-200"
              onClick={handleClickSearch}
            >
              <svg
                className="w-5 h-5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>

          {suggestions.length > 0 && showSuggestions && (
            <ul className="absolute top-full left-0 mt-2 w-[80%] bg-white rounded-xl shadow-lg border border-gray-200 z-50 overflow-hidden">
              {suggestions.map((result) => (
                <li
                  key={result}
                  className="px-5 py-3 hover:bg-gray-100 cursor-pointer flex items-center"
                  onClick={() => handleSearchClick(result)}
                >
                  <svg
                    className="w-5 h-5 me-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  {result}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="col-span-1 flex justify-end">
        <img
          className="h-6"
          alt="User-Icon"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default Head;
