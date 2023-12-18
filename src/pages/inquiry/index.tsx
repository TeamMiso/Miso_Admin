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
    const { data } = await axios.get(
      "https://server.miso-gsm.site/inquiry/all",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    setInquiryItemList(data.inquiryList);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <S.InquiryWrapper>
      <S.InquiryContainer>
        <S.Title>문의목록</S.Title>
        {inquiryItemList.length > 0 &&
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
                          data.inquiryStatus === "WAIT"
                            ? "#BFBFBF"
                            : data.inquiryStatus === "CONFLICT"
                            ? "#25D07D"
                            : "#DB3734",
                      }}
                    >
                      {data.inquiryStatus === "WAIT"
                        ? "검토 중"
                        : data.inquiryStatus === "CONFLICT"
                        ? "채택 됨"
                        : "비채택 됨"}
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
