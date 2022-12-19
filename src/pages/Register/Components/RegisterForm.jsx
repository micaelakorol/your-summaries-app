import React from "react";
import RegisterUser from "../Functions/RegisterAndValidations";
import handleChange from "../../../utilities-functions/CaptureValues";
import {
  Form,
  Input,
  ContainerBtn,
} from "../../../styled-components/ElementsForm";
import { Svg } from "../../../styled-components/Svg";
import { useContext } from "react";
import { UserContext } from "../../../contexts/useContext";
import Button from "../../../styled-components/Button";

const RegisterForm = () => {
  const { email, password, password2 } = useContext(UserContext);
  const { handleValidations } = RegisterUser();
  const { handleChangeLoginRegister } = handleChange();

  return (
    <Form onSubmit={handleValidations}>
      <Svg />
      <Input
        type="email"
        name="email"
        value={email}
        placeholder="email@test.com"
        autoComplete="email"
        onChange={handleChangeLoginRegister}
        aria-required="true"
      />
      <Input
        type="password"
        name="password"
        value={password}
        placeholder="******"
        onChange={handleChangeLoginRegister}
        autoComplete="current-password"
        aria-required="true"
      />
      <Input
        type="password"
        name="password2"
        value={password2}
        placeholder="Repetir Contraseña"
        onChange={handleChangeLoginRegister}
        autoComplete="current-password"
        aria-required="true"
      />
      <ContainerBtn>
        {" "}
        <Button type="submit" as="button" primario>
          Crear Cuenta
        </Button>
      </ContainerBtn>
    </Form>
  );
};

export default RegisterForm;
