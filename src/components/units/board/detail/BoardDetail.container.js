import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);
  console.log(data?.fetchBoards);

  const onClickDelete = async () => {
    const boardId = router.query.boardId;

    if (!boardId || boardId === "undefined") {
      alert("게시글 id 유효하지 않음");
      return;
    }

    try {
      deleteBoard({
        variables: {
          boardId: String(router.query.boardId),
        },
      });
      alert("삭제가 완료되었습니다.");
      router.push("/boards/List");
      return;
    } catch (error) {
      console.log("삭제에러:", error.message);
      alert("삭제실패");
    }
  };

  const onClickMove = async () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };
  const onClickList = async () => {
    router.push(`/boards/List`);
  };

  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMove={onClickMove}
      onClickList={onClickList}
    />
  );
}
