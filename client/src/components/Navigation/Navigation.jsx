import { Link } from "react-router-dom";

import "./Navigation.css";

const pages = [{ link: "/", name: "Главная" }];

export const Navigation = () => {
  return (
    <nav className="nav">
      {pages.map(({ link, name }) => (
        <Link className="nav__link" key={link} to={link}>
          {name}
        </Link>
      ))}
    </nav>
  );
};
