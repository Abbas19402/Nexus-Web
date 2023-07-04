import React , { createContext , useEffect }  from 'react'
import { io } from 'socket.io-client';

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  console.log("Now connecting to socket");
  const socket = io.connect('http://localhost:5000');
  useEffect(()=> {
    socket.connect();
    try{
      socket.on('connect' , () => {
        console.log('A new user connected with the socket!!!!')
      })
    }
    catch(err) {
      console.log("Socket Error: ",err.message);
    }
    return () => {
      socket.disconnect();
    }
  },[socket]);
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider
