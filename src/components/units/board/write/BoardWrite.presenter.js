import * as S from "./BoardWrite.styles";
export default function BoardWriteUI(props) {
  console.log("버튼 isActive 상태:", props.isActive);
  return (
    <form onSubmit={props.onSubmit}>
      <S.Wrapper>
        <S.Title>{props.isEdit ? "게시글 수정" : "게시글 등록"}</S.Title>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <S.Writer
              {...props.register("writer", { required: "작성자는 필수 입력입니다." })}
              placeholder="이름을 적어주세요."
              onChange={props.onChangeInputs}
            />
            {props.errors.writer && <p style={{ color: "red" }}>{props.errors.writer.message}</p>}
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Password
              {...props.register("password", { required: "비밀번호는 필수 입력입니다." })}
              placeholder="비밀번호를 작성해주세요."
              onChange={props.onChangeInputs}
            />
            {props.errors.password && (
              <p style={{ color: "red" }}>{props.errors.password.message}</p>
            )}
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.Subject
            {...props.register("subject", { required: "제목은 필수 입력입니다." })}
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeInputs}
          />
          {props.errors.subject && <p style={{ color: "red" }}>{props.errors.subject.message}</p>}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Contents
            {...props.register("contents", {
              required: "내용은 필수 입력입니다.",
              onChange: props.onChangeInputs,
            })}
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeInputs}
          />
          {props.errors.contents && <p style={{ color: "red" }}>{props.errors.contents.message}</p>}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.ZipcodeWrapper>
            <S.Zipcode placeholder="07250" />
            <S.SearchButton>우편번호 검색</S.SearchButton>
          </S.ZipcodeWrapper>
          <S.Address />
          <S.Address />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>유튜브</S.Label>
          <S.Youtube placeholder="링크를 복사해주세요." />
        </S.InputWrapper>
        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>
          <S.UploadButton>+</S.UploadButton>
          <S.UploadButton>+</S.UploadButton>
          <S.UploadButton>+</S.UploadButton>
        </S.ImageWrapper>
        <S.OptionWrapper>
          <S.Label>메인설정</S.Label>
          <S.RadioButton type="radio" id="youtube" name="radio-button" />
          <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
          <S.RadioButton type="radio" id="image" name="radio-button" />
          <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
        </S.OptionWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton type="submit" isActive={props.isActive}>
            {props.isEdit ? "수정" : "등록"}하기
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}
