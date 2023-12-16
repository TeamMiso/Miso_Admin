import { ChangeEvent, useEffect, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface InquiryItemType {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  inquiryStatus: string;
  inquiryDate: string;
}

const object: InquiryItemType = {
  id: "1",
  title: "유색 페트병이 등록되어 있지 않습니다",
  content:
    "와~ 희철이! 내 동생 도희철이~ 와 이라십니까 형님? 니가 직접가라! 응? 니가 가서 우리 2공수 아들 모조리 델고 온나. 뭐랍니까? 웃어? 이 새끼 봐라… 잠깐만 잠깐만, 야 야 야 어어어! 놔 봐라 쫌! 안 쏜다! 야 도희철 일루 와, 앞으로 와 이 스끼야! 총 잡아. 총 잡아! 니가 가기 싫으모 내 심장에다가 팍 쏴 삐라. 쏘라고!",
  imageUrl:
    "https://opgg-com-image.akamaized.net/attach/images/20200420133621.1102639.jpg",
  inquiryStatus: "검토 중",
  inquiryDate: "23.12.10",
};

const Detail = () => {
  const navigate = useNavigate();

  function access() {
    axios({
      method: "patch",
      url: `https://server.miso-gsm.site/respond/${object.id}`,
      data: {
        title: object.title,
        content: mainText,
      },
    })
      .then((res) => {
        if (res) {
          alert("답변이 완료 되었습니다.");
        } else {
          alert("권한이 없습니다.");
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    axios.get(`https://server.miso-gsm.site/${object.id}`).then((res) => {
      console.log(res);
    });
  }, []);

  const [mainText, setMainText] = useState("");

  const handleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMainText(e.target.value);
  };

  console.log(mainText);
  console.log(object);

  return (
    <S.InquiryWrapper>
      <S.InquiryContainer>
        <S.BackText onClick={() => navigate("/")}>{"< 돌아가기"}</S.BackText>
        <S.InquiryItem>
          <S.InquiryItemInner>
            <S.TextBox>
              <S.TitleText>{object.title}</S.TitleText>
              <S.SemiTextBox>
                <S.DateText>{object.inquiryDate}</S.DateText>
                <S.TypeText>{object.inquiryStatus}</S.TypeText>
              </S.SemiTextBox>
            </S.TextBox>
            <S.MainBox>
              <S.ImgBox
                style={{
                  backgroundImage: `url(${object.imageUrl})`,
                }}
              />
              <S.MainTextBox>
                <div>
                  <S.ValueTitle>문의내용</S.ValueTitle>
                  <S.MainText>{object.content}</S.MainText>
                  <S.AnswerBox
                    placeholder="문의 내용 입력"
                    onChange={handleText}
                  />
                </div>
                <S.BtnContainer>
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
