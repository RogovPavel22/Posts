import { useGetNumrPostQuery } from "@/app/redux";
import { useParams } from "react-router-dom";
import { ButtonBack } from "@/features/buttonBack";

import style from "./postFull.module.scss";

type PageParams = {
  postId: string;
};

export const PostFull: React.FC = () => {
  const { postId } = useParams<PageParams>();
  const { data } = useGetNumrPostQuery(postId as string);

  return (
    <div className="container">
      <div className={style.post}>
        {data ? (
          <>
            <h2 className={style.post_title}>{data.title}</h2>
            <p className={style.post_subtitle}>{data.body}</p>
            <ButtonBack />
          </>
        ) : (
          <p className={style.post_stub}>Loading...</p>
        )}
      </div>
    </div>
  );
};
