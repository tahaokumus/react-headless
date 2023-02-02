import React from "react";
import ComponentToRender from "@/types/ComponentToRender";

interface AsyncRendererProps {
  components: ComponentToRender[] | null;
}

export default function AsyncRenderer({ components }: AsyncRendererProps) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {components?.map((component, index) => {
        const { Component, props } = component;
        const key = index + component.name;
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Component key={key} {...props} />;
      })}
    </React.Suspense>
  );
}
