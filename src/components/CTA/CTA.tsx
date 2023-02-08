import React from "react";

type CTAVariation = "dark" | "orange" | "outline-orange";

interface CTAProps {
  text: string;
  variation: CTAVariation;
  url: string | null;
  target: string | null;
}

export default function CTA({ text, variation, url, target }: CTAProps) {
  const props = {
    ...(url ? { href: url } : {}),
    ...(target ? { target } : {}),
    className: `cta cta-${variation}`,
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <a {...props}>{text}</a>;
}
