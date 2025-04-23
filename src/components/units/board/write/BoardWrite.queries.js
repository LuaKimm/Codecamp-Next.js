import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    # $createBoardInput -> 인자이름
    createBoard(createBoardInput: $createBoardInput) {
      # 여기서 createBoard는 백에드에서 정한 이름
      #$를 붙여야 쿼리에서 정의한 변수값 들어감.
      _id
      writer
      title
      contents
      youtubeUrl
      images
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updataBoard($updateBoardInput: UpdateBoardInput!, $password: String, $boardId: ID!) {
    updateBoard(boardId: $boardId, password: $password, updateBoardInput: $updateBoardInput) {
      _id
      writer
      title
      contents
      youtubeUrl
      images
    }
  }
`;
