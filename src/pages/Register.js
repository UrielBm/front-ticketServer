import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import FormRegister from "../components/FormRegister";
import Title from "../components/Title";
import Uicontext from "../context/Uicontext/Uicontext";
import useShowMenu from "../hooks/useShowMenu";

const Register = () => {
  useShowMenu(false);
  const { agente, escritorio } = useContext(Uicontext);
  if (agente && escritorio) {
    return <Redirect to="/desktop" />;
  }
  return (
    <div>
      <Title title="Registro de ejecutivos" />
      <FormRegister />
    </div>
  );
};

export default Register;
