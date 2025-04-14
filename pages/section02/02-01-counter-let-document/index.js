export default function CounterLetDocumentPage() {
  //자바스크립트 영역
  function onClickCountUp() {
    //let 쓰고 싶으면 여기다 쓰기기
    const count = Number(document.getElementById("qqq").innerText) + 1;
    document.getElementById("qqq").innerText = count;
  }
  function onClickCountDown() {
    const count = Number(document.getElementById("qqq").innerText) - 1;
    document.getElementById("qqq").innerText = count;
  }

  return (
    //html영역
    <div>
      <div id="qqq">0</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickCountDown}>카운트 내리기</button>
    </div> //반드시 부모 요소가 하나는 있어야 한다.
  );
}

// 한줄씩 코드를 치지 않는다.
// 구조를 만들고
// 필요한 것들 만들고
// 클릭 필요한 함수 만들고  1만들고
// 나중에 담는다.
// 보고서 형식의 위에서 작성 x
