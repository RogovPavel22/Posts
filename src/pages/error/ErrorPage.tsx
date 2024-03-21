import { useRouteError } from "react-router-dom";

import style from "./error.module.scss";

export const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError();
  return (
    <div className={style.wrapper}>
      <div className={style.error}>
        <h2 className={style.error_title}>Страница не найдена</h2>
        <p className={style.error_subtitle}>
          К сожалению, мы не смогли найти страницу, которую вы ищете.
        </p>
        <p className={style.error_massage}>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </p>
      </div>
    </div>
  );
};
