import React, { useContext, useEffect } from 'react'
import Icons from '@/components/Icons';
import { SocketContext } from '@/context/Socket/SocketContext';
import { useSelector } from 'react-redux';

const MessageBox = ({ setChats }) => {
  const socket = useContext(SocketContext);
  const user = useSelector(state => state.auth.user)
  const active_room = useSelector(state => state.chat.activeRoom)

  const Send = (e) => {
    e.preventDefault(); 
    const messageValues = new FormData(e.currentTarget);
    let values = {};
    for(var pair of messageValues.entries()) values[pair[0]] = pair[1];

    setChats((oldChats) => {
      return [...oldChats , {
          message: values.message,
          messageFrom: 'sender',
          sentBy: user.user_id,
          senderName: user.displayName
      }]
    })

    socket.emit('chatMessage', {
      message: {
        message: values.message,
        senderId: user.user_id,
        senderName: user.displayName
      },
      room_id: active_room
    }
    );
    e.target.reset();
  }

  useEffect(()=> {
    const handleIncomingMessages = (message) => {
      console.log('Recieved Message: ', message);
      if(message.senderId !== user.user_id) {
        setChats((oldChats) => [
          ...oldChats,
          {
            message: message.message,
            messageFrom: 'reciever',
            senderName: message.senderName,
            sentBy: message.senderId
          }
        ])
      }
    }

    socket.on('chatMessage',handleIncomingMessages)

    return ()=> {
      console.log("Cleaning useEffect");
      socket.off('chatMessage',handleIncomingMessages)
    }
  },[socket, setChats])

  return (  
    <form onSubmit={Send} className="h-12 w-full flex flex-row justify-between gap-x-2 items-center">
        <div className="w-[90%] lg:w-[95%] h-10 rounded-md bg-gray-900 backdrop-blur-3xl focus:outline-1 outline-gray-400 overflow-hidden">
            <input
            type="text"
            name="message"
            className="w-full h-full bg-transparent px-2 text-gray-400"
            id="msg"
            placeholder="Type your messsage here..."
            />
        </div>
        <div className="w-[10%] lg:w-[5%] h-10 rounded-md group bg-gray-900 hover:bg-gray-700 transition-all duration-300 backdrop-blur-3xl flex justify-center items-center">
            <button type='submit'>
                <Icons.SendText className="w-6 h-6 fill-gray-400 group-hover:fill-gray-900 transition-all duration-300" />
            </button>
        </div>
    </form>
  );
}

export default MessageBox