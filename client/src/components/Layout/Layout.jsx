import { Header } from "../Header/Header";

import "./Layout.css";

export const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Header />
      <div className="content">{children}</div>
    </main>
  );
};
