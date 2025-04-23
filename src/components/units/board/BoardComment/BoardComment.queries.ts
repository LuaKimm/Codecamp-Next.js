import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMENT = gql`
  mutation ($boardId: ID!, $createBoardComment: CreateBoardCommentInput!) {
    createBoardComment(boardId: $boardId, createBoardCommentInput: $createBoardComment) {
      _id
      writer
      contents
      createdAt
    }
  }
`;
export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      _id
      writer
      contents
      createdAt
    }
  }
`;
