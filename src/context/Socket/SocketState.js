import React from "react";
import useSocket from "../../hooks/useSocket";
import SocketContext from "./SocketContext";

const SocketState = (props) => {
  const { socket, online } = useSocket(
    "https://ticket-socket-server.herokuapp.com"
  );
  return (
    <SocketContext.Provider value={{ socket, online }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketState;
