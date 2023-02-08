import { useEffect, useState } from "react";
import PageData from "@/types/PageData";
import MasterData from "@/types/MasterData";

const fetchJson = (url: string, cb: any) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      cb(json);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default function useData() {
  const [pageUrl, setPageUrl] = useState<string | null>(null);
  const [masterUrl, setMasterUrl] = useState<string | null>(null);
  const [pageData, setPageData] = useState<PageData>();
  const [masterData, setMasterData] = useState<MasterData>();

  useEffect(() => {
    if (!pageUrl) {
      setPageUrl(document.querySelector("[data-page-root]")?.getAttribute("data-json-url") ?? null);
    } else {
      fetchJson(pageUrl, setPageData);
    }
    if (!masterUrl) {
      setMasterUrl(
        document.querySelector("[data-page-root]")?.getAttribute("data-master-json-url") ?? null,
      );
    } else {
      fetchJson(masterUrl, setMasterData);
    }
  }, [pageUrl, masterUrl]);

  const changeLanguage = () => {
    setPageUrl(null);
    setMasterUrl(null);
  };

  return { pageData: pageData as PageData, masterData: masterData as MasterData, changeLanguage };
}
