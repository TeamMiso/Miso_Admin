import styled from "styled-components";

export const InquiryWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
`;

export const InquiryContainer = styled.div`
  width: 75rem;
  height: 100%;
`;

export const BackText = styled.span`
  font-size: 1.25rem;
  margin-left: 1.25rem;
  cursor: pointer;
  color: #3484db;
`;

export const InquiryItem = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
`;

export const InquiryItemInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const TitleText = styled.span`
  font-size: 2rem;
  display: flex;
`;

export const SemiTextBox = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export const DateText = styled.span`
  font-size: 1.25rem;
  display: flex;
  color: #595959;
  margin-right: 1rem;
`;

export const TypeText = styled.span`
  font-size: 1.25rem;
  display: flex;
`;

export const MainBox = styled.div`
  margin-top: 1rem;
  padding-left: 1rem;
  width: 75rem;
  display: flex;
`;

export const ImgBox = styled.div`
  width: 30rem;
  height: 30rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MainTextBox = styled.div`
  display: flex;
  width: 45rem;
  margin-left: 1rem;
  flex-wrap: wrap;
`;

export const ValueTitle = styled.span`
  font-size: 2rem;
`;

export const MainText = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  height: 12rem;
  width: 45rem;
`;

export const AnswerBox = styled.textarea`
  width: 44.5rem;
  margin-top: 1rem;
  height: 8.25rem;
  resize: none;
`;

export const AnswerText = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 45rem;
  align-items: flex-end;
  div {
    display: flex;
    align-items: center;
    margin: 0 2.5rem;
    justify-content: center;
    border-radius: 0.5rem;
    color: #fff;
    width: 11.25rem;
    height: 3.25rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const AccessBtn = styled.div`
  background-color: #288be1;
  &:hover {
    background-color: #f5f5f5;
    width: 11rem;
    height: 3rem;
    border: solid 0.125rem #288be1;
    color: #288be1;
  }
`;
