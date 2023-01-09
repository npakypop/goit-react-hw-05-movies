import { Outlet  } from 'react-router-dom';
import { StyledLink, Container, Nav} from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="movies">Movies</StyledLink>
      </Nav>
      <Outlet />
    </Container>
  );
};
