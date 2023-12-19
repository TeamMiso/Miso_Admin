import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: absolute;
`;

export const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const HeaderMainWrapper = styled.div`
  background-color: #fff;
  width: 75rem;
`;

export const HeaderMainContainer = styled.div`
  margin: 1.5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogOutButton = styled.div`
  cursor: pointer;
  width: 7.5rem;
  height: 3.5rem;
  border: solid 0.0625rem #bfbfbf;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bfbfbf;
  font-size: 1.625rem;
  font-weight: 600;
  &:hover {
    background-color: #bfbfbf;
    color: #fff;
  }
`;
