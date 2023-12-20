import { ChangeEvent, useEffect, useState } from "react";
import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from "../../../components";

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as { id: string };
  const id = state.id;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [inquiryStatus, setInquiryStatus] = useState("");
  const [inquiryDate, setInquiryDate] = useState("");
  const [inquiryText, setInquiryText] = useState("");
  const [mainText, setMainText] = useState("");

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
    setContent(data.content);
    setImageUrl(data.imageUrl);
    setInquiryStatus(data.inquiryStatus);
    setInquiryDate(data.inquiryDate);
  };

  useEffect(() => {
    fetch();
    fetchInquiry();
  }, []);

  function access() {
    axios({
      method: "patch",
      url: `https://server.miso-gsm.site/inquiry/respond/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      data: {
        title: title,
        content: mainText,
      },
    })
      .then((res) => {
        if (res) {
          alert("답변이 완료 되었습니다.");
          navigate("/");
        } else {
          alert("권한이 없습니다.");
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  const fetchInquiry = async () => {
    const { data } = await axios.get(
      `https://server.miso-gsm.site/notification/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    setInquiryText(data.content);
  };

  const handleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMainText(e.target.value);
  };

  return (
    <S.InquiryWrapper>
      <Header />
      <S.InquiryContainer>
        <S.InquiryOutBox>
          <S.InquiryBox>
            <S.BackText onClick={() => navigate("/")}>
              {"< 돌아가기"}
            </S.BackText>
            <S.TitleBox>
              <S.MainTitle>{title}</S.MainTitle>
              <S.SemiTitleBox>
                <span>
                  {`${inquiryDate.slice(2, 4)}.${inquiryDate.slice(
                    5,
                    7
                  )}.${inquiryDate.slice(8, 10)}`}
                </span>
                <span
                  style={{
                    color: inquiryStatus === "WAIT" ? "#BFBFBF" : "#25D07D",
                  }}
                >
                  {inquiryStatus === "WAIT" ? "검토 중" : "답변 완료"}
                </span>
              </S.SemiTitleBox>
            </S.TitleBox>
            <S.MainDocumentWrapper>
              <S.MainText>
                {content}
                ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
              </S.MainText>
              <S.ImgBox
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
              />
            </S.MainDocumentWrapper>
            <S.AnswerContainer>
              <span>답변내용</span>
              <S.AnswerBox
                style={{
                  display: inquiryStatus === "WAIT" ? "flex" : "none",
                }}
                placeholder="답변 내용 쓰기"
                onChange={handleText}
              />
            </S.AnswerContainer>
            <S.AnswerText
              style={{
                display: inquiryStatus === "WAIT" ? "none" : "flex",
              }}
            >
              {inquiryText}
            </S.AnswerText>
          </S.InquiryBox>
          <S.ButtonContainer
            style={{
              display: inquiryStatus === "WAIT" ? "flex" : "none",
            }}
          >
            <S.AccessButton onClick={() => access()}>답변하기</S.AccessButton>
          </S.ButtonContainer>
        </S.InquiryOutBox>
      </S.InquiryContainer>
    </S.InquiryWrapper>
  );
};

export default Detail;
