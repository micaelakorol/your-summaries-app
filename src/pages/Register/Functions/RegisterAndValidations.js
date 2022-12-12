import { useContext } from "react";
import { UserContext } from "../../../contexts/useContext";
import CreateUser from "../Services/CreateUser";

//Registro de usuarios y validaciones:
const RegisterUser = () => {
  const { setChangeAlert, setAlert, password, email, password2 } = useContext(
    UserContext
  );

  const { createUser } = CreateUser();
  let expEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

  const handleValidations = async (e) => {
    e.preventDefault();
    if (email === "" || password === "" || password2 === "") {
      setChangeAlert(true);
      setAlert({
        tipo: "error",
        mensaje: "Por favor , rellena todos los datos",
      });
      return;
    }
    if (password !== password2) {
      setChangeAlert(true);
      setAlert({
        tipo: "error",
        mensaje: "Las contraseñas deben ser iguales",
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
    createUser();
  };

  return {
    handleValidations,
  };
};

export default RegisterUser;
