import * as S from "./style";

const Filter = (props: any) => {
  return (
    <S.FilterWrapper>
      <S.FilterContainer>
        <S.Title>필터</S.Title>
        <S.SelectList>
          <S.Selector>
            <span>검토 중</span>
            <S.Input
              type="checkbox"
              checked={props.isReviewChecked}
              onChange={() => props.setReviewChecked(!props.isReviewChecked)}
            />
          </S.Selector>
          <S.Selector>
            <span>답변 완료</span>
            <S.Input
              type="checkbox"
              checked={props.isAnswerChecked}
              onChange={() => props.setAnswerChecked(!props.isAnswerChecked)}
            />
          </S.Selector>
        </S.SelectList>
      </S.FilterContainer>
    </S.FilterWrapper>
  );
};

export default Filter;
