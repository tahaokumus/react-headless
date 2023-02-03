import React from "react";
import usePageData from "@/hooks/usePageData";
import useComponents from "@/hooks/useComponents";
import AsyncRenderer from "./components/_AsyncRenderer";

function App() {
  const data = usePageData();
  const components = useComponents(data?.components);

  return (
    <div className="page">
      <AsyncRenderer components={components} />
    </div>
  );
}

export default App;
