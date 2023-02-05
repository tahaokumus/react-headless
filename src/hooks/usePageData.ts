import { useEffect, useState } from "react";
import PageData from "@/types/PageData";
import MasterData from "@/types/MasterData";

function useData(jsonUrl: string) {
  const [url, setUrl] = useState<string | null>(null);
  const [data, setData] = useState<PageData | MasterData | null>(null);

  useEffect(() => {
    if (!url) {
      setUrl(document.querySelector("[data-page-root]")?.getAttribute(jsonUrl) ?? null);
    } else {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [url, jsonUrl]);

  return data;
}

export function usePageData() {
  return useData("data-json-url") as PageData;
}

export function useMasterData() {
  return useData("data-master-json-url") as MasterData;
}
