import { useReducer } from "react";
import {
  DELETE_AGENTE,
  HIDDEN_MENU,
  SAVE_AGENTE,
  SHOW_MENU,
} from "../../Types";
import Uicontext from "./Uicontext";
import UiReducer from "./UIreducer";

const Uistate = (props) => {
  const initialState = {
    hiddenMenu: false,
    agente: localStorage.getItem("agente"),
    escritorio: localStorage.getItem("escritorio"),
  };
  const [state, dispatch] = useReducer(UiReducer, initialState);
  const ShowMenu = () => {
    dispatch({
      type: SHOW_MENU,
    });
  };
  const HiddenMenu = () => {
    dispatch({
      type: HIDDEN_MENU,
    });
  };
  const SaveAgente = (agente, escritorio) => {
    dispatch({
      type: SAVE_AGENTE,
      payload: {
        agente,
        escritorio,
      },
    });
  };
  const DeleteAgente = () => {
    dispatch({
      type: DELETE_AGENTE,
    });
  };
  return (
    <Uicontext.Provider
      value={{
        agente: state.agente,
        escritorio: state.escritorio,
        hiddenMenu: state.hiddenMenu,
        ShowMenu,
        HiddenMenu,
        SaveAgente,
        DeleteAgente,
      }}
    >
      {props.children}
    </Uicontext.Provider>
  );
};

export default Uistate;
