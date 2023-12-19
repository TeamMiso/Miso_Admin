import axios from "axios";
import * as S from "./style";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = new RegExp(/.{3,}/);
    setPw(e.target.value);
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const api = axios.create({
    baseURL: "https://server.miso-gsm.site",
  });

  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      const response = await api.post("/auth/refreshToken", {
        refreshToken: refreshToken,
      });

      const newAccessToken = response.data.accessToken;

      localStorage.setItem("accessToken", newAccessToken);

      return newAccessToken;
    } catch (error) {
      console.error("토큰 갱신 실패:", error);
      throw error;
    }
  };

  const onclickConfirmButton = async () => {
    try {
      const response = await api.post("/auth/signIn", {
        email: email,
        password: pw,
      });

      if (response.status === 200) {
        alert("로그인에 성공하셨습니다.");
        console.log(response);
        navigate("/");

        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem(
          "refreshToken",
          "Bearer " + response.data.refreshToken
        );
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        try {
          await refreshAccessToken();

          const response = await api.post("/auth/signIn", {
            email: email,
            password: pw,
          });

          if (response.status === 200) {
            alert("로그인에 성공하셨습니다.");
            console.log(response);

            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);
          } else {
            alert("등록되지 않은 회원입니다.");
          }
        } catch (refreshError) {
          alert("토큰 갱신 및 로그인 실패");
        }
      } else {
        alert("이메일 또는 비밀번호가 일치하지 않습니다.");
      }
    }
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  return (
    <S.Page>
      <S.ContentContainer>
        <S.ContentWrap>
          <S.TitleContainer>
            <S.Title>미소</S.Title>
            <S.SemiTitle>환경을 웃음으로 바꾸다 :)</S.SemiTitle>
          </S.TitleContainer>
          <S.InputContainer>
            <S.InputWrap>
              <S.Input
                placeholder="이메일"
                type="text"
                value={email}
                onChange={handleEmail}
              />
            </S.InputWrap>
            <S.ErrorMessageWrap>
              {!emailValid && email.length > 0 && (
                <span>올바른 이메일을 입력해주세요.</span>
              )}
            </S.ErrorMessageWrap>
            <S.InputWrap>
              <S.Input
                placeholder="비밀번호"
                type="password"
                value={pw}
                onChange={handlePassword}
              />
            </S.InputWrap>
            <S.ErrorMessageWrap>
              {!pwValid && pw.length > 0 && (
                <span>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</span>
              )}
            </S.ErrorMessageWrap>
          </S.InputContainer>
          <S.ButtonWrapper>
            <S.BottomButton onClick={onclickConfirmButton} disabled={notAllow}>
              로그인
            </S.BottomButton>
          </S.ButtonWrapper>
        </S.ContentWrap>
      </S.ContentContainer>
    </S.Page>
  );
}
