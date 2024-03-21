import { Outlet } from "react-router-dom";

import style from "./root.module.scss";

export const Root: React.FC = () => {
  return (
    <>
      <div className={style.head}>
        <div className="container">
          <h1 className={style.head_text}>cписок постов</h1>
        </div>
      </div>
      <Outlet />
    </>
  );
};
