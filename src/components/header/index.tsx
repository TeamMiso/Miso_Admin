import axios from "axios";
import MisoIcon from "../../assets/png/Miso_icon.png";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const navigate = useNavigate();

  const logOutHandler = async () => {
    const logOut = await axios.delete(`${baseUrl}/auth`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    if (logOut.status === 204) {
      alert("로그아웃 하셨습니다.");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/auth");
    } else if (logOut.status === 404) {
      alert("존재하지 않는 유저 입니다.");
    } else {
      alert("토큰이 존재하지 않습니다.");
    }
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderMainWrapper>
          <S.HeaderMainContainer>
            <img src={MisoIcon} alt="미소 로고" />
            <S.LogOutButton onClick={logOutHandler}>로그아웃</S.LogOutButton>
          </S.HeaderMainContainer>
        </S.HeaderMainWrapper>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
