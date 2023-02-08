export default interface MasterData {
  lang: string;
  dir: string;
  header: {
    lightLogo: string;
    darkLogo: string;
    navLink: [
      {
        type: "link" | "menu";
        text: string;
        menu: [{ text: string; link: string }] | null;
        url: string | null;
      },
    ];
  };
  footer: {
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
  };
  [key: string]: any;
}
