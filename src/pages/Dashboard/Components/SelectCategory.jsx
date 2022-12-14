import React, { useState } from "react";
import {
  ContainerSelect,
  Options,
  SelectedOption,
  Option,
} from "../../../styled-components/SelectForm";
import { ReactComponent as IconDown } from "../../../assets/down.svg";
import { categories } from "../../../components/initialValues/selectCategory";
import IconCategory from "../../../styled-components/IconCategory";
import { CaptureCategory } from "../Functions/CaptureCategory";

//Componente para seleccionar categorias:
const SelectCategory = ({ changeCategory, setChangeCategory }) => {
  const [showSelect, setShowSelect] = useState(false);
  const { handleCaptureCategory } = CaptureCategory(setChangeCategory);
  
  return (
    <ContainerSelect onClick={() => setShowSelect(!showSelect)}>
      {/* Muestra la categoria seleccionada */}
      <SelectedOption>
        {changeCategory} <IconDown />
      </SelectedOption>

      {showSelect && (
        <Options>
          {categories.map((categ) => {
            return (
              <Option
                key={categ.id}
                data-valor={categ.id}
                onClick={handleCaptureCategory}
              >
                <IconCategory id={categ.id} />
                {categ.texto}
              </Option>
            );
          })}
        </Options>
      )}
    </ContainerSelect>
  );
};

export default SelectCategory;
