import { Navigation } from "../Navigation/Navigation";
import { Container } from "../Container/Container";

import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};
