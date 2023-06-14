import { useParams } from "react-router-dom";

// 이 파일은 예시 파일입니다. 지우고 시작해주세요!

const WelcomePage = () => {
  const { name } = useParams();

  return <div>안녕하세요, {name}님!</div>;
};

export default WelcomePage;
