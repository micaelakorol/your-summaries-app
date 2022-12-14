import React, { useContext } from "react";
import {ContainerFilter,Form,Input,ContainerBtn, TextArea} from "../../../styled-components/ElementsForm";
import Alert from "../../Alert/Alert";
import Button from "../../../styled-components/Button";
import { ReactComponent as IconPlus } from "../../../assets/plus.svg";
import SelectCategory from '../../../pages/Dashboard/Components/SelectCategory'
import Calendary from '../../../pages/Dashboard/Components/Calendary'
import { UserContext } from "../../../contexts/useContext";
import submitAndValidations from "../Functions/SubmitAndValidations";
import captureValuesInput from "../Functions/CaptureValuesInput"
import { useEffect } from "react";
import cleanField from "../../../utilities-functions/CleanField";

// Formulario para añadir y editar resumenes:
const FormSummaries = () => {
  
  const { handleChange} = captureValuesInput();
  const {submitSummaryOrEdit} = submitAndValidations()
  const {cleanFields} = cleanField()
  const {titleSummary,resumeDescription,changeCategory,setChangeCategory,alert, editSummary, setEditSummary} = useContext(UserContext);

useEffect(() => {
cleanFields() //vacía los campos input al montarse
setEditSummary() //actualiza la descripcion del boton al montarse
},[])


  return (
    <Form onSubmit={submitSummaryOrEdit}>
      <ContainerFilter>
        {/* Selector de categorias y calendario (datePicker) */}
        <SelectCategory
          changeCategory={changeCategory}
          setChangeCategory={setChangeCategory}
        />{" "}
        <Calendary />
      </ContainerFilter>
      {/* Formulario de descripción y edicion*/}
      <>
        <Input
          type="text"
          name="title"
          value={titleSummary}
          onChange={handleChange}
          placeholder="Titulo"
          maxLength='24'
          aria-required="true"
        />
        <TextArea
          name="resumeDescription"
          value={resumeDescription}
          onChange={handleChange}
          placeholder="Descripción"
          rows="8" cols="50"
          aria-required="true"
        />
      </>
      <ContainerBtn>
        <Button as="button" primario conIcono type="submit">
          {editSummary ? 'Editar Resumen' : 'Añadir'} <IconPlus />
        </Button>
      </ContainerBtn>
      <Alert tipo={alert.tipo} mensaje={alert.mensaje} />
    </Form>
  );
};

export default FormSummaries;
