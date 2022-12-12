import format from "date-fns/format";
import { es } from "date-fns/locale";

//Formato de fecha para value del input:
// Por defecto tiene la fecha actual , si no , al hacer doble clic da error 
export const dateFormat = (date = new Date()) => {
  return format(date, `dd 'de' MMMM 'de' yyyy`, { locale: es });
};
