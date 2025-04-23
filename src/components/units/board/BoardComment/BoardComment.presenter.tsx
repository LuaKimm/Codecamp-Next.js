import * as S from "./BoardComment.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faMessage } from "@fortawesome/free-solid-svg-icons";
import { IBoardComment } from "../../../../commons/types/generated/types";

type Props = {
  SubmitButton: () => void;
  data: {
    writer: string;
    password: string;
    contents: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  commentList: IBoardComment[];
};

export default function BoardCommentUI(props: Props) {
  return (
    <S.OuterWrapper>
      <S.Wrapper>
        <S.CommentTitleWrapper>
          <FontAwesomeIcon
            icon={faMessage}
            size="lg"
            color="#F9C80E"
            style={{ marginRight: "8px" }}
          />
          <S.Title>댓글</S.Title>
        </S.CommentTitleWrapper>
        <S.InputWrapper>
          <S.Input
            name="writer"
            value={props.data.writer}
            onChange={props.onChange}
            type="text"
            placeholder="작성자"
          />

          <S.Input
            name="password"
            value={props.data.password}
            onChange={props.onChange}
            type="password"
            placeholder="비밀번호"
          />
        </S.InputWrapper>

        <S.Textarea
          name="contents"
          value={props.data.contents}
          onChange={props.onChange}
          placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <S.ButtonWrapper>
          <S.ButtonBorder />
          <S.SubmitButton onClick={props.SubmitButton}>등록하기</S.SubmitButton>
        </S.ButtonWrapper>
        {props.commentList?.map((el) => (
          <S.CommentBox key={el._id}>
            <S.WriterWrapper>
              <FontAwesomeIcon
                icon={faCircleUser}
                size="lg"
                color="#828282"
                style={{ marginRight: "8px" }}
              />
              <S.Writer>{el.writer}</S.Writer>
            </S.WriterWrapper>
            <S.Contents>{el.contents}</S.Contents>
            <S.Date>{new Date(el.createdAt).toLocaleDateString()}</S.Date>
          </S.CommentBox>
        ))}
      </S.Wrapper>
    </S.OuterWrapper>
  );
}
