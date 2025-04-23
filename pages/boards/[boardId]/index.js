import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentNew from "../../../src/components/units/board/BoardComment/BoardComment.container";

export default function BoardDetailPage() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "300px",
      }}
    >
      <BoardDetail />
      <BoardCommentNew />
    </div>
  );
}
