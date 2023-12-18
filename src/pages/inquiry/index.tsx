import { Link } from "react-router-dom";
import * as S from "./style";
import axios from "axios";
import { useEffect, useState } from "react";

interface InquiryItemType {
  id: any;
  inquiryDate: any;
  title: string;
  imageUrl: string;
  inquiryStatus: string;
}

const Inquiry = () => {
  const [inquiryItemList, setInquiryItemList] = useState<InquiryItemType[]>([]);

  const fetch = async () => {
    await axios
      .get("https://server.miso-gsm.site/inquiry/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setInquiryItemList(res.data);
      })
      .catch((error) => {
        alert("리스트를 불러오는 중 오류 발생:" + error);
      });
  };

  console.log(inquiryItemList);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <S.InquiryWrapper>
      <S.InquiryContainer>
        <S.Title>문의목록</S.Title>
        {Array.isArray(inquiryItemList) &&
          inquiryItemList.map((data) => (
            <Link key={data.id} to={`/detail/${data.id}`}>
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
