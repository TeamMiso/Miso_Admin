import MisoIcon from "../../assets/png/Miso_icon.png";
import * as S from "./style";

const style = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderMainWrapper>
          <S.HeaderMainContainer>
            <img src={MisoIcon} alt="미소 로고" />
            <S.LogOutButton>로그아웃</S.LogOutButton>
          </S.HeaderMainContainer>
        </S.HeaderMainWrapper>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default style;
