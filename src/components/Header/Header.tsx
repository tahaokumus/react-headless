import React from "react";
import "./Header.scss";

interface HeaderProps {
  theme: string;
  lightLogo: string;
  darkLogo: string;
}

export default function Header({ theme, lightLogo, darkLogo }: HeaderProps) {
  const logo = theme === "light" ? darkLogo : lightLogo;
  return (
    <header className={theme}>
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
    </header>
  );
}
