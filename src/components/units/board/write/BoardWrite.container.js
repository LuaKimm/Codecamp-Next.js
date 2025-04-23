import { useForm } from "react-hook-form";
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "../detail/BoardDetail.queries";
import { useState } from "react";
import { useEffect } from "react";

export default function BoardsNewPage(props) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD); //여기서 createBoard는 프론트엔드에서 아무렇게나 지정가능한 변수명
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  useEffect(() => {
    if (props.isEdit && data) {
      reset({
        writer: data.fetchBoard.writer,
        password: "",
        subject: data.fetchBoard.title,
        contents: data.fetchBoard.contents,
      });
    }
  }, [data]);
  const onSubmit = async (data) => {
    try {
      if (props.isEdit) {
        const result = await updateBoard({
          variables: {
            boardId: String(router.query.boardId),
            writer: data.writer,
            password: data.password,
            updateBoardInput: {
              title: data.subject,
              contents: data.contents,
            },
          },
        });
        alert("수정완료!");
        router.push(`/boards/${result.data.updateBoard._id}`);
      } else {
        const result = await createBoard({
          //data 객체를graphql에 맞게 매핑해야하므로 아래처럼 바꿔줘야한다.
          variables: {
            createBoardInput: {
              //객체에서 key와 value가 똑같이 생기면 생략이 가능하다. => shorthand-property
              writer: data.writer,
              password: data.password,
              title: data.subject,
              contents: data.contents,
              youtubeUrl: "",
              images: [], //빈배열
              boardAddress: null,
            },
          },
        });
        alert("가입을 축하드립니다.");
        console.log("입력 데이터:", data);
        router.push(`/boards/${result.data.createBoard._id}`);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeInputs = () => {
    const writer = watch("writer");
    const password = watch("password");
    const subject = watch("subject");
    const contents = watch("contents");

    console.log("실시간 값", { writer, password, subject, contents });

    if (writer && password && subject && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <BoardWriteUI
      isEdit={props.isEdit}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      isActive={isActive}
      onChangeInputs={onChangeInputs}
    />
  );
}
