import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  padding: 20px;
  width: 400px;
  text-align: center;
  gap: 8px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #f8f8ff;
  color: #f8f8ff;
  background-color: transparent;
  transition: border-color 200ms linear;
`;

export const SearchBtn = styled.button`
  display: inline-block;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  color: #f8f8ff;
  border: 1px solid #f8f8ff;
  text-transform: uppercase;
  cursor: pointer;
  background-color: transparent;
  transition: color 200ms linear, border-color 200ms linear;

  &:hover {
    color: ${p => p.theme.colors.focusColor};
    border-color: ${p => p.theme.colors.focusColor};
  }
`;
