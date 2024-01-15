import { ChangeEvent, useEffect, useState } from "react";
import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Header, Modal } from "@/components";

const Detail = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetch = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/inquiry/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      setTitle(data.title);
      setContent(data.content);
      setImageUrl(data.imageUrl);
      setInquiryStatus(data.inquiryStatus);
      setInquiryDate(data.inquiryDate);
    } catch (error: any) {
      alert("토큰이 만료되었습니다. 다시 로그인 해주세요.");
      navigate("/auth");
    }
  };

  useEffect(() => {
    fetch();
    fetchInquiry();
  }, []);

  const fetchInquiry = async () => {
    const { data } = await axios.get(`${baseUrl}/notification/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    setInquiryText(data.answer);
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
              <S.MainText>{content}</S.MainText>
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
            <S.AccessButton onClick={openModal}>답변하기</S.AccessButton>
          </S.ButtonContainer>
        </S.InquiryOutBox>
      </S.InquiryContainer>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        title={"답변을 게시할까요?"}
        content1={"한 번 답변하면 수정할 수 없어요!"}
        content2={"신중히 답변해 보아요 :)"}
        button={"답변 게시"}
        id={id}
        mainText={mainText}
      />
    </S.InquiryWrapper>
  );
};

export default Detail;
