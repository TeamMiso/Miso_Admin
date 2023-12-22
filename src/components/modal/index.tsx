import { FC } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface ModalProps {
  isOpen: boolean;
  title: string;
  content1: string;
  content2: string;
  button: string;
  closeModal: () => void;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  title,
  content1,
  content2,
  button,
  closeModal,
}) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const navigate = useNavigate();

  const logOutHandler = async () => {
    const logOut = await axios.delete(`${baseUrl}/auth`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    if (logOut.status === 204) {
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
    <S.ModalBg
      style={{ display: isOpen ? "block" : "none" }}
      onClick={closeModal}
    >
      <S.ModalWrapper style={{ display: isOpen ? "block" : "none" }}>
        <S.ModalContainer>
          <S.ModalTextBox>
            <S.Title>{title}</S.Title>
            <S.Content>{content1}</S.Content>
            <S.Content>{content2}</S.Content>
          </S.ModalTextBox>
          <S.ButtonContainer>
            <S.ButtonText onClick={closeModal}>돌아가기</S.ButtonText>
            <S.ButtonText
              onClick={button === "로그아웃" ? logOutHandler : logOutHandler}
            >
              {button}
            </S.ButtonText>
          </S.ButtonContainer>
        </S.ModalContainer>
      </S.ModalWrapper>
    </S.ModalBg>
  );
};

export default Modal;
