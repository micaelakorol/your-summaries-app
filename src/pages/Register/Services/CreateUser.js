import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../../firebase/config";
import { UserContext } from "../../../contexts/useContext";
import { initialState } from "../../../components/initialValues/InitialState";

const CreateUser = () => {
  const {email,password,setChangeAlert,setAlert,setValueInput} = useContext(UserContext);
  const navigate = useNavigate();

  //Funcion para crear un nuevo usuario:
  const createUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setChangeAlert(true);
      setAlert({
        tipo: "exito",
        mensaje: "Registrado con éxito!",
      });
      setTimeout(() => {
        navigate("/login");
        setValueInput(initialState);
        return;
      }, 1000);
    } catch (error) {
      setChangeAlert(true);
      let message = "";
      switch (error.code) {
        case "auth/invalid-password":
          message = "La contraseña debe tener al menos 6 caracteres";
          break;
        case "auth/email-already-in-use":
          message = "El correo proporcionado ya esta en uso";
          break;
        default:
          message = "Hubo un error al intentar crear la cuenta";
          break;
      }
      setAlert({ tipo: "error", mensaje: message });
      return;
    }
  };
  return { createUser };
};

export default CreateUser;
