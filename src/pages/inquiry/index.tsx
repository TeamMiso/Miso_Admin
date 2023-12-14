import { Link } from "react-router-dom";
import * as S from "./style";
import axios from "axios";
import { useEffect } from "react";

interface InquiryItemType {
  id: string;
  url: string;
  status: string;
  title: string;
  date: string;
}

const Inquiry = () => {
  const inquiryItemList: InquiryItemType[] = [
    {
      id: "1",
      url: "https://opgg-com-image.akamaized.net/attach/images/20200420133621.1102639.jpg",
      status: "검토 중",
      title: "유색 페트병이 등록되어 있지 않습니다",
      date: "23.12.10",
    },
    {
      id: "2",
      url: "https://opgg-com-image.akamaized.net/attach/images/20200420133621.1102639.jpg",
      status: "검토 중",
      title: "유색 페트병이 등록되어 있지 않습니다",
      date: "23.12.10",
    },
    {
      id: "3",
      url: "https://opgg-com-image.akamaized.net/attach/images/20200420133621.1102639.jpg",
      status: "검토 중",
      title: "유색 페트병이 등록되어 있지 않습니다",
      date: "23.12.10",
    },
  ];

  useEffect(() => {
    axios.get("https://server.miso-gsm.site/all").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <S.InquiryWrapper>
      <S.InquiryContainer>
        {inquiryItemList.map((data) => (
          <Link to={`/detail/${data.id}`}>
            <S.InquiryItem>
              <S.InquiryItemInner>
                <S.ImgBox
                  style={{
                    backgroundImage: `url(${data.url})`,
                  }}
                />
                <S.TextBox>
                  <S.TypeText>{data.status}</S.TypeText>
                  <S.TitleText>{data.title}</S.TitleText>
                  <S.DateText>{data.date}</S.DateText>
                </S.TextBox>
              </S.InquiryItemInner>
            </S.InquiryItem>
          </Link>
        ))}
      </S.InquiryContainer>
    </S.InquiryWrapper>
  );
};

export default Inquiry;
