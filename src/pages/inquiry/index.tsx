import { useNavigate } from "react-router-dom";
import * as S from "./style";
import axios from "axios";
import { useEffect, useState } from "react";
import { Filter, Header } from "../../components";

interface InquiryItemType {
  id: any;
  inquiryDate: any;
  title: string;
  imageUrl: string;
  inquiryStatus: string;
}

const Inquiry = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const navigate = useNavigate();
  const [inquiryItemList, setInquiryItemList] = useState<InquiryItemType[]>([]);

  const fetch = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/inquiry/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      setInquiryItemList(data.inquiryList);
    } catch (error: any) {
      alert("토큰이 만료되었습니다. 다시 로그인 해주세요.");
      navigate("/auth");
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const [isReviewChecked, setReviewChecked] = useState(true);
  const [isAnswerChecked, setAnswerChecked] = useState(true);

  return (
    <S.InquiryWrapper>
      <Header />
      <Filter
        isReviewChecked={isReviewChecked}
        setReviewChecked={setReviewChecked}
        isAnswerChecked={isAnswerChecked}
        setAnswerChecked={setAnswerChecked}
      />
      <S.InquiryContainer>
        <S.Title>문의목록</S.Title>
        <S.InquiryItemContainer>
          {inquiryItemList.length > 0 &&
            inquiryItemList.map((data) => (
              <S.InquiryItem
                onClick={() =>
                  navigate(`/detail/${data.id}`, {
                    state: {
                      id: `${data.id}`,
                    },
                  })
                }
                style={{
                  display:
                    data.inquiryStatus === "WAIT"
                      ? isReviewChecked === false
                        ? "none"
                        : "flex"
                      : data.inquiryStatus === "COMPLETE"
                      ? isAnswerChecked === false
                        ? "none"
                        : "flex"
                      : "flex",
                }}
                key={data.id}
              >
                <S.InquiryItemInner>
                  <S.TextBox>
                    <S.SemiTextContainer>
                      <S.DateText>
                        {`${data?.inquiryDate.slice(
                          2,
                          4
                        )}.${data?.inquiryDate.slice(
                          5,
                          7
                        )}.${data?.inquiryDate.slice(8, 10)}`}
                      </S.DateText>
                      <S.TypeText
                        style={{
                          color:
                            data.inquiryStatus === "WAIT"
                              ? "#BFBFBF"
                              : "#25D07D",
                        }}
                      >
                        {data.inquiryStatus === "WAIT"
                          ? "검토 중"
                          : "답변 완료"}
                      </S.TypeText>
                    </S.SemiTextContainer>
                    <S.TitleText>{data.title}</S.TitleText>
                  </S.TextBox>
                  <S.ImgBox
                    style={{
                      backgroundImage: `url(${data.imageUrl})`,
                    }}
                  />
                </S.InquiryItemInner>
              </S.InquiryItem>
            ))}
        </S.InquiryItemContainer>
      </S.InquiryContainer>
    </S.InquiryWrapper>
  );
};

export default Inquiry;
