import React , { useState } from "react";
import Header from "@/components/Header";
import Chat from "@/components/Chat";
import Sidebar from "@/components/Sidebar";
import Styles from "@/styles/Scrollbar.module.css"

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
