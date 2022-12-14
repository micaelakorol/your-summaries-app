import { useContext } from "react";
import { UserContext } from "../../../contexts/useContext";
import LoginUser from "../Services/LoginUser";

const LoginValidations = () => {

  const { email, password, setAlert, setChangeAlert } = useContext(UserContext);
  let expEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

  const { LogIn } = LoginUser();

  //Inicio de sesion y validaciones:
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setChangeAlert(true);
      setAlert({
        tipo: "error",
        mensaje: "Por favor , rellena todos los datos",
      });
      return;
    }
    if (!expEmail.test(email)) {
      setChangeAlert(true);
      setAlert({
        tipo: "error",
        mensaje: "Ingresa un correo valido",
      });
      return;
    }
    LogIn();
  };

  return { handleSubmitLogin };
};

export default LoginValidations;
