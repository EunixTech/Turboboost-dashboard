import React from "react";

const ChatContainer = () => {
  return (
    <div className="w-[40px] h-[40px] rounded-[50%] fixed z-30 bottom-[10px] cursor-pointer right-[10px] flex items-center bg-[#000]  justify-center">
      <img
        src="/graphic/chat/chat.svg"
        alt=""
        className="translate-x-[0px]  translate-y-[1.5px] w-[15px] h-[15px]"
      />
    </div>
  );
};

export default ChatContainer;
