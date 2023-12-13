import * as S from "./style";

const Detail = () => {
  return (
    <S.InquiryWrapper>
      <S.InquiryContainer>
        <S.InquiryItem>
          <S.InquiryItemInner>
            <S.TextBox>
              <S.TitleText>유색 페트병이 등록되어 있지 않습니다</S.TitleText>
              <S.TypeText>검토 중</S.TypeText>
              <S.DateText>23.12.10</S.DateText>
            </S.TextBox>
            <S.ImgBox
              style={{
                backgroundImage: `url('https://opgg-com-image.akamaized.net/attach/images/20200420133621.1102639.jpg')`,
              }}
            />
          </S.InquiryItemInner>
        </S.InquiryItem>
      </S.InquiryContainer>
    </S.InquiryWrapper>
  );
};

export default Detail;
