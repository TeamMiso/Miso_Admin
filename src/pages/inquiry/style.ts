import styled from "styled-components";

export const InquiryWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const InquiryContainer = styled.div`
  padding-top: 7rem;
  width: 75rem;
  height: 100%;
  background-color: #fff;
  border-left: solid 1px #bfbfbf;
  border-right: solid 1px #bfbfbf;
`;

export const Title = styled.span`
  font-size: 2.375rem;
  margin-left: 2.5rem;
  font-weight: 700;
`;

export const InquiryItemContainer = styled.div`
  margin: 1.5rem 0;
`;

export const InquiryItem = styled.div`
  padding: 0 2.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 8rem;
  &:hover {
    background-color: #efefef;
  }
`;

export const InquiryItemInner = styled.div`
  height: 5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ImgBox = styled.div`
  width: 5rem;
  height: 5rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.5rem;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const SemiTextContainer = styled.div`
  display: flex;
  span {
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }
`;

export const DateText = styled.span`
  display: flex;
  color: #595959;
`;

export const TypeText = styled.span`
  display: flex;
`;

export const TitleText = styled.span`
  font-size: 1.625rem;
  font-weight: 37.5rem;
  margin-top: 0.5rem;
  display: flex;
`;
