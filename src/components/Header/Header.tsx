import React from "react";
import useNavbar from "@/hooks/useNavbar";

export interface HeaderProps {
  theme: string;
  lightLogo: string;
  darkLogo: string;
  navLink: [
    {
      type: "link" | "menu";
      text: string;
      url: string;
      menu: [{ text: string; link: string }] | null;
    },
  ];
}

export default function Header({ theme, lightLogo, darkLogo, navLink }: HeaderProps) {
  const {
    handleMouseEnter,
    isOpen,
    activeMenuIndex,
    onHamburgerClick,
    handleMouseLeave,
    onMenuClick,
  } = useNavbar();

  return (
    <header className={theme}>
      <a href="/">
        <img src={theme === "light" ? darkLogo : lightLogo} alt="Logo" />
      </a>
      <nav className={`${isOpen ? "expanded" : ""}`}>
        <button type="button" className="hamburger" onClick={onHamburgerClick}>
          <span />
          <span />
          <span />
        </button>
        <ul>
          {navLink.map((link, index) => (
            <li
              key={link.text}
              className={`${activeMenuIndex === index ? "active" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {link.type === "link" ? (
                <a href={link.url ?? ""} className="cta cta-dark no-arrow">
                  {link.text}
                </a>
              ) : (
                <>
                  <a
                    href={link.url}
                    className="nav-link"
                    id={`nav-${index + 1}`}
                    onClick={onMenuClick}
                  >
                    {link.text}
                  </a>
                  {link.menu?.length && (
                    <ul
                      id={`nav-menu-${index + 1}`}
                      className={`menu ${activeMenuIndex === index ? "active" : ""}`}
                      aria-labelledby={`nav-${index + 1}`}
                    >
                      {link.menu?.map((menu) => (
                        <li key={menu.text}>
                          <a href={menu.link}>{menu.text}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
