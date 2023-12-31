import React, { createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const user = useSelector(state => state.auth.user)
  const socket = io('http://localhost:5000', {
    withCredentials: true
  });

  const [ socket_id, setSocket_id ] = useState(null)

  useEffect(() => {
    console.log("SocketProvider: useEffect - Component mounted");

    const handleConnect = () => {
      console.log("SocketProvider: Connected to the socket!!!", socket.id);
      socket.emit('setUserID' , {user_id: user.user_id})
    };
    const handleConnectError = (error) => {
      console.error("SocketProvider: Socket connection error:", error.message);
    };

    if(socket_id == null) {
      socket.on('connect', handleConnect);
      socket.emit('getSocket',{uid: user.user_id},(sid) => {
        setSocket_id(sid)
      })
      socket.on('userJoined',(data)=> {
        console.log(`${data.user_id}: joined the room: ${data.roomId}`)
      })
      socket.on('connect_error', handleConnectError);
    }

    return () => {
      console.log("SocketProvider: Disconnected with socket");
      socket.off('connect', handleConnect);
      socket.off('connect_error', handleConnectError);
      socket.disconnect();
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;