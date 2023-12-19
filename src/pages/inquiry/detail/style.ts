import styled from "styled-components";

export const InquiryWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const InquiryContainer = styled.div`
  width: 75rem;
  height: 100%;
  background-color: #fff;
  border-left: solid 1px #bfbfbf;
  border-right: solid 1px #bfbfbf;
`;

export const InquiryBox = styled.div`
  margin: 0 2.5rem;
  margin-top: 7rem;
`;

export const BackText = styled.span`
  font-size: 1.25rem;
  cursor: pointer;
  color: #3484db;
`;

export const TitleBox = styled.div`
  margin-top: 1rem;
`;

export const MainTitle = styled.span`
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
`;

export const SemiTitleBox = styled.div`
  display: flex;
  span {
    font-size: 1.5rem;
    margin-right: 0.5rem;
    font-weight: 400;
    line-height: 2rem;
  }
`;

export const MainDocumentWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #bfbfbf;
`;

export const MainText = styled.div`
  width: 42.75rem;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 2rem;
`;

export const ImgBox = styled.div`
  width: 26.25rem;
  height: 17.5rem;
  margin-bottom: 1.5rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.5rem;
`;

export const AnswerContainer = styled.div`
  margin-top: 1.5rem;
  span {
    font-size: 1.625rem;
    font-weight: 700;
    line-height: 2.5rem;
  }
`;

export const AnswerBox = styled.textarea`
  resize: none;
  width: 100%;
  height: 100px;
  border: none;
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 400;
  cursor: text;
  &:placeholder-shown {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 2rem;
  }
`;

export const AnswerText = styled.div`
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 400;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  left: 0;
`;

export const AccessButton = styled.div`
  background-color: #25d07d;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  width: 22.5rem;
  height: 3rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #fff;
    border: solid 0.125rem #25d07d;
    color: #25d07d;
    width: 22.375rem;
    height: 2.875rem;
  }
`;
