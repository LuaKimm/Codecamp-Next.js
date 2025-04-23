import {
  CardWrapper,
  Contents,
  Wrapper,
  Title,
  BoardTitle,
  Writer,
  Date,
  Card,
  Search,
  List,
  ListTitle,
  Page,
  Button,
  Body,
  ListContents,
  SearchInput,
  SearchDate,
  SearchButton,
  ButtonWrapper,
  ColumnTitle,
} from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <Wrapper>
      <Title>베스트 게시글</Title>
      <CardWrapper>
        {props.data?.fetchBoards.slice(0, 4).map((el) => (
          <Contents>
            <BoardTitle>{el.title}</BoardTitle>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Card>
                <Writer>{el.writer}</Writer>
                <Date>{el.createdAt.slice(0, 10)}</Date>
              </Card>
              <div>{el.likeCount}</div>
            </div>
          </Contents>
        ))}
      </CardWrapper>
      <Body>
        <Search>
          <SearchInput type="text" placeholder="제목을 입력해주세요."></SearchInput>
          <SearchDate placeholder="YYYY.MM.DD ~ YYYY.MM.DD" />

          <SearchButton>검색하기</SearchButton>
        </Search>
        <List>
          <ListTitle>
            <span>번호</span>
            <span>제목</span>
            <span>작성자</span>
            <span>날짜</span>
          </ListTitle>

          {props.data?.fetchBoards.map((el, index) => (
            <ListContents key={el._id}>
              <div>{props.data.fetchBoards.length - index}</div>
              <ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
                {el.title}
              </ColumnTitle>
              <div>{el.writer}</div>
              <div>{el.createdAt.slice(0, 10)}</div>
              {/* getDate */}
            </ListContents>
          ))}
        </List>
        <Page>
          <div>1</div>
          <div>2</div>
        </Page>
        <ButtonWrapper onClick={props.onClickMoveToBoardNew}>
          <Button>게시물 등록하기</Button>
        </ButtonWrapper>
      </Body>
    </Wrapper>
  );
}
