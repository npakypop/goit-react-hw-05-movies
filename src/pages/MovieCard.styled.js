import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBack = styled(Link)`
  margin-top: 20px;
  margin-left: 40px;
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 30px;
  cursor: pointer;
  text-align: center;
  background-color: orange;
  border-radius: 10px;
  color: black;
  &:hover {
    background-color: black;
    color: orange;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  padding: 20px 40px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
  padding: 20px 40px;
`;

export const Title = styled.h2`
  font-size: 30px;
`;

export const Poster = styled.img`
  width: 400px;
  height: 600px;
`;

export const Buttons = styled.ul`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  gap: 40px;
`;
export const InfoLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 30px;
  cursor: pointer;
  text-align: center;
  background-color: orange;
  border-radius: 10px;
  color: black;
  &:hover {
    background-color: black;
    color: orange;
  }
`;
