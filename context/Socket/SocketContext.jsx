import React , { createContext , useEffect }  from 'react'
import { io } from 'socket.io-client';

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  console.log("Now connecting to socket");
  const socket = io('http://localhost:5000',{
    withCredentials: true
  });
  useEffect(() => {
    console.log("SocketProvider: useEffect - Component mounted");

    try {
      // Listen for the 'connect' event instead of 'connection'
      socket.on('connect', () => {
        console.log("SocketProvider: Connected to the socket!!!", socket.id);
      });

      // Handle socket errors
      socket.on('connect_error', (error) => {
        console.error("SocketProvider: Socket connection error:", error.message);
      });

      // Clean up the socket connection when the component is unmounted
      return () => {
        console.log("SocketProvider: useEffect - Component will unmount");
        console.log("SocketProvider: Disconnected with socket");
        socket.disconnect();
      };
    } catch (err) {
      console.log("SocketProvider: Socket Error: ", err.message);
    }
  }, [socket]);
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider
