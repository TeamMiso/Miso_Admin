import * as S from "./style";

const Filter = (props: any) => {
  return (
    <S.FilterOuterBox>
      <S.FilterInnerBox>
        <S.FilterWrapper>
          <S.FilterContainer>
            <S.Title>필터</S.Title>
            <S.SelectList>
              <S.Selector
                onClick={() => props.setReviewChecked(!props.isReviewChecked)}
              >
                <span>검토 중</span>
                <S.Input type="checkbox" checked={props.isReviewChecked} />
              </S.Selector>
              <S.Selector
                onClick={() => props.setAnswerChecked(!props.isAnswerChecked)}
              >
                <span>답변 완료</span>
                <S.Input type="checkbox" checked={props.isAnswerChecked} />
              </S.Selector>
            </S.SelectList>
          </S.FilterContainer>
        </S.FilterWrapper>
      </S.FilterInnerBox>
    </S.FilterOuterBox>
  );
};

export default Filter;
