import styled from 'styled-components';

const StyledContact = styled.li`
  border: 1px dotted rgb(57, 133, 168);
`;

const StyledContactItem = styled.p`
  font-size: 16px;
  color: #07575b;
  line-height: 1.5;
`;

const StyledContactButton = styled.button`
  background-color: #07575b;
  border-radius: 4px;
  border-style: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Farfetch Basis', 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  max-width: 80px;
  min-height: 20px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 5px;
  text-align: center;
  &:hover,
  &:focus {
    opacity: 0.75;
  }
`;

export { StyledContact, StyledContactItem, StyledContactButton };
