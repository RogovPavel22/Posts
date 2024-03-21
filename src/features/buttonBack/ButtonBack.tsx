import { useNavigate } from "react-router-dom";

import style from "./buttonBack.module.scss"

export const ButtonBack = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return <button className={style.btnBack} onClick={goBack}>назад</button>;
};
