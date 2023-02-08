import useComponents from "@/hooks/useComponents";
import ComponentData from "@/types/ComponentData";
import AsyncRenderer from "@/components/_AsyncRenderer";
import { Color } from "@/types/TextTypes";
import React from "react";

interface HomepageBackground {
  color?: Color;
  image?: string;
  video?: string;
}

interface HomepageHeroProps {
  background: HomepageBackground;
  children: Array<ComponentData>;
}

function getBackground(background: HomepageBackground) {
  if (background.color) {
    return {
      "--hero-bg-color": background.color,
    };
  }

  if (background.image) {
    return {
      "--hero-bg-image": `url(${background.image})`,
    };
  }

  if (background.video) {
    return {
      "--hero-bg-video": `url(${background.video})`,
    };
  }

  return {};
}

export default function Paragraph({ background, children }: HomepageHeroProps) {
  const backgroundStyle = getBackground(background) as React.CSSProperties;

  const components = useComponents(children);

  return (
    <section className="hero variation-homepage" style={backgroundStyle}>
      <div className="container">
        <AsyncRenderer components={components} />
      </div>
    </section>
  );
}
