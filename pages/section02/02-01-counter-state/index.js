import { useState } from "react"; //얘를 통해서 끌어 올 수 있음

export default function CounterLetDocumentPage() {
  //let count = 0 // let은 리액트 전용 html에서 변경을 감지하지 못함(따라서 state 써야함)
  const [count, setCount] = useState(0);

  //자바스크립트 영역
  //여기서는 useState가 필요
  function onClickCountUp() {
    setCount(count + 1);
  }
  function onClickCountDown() {
    setCount(count - 1);
  }

  return (
    //html영역
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickCountDown}>카운트 내리기</button>
    </div> //반드시 부모 요소가 하나는 있어야 한다.
  );
}
