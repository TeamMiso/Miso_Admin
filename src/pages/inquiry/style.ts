import styled from "styled-components";

export const InquiryWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10rem;
`;

export const InquiryContainer = styled.div`
  width: 75rem;
  height: 100%;
`;

export const InquiryItem = styled.div`
  border-bottom: solid 1px #e2e2e2;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 7rem;
`;

export const InquiryItemInner = styled.div`
  height: 5rem;
  display: flex;
`;

export const ImgBox = styled.div`
  width: 5rem;
  height: 5rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 1rem;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const TypeText = styled.span`
  margin-bottom: 0.45rem;
  font-size: 1rem;
  display: flex;
`;

export const TitleText = styled.span`
  font-size: 1.5rem;
  display: flex;
`;

export const DateText = styled.span`
  margin-top: 0.25rem;
  font-size: 1.25rem;
  display: flex;
  color: #595959;
`;
