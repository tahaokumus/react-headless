import React from "react";
import { usePageData, useMasterData } from "@/hooks/usePageData";
import useComponents from "@/hooks/useComponents";
import AsyncRenderer from "@/components/_AsyncRenderer";
import Header from "@/components/Header/Header";

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

  console.log("masterData", masterData);

  const props = { ...masterData?.props?.header, theme: pageData?.theme };
  return (
    <div className="page">
      {
        // eslint-disable-next-line react/jsx-props-no-spreading
        masterData && <Header {...props} />
      }
      <AsyncRenderer components={components} />
    </div>
  );
}

export default App;
