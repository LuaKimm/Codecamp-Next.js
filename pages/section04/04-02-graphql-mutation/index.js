import { useMutation, gql } from "@apollo/client";

const 나의그래프큐엘셋팅 = gql`
  mutation {
    createBoard(writer: "하이", title: "ㅎㅇ", contents: "사세요") {
      _id
      number
      message
    }
  }
`;

export default function graphqlMuationPage() {
  const [나의함수] = useMutation("나의그래프큐엘셋팅");

  const onClickSubmit = async () => {
    const result = await 나의함수();
    console.log(result);
  };
  //한줄일땐 괄호 필요 없음
  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
