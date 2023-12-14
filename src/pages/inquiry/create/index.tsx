import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  function notAccess() {
    alert("문의가 거부 되었습니다.");
  }

  function access() {
    alert("문의가 채택 되었습니다.");
  }

  return (
    <S.InquiryWrapper>
      <S.BackText onClick={() => navigate("/")}>{"< 돌아가기"}</S.BackText>
      <S.InquiryContainer>
        <S.InquiryItem>
          <S.InquiryItemInner>
            <S.TextBox>
              <S.TitleText>유색 페트병이 등록되어 있지 않습니다</S.TitleText>
              <S.SemiTextBox>
                <S.DateText>23.12.10</S.DateText>
                <S.TypeText>검토 중</S.TypeText>
              </S.SemiTextBox>
            </S.TextBox>
            <S.MainBox>
              <S.ImgBox
                style={{
                  backgroundImage: `url('https://opgg-com-image.akamaized.net/attach/images/20200420133621.1102639.jpg')`,
                }}
              />
              <S.MainTextBox>
                <div>
                  <S.ValueTitle>문의내용</S.ValueTitle>
                  <S.MainText>
                    와~ 희철이! 내 동생 도희철이~ 와 이라십니까 형님? 니가 직접
                    가라! 응? 니가 가서 우리 2공수 아들 모조리 델고 온나.
                    뭐랍니까? 웃어? 이 새끼 봐라… 잠깐만 잠깐만, 야 야 야
                    어어어! 놔 봐라 쫌! 안 쏜다! 야 도희철 일루 와, 앞으로 와 이
                    스끼야! 총 잡아. 총 잡아! 니가 가기 싫으모 내 심장에다가 팍
                    쏴 삐라. 쏘라고!
                  </S.MainText>
                </div>
                <S.BtnContainer>
                  <S.NotAccessBtn onClick={() => notAccess()}>
                    거부하기
                  </S.NotAccessBtn>
                  <S.AccessBtn onClick={() => access()}>채택하기</S.AccessBtn>
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
