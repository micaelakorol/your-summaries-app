import format from "date-fns/format";
import { es } from "date-fns/locale";

//Formato de fecha:
export const dateFormat = (date = new Date()) => {
  return format(date, `dd 'de' MMMM 'de' yyyy`, { locale: es });
};
