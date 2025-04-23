import styled from "@emotion/styled";

export const OuterWrapper = styled.div`
  width: 100%;
  margin: 80px 50px 0 50px;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1200px;
  padding-top: 2rem;
  border-top: 1px solid #bdbdbd;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding: 0.8rem;
  border: 1px solid #ccc;
  font-size: 15px;
`;

export const TextareaWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 161px;
  margin-bottom: 1rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 161px;
  padding: 1rem;
  padding-bottom: 3.5rem;
  border: 1px solid #bdbdbd;
  resize: none;
  font-size: 16px;
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  height: 60px;
  bottom: 0;
`;

export const ButtonBorder = styled.div`
  width: 1193px;
  position: absolute;
  bottom: 107px;
  border: 1px solid #f2f2f2;
`;

export const SubmitButton = styled.button`
  position: absolute;
  bottom: 65px;
  left: 1102px;
  padding: 0.7rem 1.5rem;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;

export const CommentBox = styled.div`
  width: 100%;
  height: 120px;
  padding: 10px 30px 0 60px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-bottom: 1px solid #bdbdbd;
`;
export const Writer = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 500;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CommentTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const Contents = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
  margin-bottom: 30px;
`;

export const Date = styled.div`
  color: #bdbdbd;
  font-size: 12px;
  font-weight: 400;
`;
