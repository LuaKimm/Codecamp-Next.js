import { useRouter } from "next/router";
export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/section05/05-01-static-routing-moved");
  };

  return <button onClick={onClickMove}>1번 게시글 이동이 완료되었습니다.</button>;
}
