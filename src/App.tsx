import React from "react";
import useData from "@/hooks/usePageData";
import useComponents from "@/hooks/useComponents";
import AsyncRenderer from "@/components/_AsyncRenderer";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./App.scss";

function App() {
  const { pageData, masterData, changeLanguage } = useData();
  const components = useComponents(pageData?.components);

  if (masterData?.lang) {
    document.querySelector("html")?.setAttribute("lang", masterData.lang);
  }
  if (masterData?.dir) {
    document.querySelector("html")?.setAttribute("dir", masterData.dir);
  }

  const headerProps = { ...masterData?.header, theme: pageData?.theme };

  const handleClick = () => {
    const lang = document.querySelector("html")?.getAttribute("lang");
    const masterUrl = lang === "en" ? "/master-rtl.json" : "/master.json";
    const pageUrl = lang === "en" ? "/page-rtl.json" : "/page.json";

    document.querySelector("[data-page-root]")?.setAttribute("data-json-url", pageUrl);
    document.querySelector("[data-page-root]")?.setAttribute("data-master-json-url", masterUrl);

    changeLanguage();
  };

  return (
    <div className="page">
      <button type="button" className="lang-btn" onClick={handleClick}>
        Change Lang
      </button>
      {
        // eslint-disable-next-line react/jsx-props-no-spreading
        masterData?.header && <Header {...headerProps} />
      }
      <AsyncRenderer components={components} />
      {
        // eslint-disable-next-line react/jsx-props-no-spreading
        masterData?.footer && <Footer {...masterData.footer} />
      }
    </div>
  );
}

export default App;
