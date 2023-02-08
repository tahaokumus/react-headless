import React from "react";
import useComponents from "@/hooks/useComponents";
import ComponentData from "@/types/ComponentData";
import AsyncRenderer from "@/components/_AsyncRenderer";
import useHomepageHeroAnimation from "@/hooks/useHomepageHeroAnimation";
import ComponentToRender from "@/types/ComponentToRender";

interface HomepageHeroProps {
  animation: {
    handImage: string;
    tubeImage: string;
    bgImage: string;
  };

  children: Array<ComponentData>;
}

export default function Paragraph({ animation, children }: HomepageHeroProps) {
  const { handImageRef } = useHomepageHeroAnimation();

  const components = useComponents(children);

  // We want to render the hand animation betweeen the first and second component
  const firstComponent = components ? [components.at(0) as ComponentToRender] : null;
  const restOfTheComponents = components?.slice(1) ?? null;

  return (
    <section className="hero variation-homepage">
      <div className="container">
        <AsyncRenderer components={firstComponent} />
        <div className="animation-container">
          <img
            ref={handImageRef}
            src={animation.handImage}
            alt=""
            role="presentation"
            className="hand"
          />
          <img src={animation.tubeImage} alt="" role="presentation" className="tube" />
          <img src={animation.bgImage} alt="" role="presentation" className="bg" />
        </div>
        <AsyncRenderer components={restOfTheComponents} />
      </div>
    </section>
  );
}
