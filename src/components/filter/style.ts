import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: fixed;
  right: 9rem;
  top: 7.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  border: 0.0625rem solid #bfbfbf;
  width: 10rem;
`;

export const FilterContainer = styled.div`
  margin: 0.5rem;
`;

export const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 2rem;
`;

export const SelectList = styled.div``;

export const Selector = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const Input = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background-color: #bfbfbf;
  &:checked {
    background-color: #288be1;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  }
`;
