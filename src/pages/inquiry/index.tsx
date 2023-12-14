import { Link } from "react-router-dom";
import * as S from "./style";
import axios from "axios";
import { useEffect, useState } from "react";

interface InquiryItemType {
  id: string;
  inquiryDate: string;
  inquiryStatus: string;
  title: string;
  imageUrl: string;
}

const Inquiry = () => {
  const inquiryItemList: InquiryItemType[] = [
    {
      id: "1",
      inquiryDate: "23.12.10",
      inquiryStatus: "검토 중",
      title: "유색 페트병이 등록되어 있지 않습니다",
      imageUrl:
        "https://opgg-com-image.akamaized.net/attach/images/20200420133621.1102639.jpg",
    },
    {
      id: "2",
      inquiryDate: "23.12.10",
      inquiryStatus: "검토 중",
      title: "유색 페트병이 등록되어 있지 않습니다",
      imageUrl:
        "https://opgg-com-image.akamaized.net/attach/images/20200420133621.1102639.jpg",
    },
    {
      id: "3",
      inquiryDate: "23.12.10",
      inquiryStatus: "채택됨",
      title: "유색 페트병이 등록되어 있지 않습니다",
      imageUrl:
        "https://opgg-com-image.akamaized.net/attach/images/20200420133621.1102639.jpg",
    },
    {
      id: "4",
      inquiryDate: "23.12.10",
      inquiryStatus: "비채택됨",
      title: "유색 페트병이 등록되어 있지 않습니다",
      imageUrl:
        "https://opgg-com-image.akamaized.net/attach/images/20200420133621.1102639.jpg",
    },
    {
      id: "5",
      inquiryDate: "23.12.10",
      inquiryStatus: "검토 중",
      title: "유색 페트병이 등록되어 있지 않습니다",
      imageUrl:
        "https://opgg-com-image.akamaized.net/attach/images/20200420133621.1102639.jpg",
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
        <S.Title>문의목록</S.Title>
        {inquiryItemList.map((data) => (
          <Link to={`/detail/${data.id}`}>
            <S.InquiryItem key={data.id}>
              <S.InquiryItemInner>
                <S.ImgBox
                  style={{
                    backgroundImage: `url(${data.imageUrl})`,
                  }}
                />
                <S.TextBox>
                  <S.TypeText
                    style={{
                      color:
                        data.inquiryStatus === "검토 중"
                          ? "#BFBFBF"
                          : data.inquiryStatus === "채택됨"
                          ? "#25D07D"
                          : "#DB3734",
                    }}
                  >
                    {data.inquiryStatus}
                  </S.TypeText>
                  <S.TitleText>{data.title}</S.TitleText>
                  <S.DateText>{data.inquiryDate}</S.DateText>
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
