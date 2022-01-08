import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;
const SubmitButton = styled.button`
  margin-top: 10px;
  align-self: center;
  background-color: #fff;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-style: solid;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  color: #07575b;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: 0.65rem;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  &:disabled {
    background-color: rgba(199, 199, 199, 0.248);
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
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
const StyledLabel = styled.label`
  color: #07575b;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 10px;
`;
export { FormWrapper, SubmitButton, StyledInput, StyledLabel };
