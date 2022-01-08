import styled from 'styled-components';

const StyledLabel = styled.label`
  color: #07575b;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 10px;
`;
const StyledInput = styled.input`
  width: 100%;
  min-height: 25px;
  font-size: inherit;
  padding-left: 5px;
  outline: none;
  &:focus {
    border: 2px dashed #07575b;
    background-color: transparent;
  }
`;

export { StyledLabel, StyledInput };
