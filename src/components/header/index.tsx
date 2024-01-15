import MisoIcon from "../../assets/png/MisoIcon.png";
import * as S from "./style";
import { Modal } from "..";
import { useState } from "react";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderMainWrapper>
          <S.HeaderMainContainer>
            <img src={MisoIcon} alt="미소 로고" />
            <S.LogOutButton onClick={openModal}>로그아웃</S.LogOutButton>
          </S.HeaderMainContainer>
        </S.HeaderMainWrapper>
      </S.HeaderContainer>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        title={"로그아웃 하시겠습니까?"}
        content1={"정말로 로그아웃 하시겠습니까?"}
        content2={""}
        button={"로그아웃"}
        id={""}
        mainText={""}
      />
    </S.HeaderWrapper>
  );
};

export default Header;
