import React, { useContext } from "react";
import Button from "../../../styled-components/Button";
import {
  TitlePrincipal,
  Headers,
  ContainerHeader,
} from "../../../styled-components/Header";
import {
  Form,
  Input,
  ContainerBtn,
} from "../../../styled-components/ElementsForm";
import { SvgLogin } from "../../../styled-components/Svg";
import LoginValidations from "../Functions/LoginValidations";
import Alert from "../../../components/Alert/Alert";
import handleChange from "../../../utilities-functions/CaptureValues";
import { UserContext } from "../../../contexts/useContext";

const Login = () => {
  const { email, password, alert } = useContext(UserContext);
  const { handleChangeLoginRegister } = handleChange();
  const { handleSubmitLogin } = LoginValidations();

  return (
    <>
      <Headers>
        <ContainerHeader>
          <TitlePrincipal>Iniciar Sesion</TitlePrincipal>
          <div>
            <Button to="/">Crear Cuenta</Button>
          </div>
        </ContainerHeader>
      </Headers>

      <Form onSubmit={handleSubmitLogin}>
        <SvgLogin />
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChangeLoginRegister}
          placeholder="email@test.com"
          autoComplete="on"
        />
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChangeLoginRegister}
          placeholder="******"
          autoComplete="current-password"
        />
        <ContainerBtn>
          {" "}
          <Button type="submit" as="button">
            Ingresar
          </Button>
        </ContainerBtn>
      </Form>
      <Alert tipo={alert.tipo} mensaje={alert.mensaje} />
    </>
  );
};

export default Login;
