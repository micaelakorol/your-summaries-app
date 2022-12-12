import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/useContext";
import AlertContainer from "../../styled-components/Alerts";

// We add messages of dynamically:
const Alert = ({ tipo, mensaje }) => {
  const { changeAlert, setChangeAlert } = useContext(UserContext);

  useEffect(() => {
    if (changeAlert) {
      setTimeout(() => {
        setChangeAlert(false);
      }, 1000);
      return () => clearTimeout(setTimeout);
    }
  }, [changeAlert, setChangeAlert]);
  return (
    <>
      {changeAlert && (
        <AlertContainer tipo={tipo}>
          <p>{mensaje}</p>
        </AlertContainer>
      )}
    </>
  );
};

export default Alert;
