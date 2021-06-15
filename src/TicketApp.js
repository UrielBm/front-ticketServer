import React from "react";
import RouterPages from "./pages/RouterPages";
import Uistate from "./context/Uicontext/Uistate";
import SocketState from "./context/Socket/SocketState";
const TicketApp = () => {
  return (
    <>
      <SocketState>
        <Uistate>
          <RouterPages />
        </Uistate>
      </SocketState>
    </>
  );
};

export default TicketApp;
