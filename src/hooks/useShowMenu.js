import { useContext, useEffect } from "react";
import Uicontext from "../context/Uicontext/Uicontext";

const useShowMenu = (hidden) => {
  const { ShowMenu, HiddenMenu } = useContext(Uicontext);
  useEffect(() => {
    if (hidden) {
      HiddenMenu();
    } else {
      ShowMenu();
    }
    //eslint-disable-next-line
  }, []);
};

export default useShowMenu;
