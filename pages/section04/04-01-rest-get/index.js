import axios from "axios";
export default function RestGetPage() {
  function onClickAsync() {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result); //promise
  }
  //   async function onClickSync() {
  //     const result = await axios.get("https://koreanjson.com/posts/1"); => 함수 중복 선언 문제제
  //     console.log(result); //제대로 된 결과 => {title: "....",}
  //     console.log(result.data.title);
  //   }
  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result); //제대로 된 결과 => {title: "....",}
    console.log(result.data.title);
  };
  return (
    <div>
      <button onClick={onClickAsync}>Rest-api 비동기 요청하기</button>
      <button onClick={onClickSync}>Rest-api 동기 요청하기</button>
    </div>
  );
}
