import axios from "axios";
import * as S from "./style";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// const User = {
//   email: "thdgustj3946@naver.com",
//   pw: "1234",@
// };

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

  // const onclickConfirmButton = async () => {
  //   await axios({
  //     method: "post",
  //     url: `https://server.miso-gsm.site/auth/signIn`,
  //     data: {
  //       email: email,
  //       password: pw,
  //     },
  //   })
  //     .then((res) => {
  //       if (res) {
  //         alert("로그인에 성공하셨습니다.");
  //         console.log(res)
  //       } else {
  //         alert("등록되지 않은 회원입니다.");
  //       }
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // };

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
          "Bearer" + " refreshToken",
          response.data.refreshToken
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
        alert("로그인 실패");
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
      <S.TitleWrap>
        이메일과 비밀번호를
        <br />
        입력해주세요
      </S.TitleWrap>
      <S.ContentWrap>
        <S.InputTitle>이메일 주소</S.InputTitle>
        <S.InputWrap>
          <S.Input
            placeholder="text@gmail.com"
            type="text"
            value={email}
            onChange={handleEmail}
          />
        </S.InputWrap>
        <S.ErrorMessageWrap>
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </S.ErrorMessageWrap>

        <S.InputTitle style={{ marginTop: "26px" }}>비밀번호</S.InputTitle>
        <S.InputWrap>
          <S.Input
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            type="password"
            value={pw}
            onChange={handlePassword}
          />
        </S.InputWrap>
        <S.ErrorMessageWrap>
          {!pwValid && pw.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </S.ErrorMessageWrap>
      </S.ContentWrap>

      <div>
        <S.BottomButton onClick={onclickConfirmButton} disabled={notAllow}>
          확인
        </S.BottomButton>
      </div>
    </S.Page>
  );
}
