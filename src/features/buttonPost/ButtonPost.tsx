import { Link } from "react-router-dom";

import style from "./battonPost.module.scss";

interface ButtonPostPpors {
  id: number;
}

export const ButtonPost: React.FC<ButtonPostPpors> = ({ id }) => {
  return (
    <Link className={style.btn} to={`post/${id}`}>
      просмотр
    </Link>
  );
};
