import { ReactComponent as Note } from "./../assets/note.svg";
import { ReactComponent as Marketing } from "./../assets/business.svg";
import { ReactComponent as Favorite } from "./../assets/favorite.svg";
import { ReactComponent as Other } from "./../assets/other.svg";
import { ReactComponent as Ideas } from "./../assets/ideas.svg";
import { ReactComponent as ForStudy } from "./../assets/forStudy.svg";
import { ReactComponent as InProcess } from "./../assets/inProcess.svg";
import { ReactComponent as Finish } from "./../assets/finish.svg";
import { ReactComponent as English } from "./../assets/english.svg";
import React from "react";
const IconCategory = ({ id }) => {
  if (id === "notas") return <Note />;
  if (id === "marketing") return <Marketing />;
  if (id === "ingles") return <English />;
  if (id === "favoritos") return <Favorite />;
  if (id === "otros") return <Other />;
  if (id === "ideas") return <Ideas />;
  if (id === "Por estudiar") return <ForStudy />;
  if (id === "En Proceso") return <InProcess />;
  if (id === "finalizadas") return <Finish />;
};

export default IconCategory;
