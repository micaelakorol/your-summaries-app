import { useContext } from 'react'
import { UserContext } from '../contexts/useContext';

const handleChange = () => {
//Captura los valores de los input login/register:
const {setValueInput, valueInput} = useContext(UserContext)
    const handleChangeLoginRegister = (e) => {
        setValueInput({
          ...valueInput,
          [e.target.name]: e.target.value,
        });
      };

  return{handleChangeLoginRegister}
}

export default handleChange