import React from "react";

export interface FooterProps {
  zoetisLogo: string;
  mastigramLogo: string;
  footerLinks: [
    {
      title: string;
      links: [
        {
          text: string;
          link: string | null;
        },
      ];
    },
  ];
}

export default function Header({ zoetisLogo, mastigramLogo, footerLinks }: FooterProps) {
  return (
    <footer>
      <div className="logo-wrapper">
        <a href="/">
          <img src={zoetisLogo} className="zoetis-logo" alt="zoetis logo" />
        </a>
        <a href="/">
          <img src={mastigramLogo} alt="mastigram logo" />
        </a>
      </div>
      <div className="links">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title} className="link-group">
            <h3 className="link-group-title">{footerLink.title}</h3>
            <ul>
              {footerLink.links.map((link) => (
                <li key={link.text}>
                  {link.link ? (
                    <a
                      href={link.link ?? ""}
                      dangerouslySetInnerHTML={{ __html: link.text }}
                      aria-label={link.text}
                    />
                  ) : (
                    <p dangerouslySetInnerHTML={{ __html: link.text }} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
