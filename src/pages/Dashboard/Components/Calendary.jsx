import React, { useContext, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { es } from "date-fns/locale";
import { UserContext } from "../../../contexts/useContext"
import InputContainer from '../../../styled-components/InputDate';
import {dateFormat} from '../../../utilities-functions/DateFormat'

const Calendary = () => {
  const { date, setDate } = useContext(UserContext);
  const [showCalendary, setShowCalendary] = useState(false);

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