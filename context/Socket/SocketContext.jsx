import React, { createContext, useEffect } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const socket = io('http://localhost:5000', {
    withCredentials: true
  });

  useEffect(() => {
    console.log("SocketProvider: useEffect - Component mounted");

    // Listen for the 'connect' event instead of 'connection'
    const handleConnect = () => {
      console.log("SocketProvider: Connected to the socket!!!", socket.id);
    };

    // Handle socket errors
    const handleConnectError = (error) => {
      console.error("SocketProvider: Socket connection error:", error.message);
    };

    // Set up event listeners
    socket.on('connect', handleConnect);
    socket.on('connect_error', handleConnectError);

    // Clean up the socket connection when the component is unmounted
    return () => {
      console.log("SocketProvider: useEffect - Component will unmount");
      console.log("SocketProvider: Disconnected with socket");

      // Remove event listeners
      socket.off('connect', handleConnect);
      socket.off('connect_error', handleConnectError);

      // Disconnect the socket
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
