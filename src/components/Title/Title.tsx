import React from "react";
import "./Title.scss";

type Color = "red" | "blue";
type Size = "small" | "medium" | "large";

interface UpperTitleProps {
  text: string;
  tag: keyof JSX.IntrinsicElements;
  color: Color;
}

interface TitleProps {
  text: string;
  tag: keyof JSX.IntrinsicElements;
  size: Size;
  color: Color;
  upperTitle: UpperTitleProps | null;
}

function getColor(color: Color) {
  return `color-${color}`;
}

function getSize(size: Size) {
  return `size-${size}`;
}

export default function Button({ text, tag, size, color, upperTitle }: TitleProps) {
  const Tag = tag;
  const titleClassName = `title ${getColor(color)} ${getSize(size)}`;

  const header = <Tag className={titleClassName}>{text}</Tag>;

  if (upperTitle) {
    const UpperTitleTag = upperTitle.tag;
    const className = `upper-title ${getColor(upperTitle.color)}`;

    return (
      <>
        <UpperTitleTag className={className}>{upperTitle.text}</UpperTitleTag>
        {header}
      </>
    );
  }

  return header;
}
