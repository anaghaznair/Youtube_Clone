import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils.js/chatSlice";
import { generateRandomName, getRandomSentence } from "../utils.js/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const messageList = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getRandomSentence(),
        }),
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="h-[450px] w-full border p-4 rounded-md border-gray-400 overflow-auto flex flex-col-reverse">
        {messageList.map((mes, index) => (
          <ChatMessage key={index} name={mes.name} message={mes.message} />
        ))}
      </div>
      <form
        className="mt-3 flex items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Anagha",
              message: liveMessage,
            }),
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 outline-none focus:border-black-500 focus:ring-2 focus:ring-blue-100 transition shadow-sm"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-4 py-2 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 active:scale-95 transition shadow-sm">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
