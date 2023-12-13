import axios from "axios";
import * as S from "./style";
import { ChangeEvent, useEffect, useState } from "react";

// const User = {
//   email: "thdgustj3946@naver.com",
//   pw: "1234",@
// };

export default function Login() {
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

  const onclickConfirmButton = () => {
    axios({
      method: "post",
      url: "https://server.miso-gsm.site/signIn",
      data: {
        email: email,
        password: pw,
      },
    })
      .then((res) => {
        if (res) {
          alert("로그인에 성공하셨습니다.");
        } else {
          alert("등록되지 않은 회원입니다.");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  1;

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
