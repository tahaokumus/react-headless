import React from "react";
import { usePageData, useMasterData } from "@/hooks/usePageData";
import useComponents from "@/hooks/useComponents";
import AsyncRenderer from "@/components/_AsyncRenderer";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

function App() {
  const pageData = usePageData();
  const components = useComponents(pageData?.components);

  const masterData = useMasterData();

  if (masterData?.lang) {
    document.querySelector("html")?.setAttribute("lang", masterData.lang);
  }
  if (masterData?.dir) {
    document.querySelector("html")?.setAttribute("dir", masterData.dir);
  }

  const headerProps = { ...masterData?.props?.header, theme: pageData?.theme };

  return (
    <div className="page">
      {
        // eslint-disable-next-line react/jsx-props-no-spreading
        masterData?.props?.header && <Header {...headerProps} />
      }
      <AsyncRenderer components={components} />
      {
        // eslint-disable-next-line react/jsx-props-no-spreading
        masterData?.props?.footer && <Footer {...masterData?.props?.footer} />
      }
    </div>
  );
}

export default App;
