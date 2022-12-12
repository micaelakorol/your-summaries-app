import React from "react";
import { ReactComponent as IconToClose } from "../../../assets/log-out.svg";
import { auth } from "../../../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Button from "../../../styled-components/Button";
//Componente para cerrar sesion del usuario:
const CloseSession = () => {
  const navigate = useNavigate();
  //metodo signOut = cierra sesion de firebase.

  const toClose = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Button as="button" onClick={toClose}>
      <IconToClose />
    </Button>
  );
};

export default CloseSession;
