import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; // ✅ 핵심!
  align-items: center;
`;

export const Body = styled.div`
  width: 1200px;
  padding: 80px 102px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  box-sizing: border-box;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
`;

export const Writer = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 24px;
  font-weight: 500;
`;

export const Date = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 400;
  color: #828282;
`;

export const WriteWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 40px;
`;

export const Title = styled.div`
  margin: 80px 0 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: 700;
`;

export const Contents = styled.div`
  margin: 80px 0 40px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 400;
`;

export const Border = styled.div`
  width: 996px;
  border-bottom: 1px solid #ccc;
  margin: 20px 0 20px 0;
`;

export const ContentsDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 40px 0;
`;

export const Like = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;

  background-color: yellow;
`;
