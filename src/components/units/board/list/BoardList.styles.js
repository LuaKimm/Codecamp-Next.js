import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 0 auto;
  gap: 60px; /* CardWrapper ~ Body 사이 간격 */
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  gap: 24px; /* 카드끼리 24px 간격 */
`;

export const Contents = styled.div`
  width: 282px;
  height: 257px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  border: 1px solid #cccccc;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WriterDate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoardTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const Writer = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

export const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 1200px;
  margin: 0 auto;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 3px solid black;
  border-bottom: 1px solid #bdbdbd;
  padding: 16px;
`;

export const ListContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
  padding: 16px;
  &:last-of-type {
    border-bottom: 3px solid black; /* ✅ 마지막 줄만 진하게 */
  }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
`;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  font-family: Noto Sans CJK KR;
  border: 1px solid #cccccc;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 776px;
  height: 52px;
  padding-left: 40px;
  background-color: rgb(231, 231, 231);
  border: none;
  border-radius: 6px;
  font-size: 16px;
  color: #333;
  font-family: Noto Sans CJK KR, sans-serif;
  font-weight: 400;
  &::placeholder {
    color: black;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const SearchDate = styled.input`
  width: 244px;
  height: 52px;
  border: 1px solid rgb(231, 231, 231);
  font-size: 16px;
  font-family: Noto Sans CJK KR;
  font-weight: 400;
`;

export const SearchButton = styled.button`
  width: 94px;
  height: 52px;
  background-color: black;
  color: #ccc;
  border-radius: 10px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 500;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end; /* ✅ 오른쪽 정렬 */
  width: 100%;
`;

export const ColumnTitle = styled.div`
  color: black;
  cursor: pointer;
  font-weight: 500;
`;
