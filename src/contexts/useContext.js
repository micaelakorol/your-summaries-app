import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { initialState } from "../components/initialValues/InitialState";
export const UserContext = createContext();

const UserProvider = ({ children }) => {

  //Alertas:
  const [changeAlert, setChangeAlert] = useState(false);
  const [alert, setAlert] = useState({});
 //Almacena valores de register/login:
  const [valueInput, setValueInput] = useState(initialState);
   const { email, password, password2 } = valueInput; 
   
  //Almacena valores del input:
  const [resumeDescription, setResumeDescription] = useState("");
  const [titleSummary, setTitleSummary] = useState("");
  const [changeCategory, setChangeCategory] = useState("ideas");  //Almacena el valor detectado del select:
  const [date, setDate] = useState(new Date());   // Almacena la Fecha seleccionada:

 const [userSession, setUserSession] = useState();   // Contiene el objeto del usuario que inició sesion
  //Este state se usa para saber cuando termina de cargar la comprobacion onAuthStateChanged:
  const [loadingAuth, setLoadingAuth] = useState(true)

  //Comprueba si existe un gasto al cargar la pagina. Si existe, permite editarlo y lo almacena .
  const [editSummary, setEditSummary] = useState("");

  //Comprobamos si hay un usuario conectado: (authStateChanged)
  useEffect(() => {
    const cancelSuscription = onAuthStateChanged(auth, (user) => {
      // si user ? return usuario : null (no hay sesion iniciada por un usuario)
      setUserSession(user);
      setLoadingAuth(false);
    });
    return cancelSuscription;
  }, []);

  return (
    <UserContext.Provider
      value={{
        changeAlert,setChangeAlert,alert,setAlert,valueInput,setValueInput,email,password,
        password2,userSession,
        setUserSession, titleSummary, setTitleSummary, resumeDescription, setResumeDescription,
         date, setDate,changeCategory,setChangeCategory,editSummary, setEditSummary
      }}
    >
      {/* cuando no estemos cargando, mostramos los elementos hijos; si no hacemos esto, el componente children se cargará antes de haber comprobado que existe un usuario */}
      {!loadingAuth && children}
    </UserContext.Provider>
  );
};

export default UserProvider;
