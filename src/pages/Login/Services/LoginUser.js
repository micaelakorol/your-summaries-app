import { useContext } from "react";
import { auth } from "../../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { UserContext } from "../../../contexts/useContext";
import { initialState } from "../../../components/initialValues/InitialState";
// Funcion de inicio de sesion para usuarios registrados:
const LoginUser = () => {
  
  const {email,password,setAlert,setChangeAlert,setValueInput} = useContext(UserContext);
  const navigate = useNavigate();

  const LogIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      //Si se registro con exito..
      setChangeAlert(true);
      setAlert({
        tipo: "exito",
        mensaje: "Iniciando sesión...",
      });
      setTimeout(() => {
        navigate("/dashboard");
        setValueInput(initialState);
      }, 1000);
      //error:
    } catch (error) {
      setChangeAlert(true);
      let message = "";
      switch (error.code) {
        case "auth/wrong-password":
          message = "La contraseña no es correcta";
          break;
        case "auth/user-not-found":
          message = "El email no esta registrado";
          break;
        default:
          message = "Error";
          break;
      }
      setAlert({ tipo: "error", mensaje: message });
      return;
    }
  };
  return { LogIn };
};

export default LoginUser;
