import React from "react";
import {
  List,
  ListElement,
  Category,
  Description,
  Value,
  ContainerBtnCentral,
  ContainerSubtitle,
  Subtitle,Date
} from "../../../styled-components/SummaryList";
import IconCategory from "../../../styled-components/IconCategory";
import ButtonsDeleteEdit from "./ButtonsDeleteEdit";
import Button from "../../../styled-components/Button.js";
import { Link } from "react-router-dom";
import noRepeatDate from '../Functions/NoRepeatDate'
import ObtainAllSummaries from "../Services/ObtainAllSummariesUser";

const RenderSummaryList = () => {
  const [summariesUser] = ObtainAllSummaries()
const {formatDate , dateIsEqual} = noRepeatDate()
// Itera los resumenes añadidos:
  return (
    <List>
      {summariesUser.map((item, index) => (
        <React.Fragment  key={item.id}>
          {!dateIsEqual(summariesUser,index, item) && 
                  <Date>{formatDate(item.date)}</Date>       
          }
        <ListElement>
          <Category>
            <IconCategory id={item.changeCategory}  />
            {item.changeCategory}
          </Category>
          <Description>{item.title}</Description>
          <Value>{item.resumeDescription}</Value>
          {/* Button edit and delete */}
          <ButtonsDeleteEdit item={item.id} />
        </ListElement>
        </React.Fragment> 
      ))}

{/* COMPROBACION DE SI HAY O NO HAY GASTOS:  */}
      {summariesUser.length > 0 ? (
        <ContainerBtnCentral>
        </ContainerBtnCentral>
      ) : (
        <ContainerSubtitle>
          <Subtitle>No hay resumenes para mostrar:(</Subtitle>
          <Button as={Link} to="/dashboard">
            Añadir Nuevo 
          </Button>
        </ContainerSubtitle>
        
      )}
      
   </List>
  );
};

export default RenderSummaryList;
