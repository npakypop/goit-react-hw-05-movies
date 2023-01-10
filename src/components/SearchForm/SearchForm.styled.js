import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: start;
  align-items: baseline;
  margin-left: auto;
  margin-right: auto;
`;
export const Input = styled.input`
  padding: 5px 10px;
  font-size: 18px;
  border: none;
  outline: none;
  border-bottom: solid 2px #808080;

  &:focus-visible {
    border: none;
    border-bottom: solid 2px orange;
  }
`;
export const Button = styled.button`
  text-transform: uppercase;
  margin-top: 20px;
  margin-left: 20px;
  padding: 10px 30px;
  cursor: pointer;
  text-align: center;
  background-color: orange;
  border-radius: 10px;

  &:hover {
    background-color: black;
    color: orange;
  }
`;
