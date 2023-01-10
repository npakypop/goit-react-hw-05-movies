import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 auto;
  margin-top: 40px;
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;
export const WrapInfo = styled.div`
  border-top: solid 1px #808080;
  text-align: center;
  padding: 20px 10px;
`;
export const MovieItem = styled.li`
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.3);
  max-width: 300px;
`;
export const Date = styled.p`
  margin-top: 20px;
`;
export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 30px;
  cursor: pointer;
  text-align: center;
  background-color: orange;
  border-radius: 10px;
`;
