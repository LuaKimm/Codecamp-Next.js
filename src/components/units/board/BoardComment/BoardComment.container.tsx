import { useMutation, useQuery } from "@apollo/client";
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardComment.queries";
import { useRouter } from "next/router";
// import { FETCH_BOARD } from "./BoardComment.queries";
import { useState } from "react";
import BoardCommentUI from "./BoardComment.presenter";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";

export default function BoardCommentNew() {
  const router = useRouter();

  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoardComments">>(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    {
      boardId: string;
      createBoardComment: {
        writer: string;
        password: string;
        contents: string;
        rating: number;
      };
    }
  >(CREATE_BOARD_COMMENT);

  type FormType = {
    writer: string;
    password: string;
    contents: string;
  };
  const [form, setForm] = useState<FormType>({
    writer: "",
    password: "",
    contents: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const SubmitButton = async () => {
    try {
      const result = await createBoardComment({
        variables: {
          boardId: String(router.query.boardId),
          createBoardComment: {
            writer: form.writer,
            password: form.password,
            contents: form.contents,
            rating: 5,
          },
        },
      });
      await refetch();
      setForm({ writer: "", password: "", contents: "" });
      console.log("댓글 작성 결과:", result);
    } catch (error) {
      console.log("댓글 작성 실패");
    }
  };

  return (
    <BoardCommentUI
      SubmitButton={SubmitButton}
      data={form}
      onChange={handleChange}
      commentList={data?.fetchBoardComments}
    />
  );
}
