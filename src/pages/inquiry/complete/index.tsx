import { Header } from "../../../components";
import CheckIcon from "../../../assets/png/check_icon.png";
import * as S from "./style";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Complete = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as { id: string };
  const id = state.id;
  const [title, setTitle] = useState("");
  const [inquiryDate, setInquiryDate] = useState("");

  const fetch = async () => {
    const { data } = await axios.get(
      `https://server.miso-gsm.site/inquiry/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    setTitle(data.title);
    setInquiryDate(data.inquiryDate);
  };

  useEffect(() => {
    fetch();
  }, []);

  const ToHome = () => {
    navigate("/");
  };

  return (
    <S.CompleteWrapper>
      <Header />
      <S.CompleteContainer>
        <S.CheckContainer>
          <S.TextBox>
            <img src={CheckIcon} alt="체크표시" />
            <S.Title>답변 완료</S.Title>
            <S.SemiTitle>{title}</S.SemiTitle>
            <S.Date>
              {`${inquiryDate.slice(2, 4)}.${inquiryDate.slice(
                5,
                7
              )}.${inquiryDate.slice(8, 10)}`}
            </S.Date>
          </S.TextBox>
          <S.MainToButton onClick={() => ToHome()}>메인화면으로</S.MainToButton>
        </S.CheckContainer>
      </S.CompleteContainer>
    </S.CompleteWrapper>
  );
};

export default Complete;
