import { useEffect, useState } from "react";
import { useGetPostsQuery } from "@/app/redux";
import { useInView } from "react-intersection-observer";

import { ButtonPost } from "@/features/buttonPost";

import style from "./posts.module.scss";

export const Posts: React.FC = () => {
  const [countLimit, setCoutnLimit] = useState(0);
  const { data = [], status } = useGetPostsQuery(countLimit);
  console.log(status)

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setCoutnLimit((prev) => prev + 5)
    }
  }, [inView]);

  return (
    <div className="container">
      <ul className={style.list}>
        {data.map((item) => (
          <li className={style.list_item} key={item.id}>
            <h2 className={style.list_title}>
              <span className={style.list_titleNumber}>{item.id}.</span>{" "}
              {item.title}
            </h2>
            <p className={style.list_dscr}>{item.body}</p>
            <ButtonPost id={item.id} />
          </li>
        ))}
      </ul>
      {status === "pending" && <p className={style.loading}>Загрузка...</p>}
      <div className={style.triger} ref={ref} />
    </div>
  );
};
