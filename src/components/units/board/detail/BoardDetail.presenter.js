import {
  Body,
  Title,
  Border,
  WriteWrapper,
  ContentsWrapper,
  ContentsDetails,
  Like,
  CancelButton,
  SubmitButton,
  ButtonWrapper,
  Wrapper,
  Writer,
  Date,
} from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <>
      <Wrapper>
        <Body>
          <ContentsWrapper>
            <WriteWrapper>
              {/* <FontAwesomeIcon icon={faCircleUser} /> */}

              <Writer>{props.data?.fetchBoard?.writer}</Writer>
              <Date>Date: {props.data?.fetchBoard?.createdAt}</Date>
            </WriteWrapper>
            <Border />
            <Title>제목: {props.data?.fetchBoard?.title}</Title>

            <ContentsDetails>
              {props.data?.fetchBoard?.images?.map((url, idx) => (
                <img
                  key={idx}
                  src={`https://storage.googleapis.com/${url}`}
                  alt="image"
                  width="200"
                />
              ))}

              <div>내용: {props.data?.fetchBoard?.contents}</div>
            </ContentsDetails>
          </ContentsWrapper>
          <Like>
            <div>좋아요: {props.data?.fetchBoard?.likeCount}</div>
            <div>안좋아요: {props.data?.fetchBoard?.dislikeCount}</div>
          </Like>
        </Body>
        <ButtonWrapper>
          <SubmitButton onClick={props.onClickList}>목록으로</SubmitButton>
          <CancelButton onClick={props.onClickMove}>수정하기</CancelButton>
          <SubmitButton onClick={props.onClick}>삭제하기</SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
