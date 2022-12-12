import { format, fromUnixTime } from "date-fns";
import { es } from "date-fns/locale";

const NoRepeatDate = () => {
  const formatDate = (date) => {
    return format(fromUnixTime(date), "dd 'de' MMMM 'de' yyyy", { locale: es });
  };

  //evita que se repita la misma fecha para los gastos hechos el mismo dia:
  const dateIsEqual = (expenses, index, item) => {
    //Para el elemento 0 , no ejecutamos la comprobacion, ya que lo usamos para compararlo con datePreviousExpense
    if (index !== 0) {
      const currentDate = formatDate(item.date);
      const datePreviousExpense = formatDate(expenses[index - 1].date); //trae el gasto anterior
      if (currentDate === datePreviousExpense) {
        return true;
      } else {
        return false;
      }
    }
  };

  return { formatDate, dateIsEqual };
};

export default NoRepeatDate;
