import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 6) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARD); //이거 보는 순간 바로 요청 보내버림

  console.log(data);

  // 얘는 자바스크립트라고 알려주게끔 중괄호로 표현함
  //data.fetchBoard.writer 만 쓰면 오류가 난다. 오류 안나게하려면 data && 를 붙여서 조건을 준다.
  return (
    <div>
      <div>1번 게시글 이동이 완료되었습니다.</div>
      <div>작성자: {data && data.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data ? data.fetchBoard?.contents : "로딩중입니다."}</div>
    </div>
  );
}
