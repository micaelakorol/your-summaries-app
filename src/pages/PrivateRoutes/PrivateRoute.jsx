import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../../contexts/useContext";

const PrivateRoute = () => {
  //Si el usuario tiene una sesion existente, se le permite ingresar a las demas rutas, si no se le redirige automaticamente a register.
  const { userSession } = useContext(UserContext);

  return <>{userSession ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRoute;
