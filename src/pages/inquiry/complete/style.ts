import styled from "styled-components";

export const CompleteWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const CompleteContainer = styled.div`
  width: 75rem;
  height: 100%;
  background-color: #fff;
  border-left: solid 0.0625rem #bfbfbf;
  border-right: solid 0.0625rem #bfbfbf;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckContainer = styled.div`
  width: 23.75rem;
  height: 23rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.span`
  font-size: 2.375rem;
  font-weight: 700;
  line-height: 3.5rem;
`;

export const SemiTitle = styled.span`
  color: #595959;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0.5rem 0;
`;

export const Date = styled.span`
  color: #595959;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 2rem;
`;

export const MainToButton = styled.div`
  cursor: pointer;
  color: #fff;
  width: 100%;
  height: 3rem;
  background-color: #25d07d;
  margin: 0 0.625rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
`;
