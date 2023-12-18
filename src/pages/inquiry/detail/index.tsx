import { ChangeEvent, useEffect, useState } from "react";
import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

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

  const [mainText, setMainText] = useState("");

  const handleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMainText(e.target.value);
  };

  console.log(mainText);

  return (
    <S.InquiryWrapper>
      <S.InquiryContainer>
        <S.BackText onClick={() => navigate("/")}>{"< 돌아가기"}</S.BackText>
        <S.InquiryItem>
          <S.InquiryItemInner>
            <S.TextBox>
              <S.TitleText>{title}</S.TitleText>
              <S.SemiTextBox>
                <S.DateText>{inquiryDate}</S.DateText>
                <S.TypeText>{inquiryStatus}</S.TypeText>
              </S.SemiTextBox>
            </S.TextBox>
            <S.MainBox>
              <S.ImgBox
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
              />
              <S.MainTextBox>
                <div>
                  <S.ValueTitle>문의내용</S.ValueTitle>
                  <S.MainText>{content}</S.MainText>
                  <S.AnswerBox
                    placeholder="문의 내용 입력"
                    onChange={handleText}
                  />
                </div>
                <S.BtnContainer
                  style={{
                    display: inquiryStatus === "WAIT" ? "flex" : "none",
                  }}
                >
                  <S.AccessBtn onClick={() => access()}>답변하기</S.AccessBtn>
                </S.BtnContainer>
              </S.MainTextBox>
            </S.MainBox>
          </S.InquiryItemInner>
        </S.InquiryItem>
      </S.InquiryContainer>
    </S.InquiryWrapper>
  );
};

export default Detail;
