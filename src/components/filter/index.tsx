import * as S from "./style";

const Filter = () => {
  return (
    <S.FilterWrapper>
      <S.FilterContainer>
        <S.Title>필터</S.Title>
        <S.SelectList>
          <S.Selector>
            <span>검토 중</span>
            <S.Input type="checkbox" />
          </S.Selector>
          <S.Selector>
            <span>답변 완료</span>
            <S.Input type="checkbox" />
          </S.Selector>
        </S.SelectList>
      </S.FilterContainer>
    </S.FilterWrapper>
  );
};

export default Filter;
