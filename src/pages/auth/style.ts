import styled from "styled-components";

export const Page = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 31.25rem;
  padding: 0 1.25rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #f7f7f7;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const TitleWrap = styled.div`
  margin-top: 5.4375rem;
  font-size: 1.625rem;
  font-weight: 700;
  color: #262626;
`;

export const ContentWrap = styled.div`
  margin-top: 1.625rem;
  flex: 1;
`;

export const InputTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: #262626;
`;

export const InputWrap = styled.div`
  display: flex;
  border-radius: 0.5rem;
  padding-left: 1rem;
  margin-top: 0.5rem;
  background-color: #fff;
  border: 0.0625rem solid #e2e0e0;
  &:focus-within {
    border: 0.0625rem solid #9e30f4;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 1.0625rem;
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0.9375rem;
  margin-left: 0;
  &::placeholder {
    color: #dadada;
  }
`;

export const ErrorMessageWrap = styled.div`
  margin-top: 0.5rem;
  color: #ef0000;
  font-size: 0.75rem;
`;

export const BottomButton = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  font-weight: 700;
  background-color: #9e30f4;
  border-radius: 4rem;
  color: #fff;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:disabled {
    background-color: #dadada;
    color: #fff;
  }
`;
