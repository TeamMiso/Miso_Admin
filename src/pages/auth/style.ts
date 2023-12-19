import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25.5rem;
  height: 30rem;
  border-radius: 0.5rem;
  border: 1px solid #b8b8b8;
  padding: 2.5rem 1.5rem;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  width: 100%;
  height: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 2.375rem;
  line-height: 3.5rem;
  color: #25d07d;
`;

export const SemiTitle = styled.span`
  font-weight: 400;
  font-size: 1.625rem;
  line-height: 2.5rem;
  color: #bfbfbf;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const InputWrap = styled.div`
  display: flex;
  border-radius: 0.5rem;
  padding-left: 1rem;
  margin-top: 0.5rem;
  background-color: #fff;
  margin-bottom: 1.5rem;
  border: 0.0625rem solid #b8b8b8;
  &:focus-within {
    border: 0.0625rem solid #25d07d;
  }
`;

export const Input = styled.input`
  outline: none;
  width: max-content;
  border: none;
  height: 1.0625rem;
  font-size: 0.875rem;
  margin: 0.9375rem;
  &::placeholder {
    color: #dadada;
  }
`;

export const ErrorMessageWrap = styled.div`
  color: #ef0000;
  font-size: 0.75rem;
  margin-top: -1.25rem;
  position: absolute;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

export const BottomButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 1.125rem;
  color: #fff;
  align-items: center;
  cursor: pointer;
  background-color: #25d07d;
  width: 100%;
  height: 3.25rem;
`;
