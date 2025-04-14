import { useState } from "react";
import { MyEmail } from "../../../styles/01-02-emotion";
import { MyEmailInput } from "../../../styles/01-02-emotion";

export default function EmotionPage() {
  const [click, setClick] = useState("");
  const [input, setInput] = useState("");

  function onChangeInput(event) {
    setInput(event.target.value);
    console.log(event.target.value);
  }

  function onClickButton(event) {
    alert(`ㅎㅇ, ${input}`);
  }

  return (
    <div>
      <MyEmail>이메일 : </MyEmail>
      <MyEmailInput type="text" onChange={onChangeInput} />
      <button onClick={onClickButton}>클릭하세요!</button>
      <p>{click}</p>
    </div>
  );
}
