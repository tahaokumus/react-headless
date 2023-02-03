import { lazy, useEffect, useState } from "react";
import ComponentData from "@/types/ComponentData";
import ComponentToRender from "@/types/ComponentToRender";

const importComponent = async (name: string) => lazy(() => import(`@/components/${name}/${name}`));

export default function useComponents(componentsData: Array<ComponentData> | undefined) {
  const [views, setViews] = useState<ComponentToRender[] | null>(null);

  useEffect(() => {
    if (componentsData?.length) {
      Promise.all(
        componentsData.map(async (componentData) => {
          const Component = await importComponent(componentData.name);
          return { ...componentData, Component } as ComponentToRender;
        }),
      ).then((c) => setViews(c));
    }
  }, [componentsData]);

  return views;
}
