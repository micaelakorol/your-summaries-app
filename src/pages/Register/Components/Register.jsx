import React, { useContext } from "react";
import Button from "../../../styled-components/Button";
import {
  TitlePrincipal,
  Headers,
  ContainerHeader,
} from "../../../styled-components/Header";
import Alert from "../../../components/Alert/Alert";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { UserContext } from "../../../contexts/useContext";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const { alert, userSession } = useContext(UserContext);
  const navigate = useNavigate();

  //Si al cargar la app hay un usuario activo, se redirige al dashboard:
  useEffect(() => {
    if (userSession !== null) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <>
      <Headers>
        <ContainerHeader>
          <TitlePrincipal>Crear Cuenta</TitlePrincipal>
          <div>
            <Button to="/login">Iniciar Sesion</Button>
          </div>
        </ContainerHeader>
      </Headers>
      <RegisterForm />

      {/* Cambia los mensajes de error dinamicamente */}
      <Alert tipo={alert.tipo} mensaje={alert.mensaje} />
    </>
  );
};

export default Register;
