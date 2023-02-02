import { useEffect, useState } from "react";
import PageData from "@/types/PageData";

export default function usePageData() {
  const [url, setUrl] = useState<string | null>(null);
  const [data, setData] = useState<PageData | null>(null);

  useEffect(() => {
    if (!url) {
      setUrl(document.querySelector("[data-page-root]")?.getAttribute("data-json-url") ?? null);
    } else {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json as PageData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [url]);

  return data;
}
