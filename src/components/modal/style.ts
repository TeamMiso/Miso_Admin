import styled from "styled-components";

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.35);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 24rem;
  height: 11.5rem;
  border-radius: 0.5rem;
`;

export const ModalContainer = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: calc(100% - 2rem);
  align-content: space-between;
`;

export const ModalTextBox = styled.div`
  width: max-content;
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.span`
  width: 100%;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 2rem;
  margin-bottom: 0.5rem;
`;

export const Content = styled.span`
  width: 100%;
  color: #6b6b6b;
  text-align: center;
  font-weight: 300;
  line-height: 1.5rem;
  line-height: 1.5rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonText = styled.span`
  cursor: pointer;
  margin-left: 1rem;
  font-size: 1rem;
  line-height: 3rem;
  color: #bfbfbf;
  &:last-child {
    color: #25d07d;
  }
`;
