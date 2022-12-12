import React, { useContext, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { es } from "date-fns/locale"; //internazionalicion: pasamos el mes a español.
import { UserContext } from "../../../contexts/useContext"
import InputContainer from '../../../styled-components/InputDate';
import {dateFormat} from '../../../utilities-functions/DateFormat'

const Calendary = () => {
  const { date, setDate } = useContext(UserContext);
  const [showCalendary, setShowCalendary] = useState(false);

  //*onSelect ejecuta una funcion/estado cuando se secciona algo: en este caso, almacena la fecha sobre la que hacemos clic en el calendario.
  //*selected: Para que cuando cargue el componente , se mueste la fecha de hoy.
  //! readOnly: Solo lectura.

  return (
    <InputContainer>
      <input
        type="text"
        readOnly
        value={dateFormat(date)}
        onClick={() => setShowCalendary(!showCalendary)}
      />
      {showCalendary && (
        <DayPicker
          mode="single"
          selected={date}
          onSelect={setDate}
          locale={es}
        />
      )}
    </InputContainer>
  );
};

export default Calendary;