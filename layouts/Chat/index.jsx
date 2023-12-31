import React , { useState } from "react";
import Chat from "@/components/Chat";

const ChatLayoutMobile = () => {
  const [ chatSelected , setChatSelected ] = useState(false)
  return (
    <div className="w-full h-full bg-black overflow-hidden">
        <Chat
            setChatSelected={setChatSelected}
            chatSelected={chatSelected}
        />
    </div>
  );
};

export default ChatLayoutMobile;
