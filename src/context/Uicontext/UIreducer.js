import {
  DELETE_AGENTE,
  HIDDEN_MENU,
  SAVE_AGENTE,
  SHOW_MENU,
} from "../../Types";

const UiReducer = (state, action) => {
  switch (action.type) {
    case SHOW_MENU:
      return {
        ...state,
        hiddenMenu: false,
      };
    case HIDDEN_MENU:
      return {
        ...state,
        hiddenMenu: true,
      };
    case SAVE_AGENTE:
      localStorage.setItem("agente", action.payload.agente);
      localStorage.setItem("escritorio", action.payload.escritorio);
      return {
        ...state,
        agente: action.payload.agente,
        escritorio: action.payload.escritorio,
      };
    case DELETE_AGENTE:
      localStorage.removeItem("agente");
      localStorage.removeItem("escritorio");
      return {
        ...state,
        agente: null,
        escritorio: null,
      };
    default:
      return state;
  }
};
export default UiReducer;
