import React from "react";
import "./Title.scss";

type Color = "white" | "black" | "orange" | "gray";
type Size = "small" | "medium" | "large";
type Align = "left" | "center" | "right";
type UpperTitleSize = "small" | "medium";

interface UpperTitleProps {
  text: string;
  tag: keyof JSX.IntrinsicElements;
  color: Color;
  align: Align;
  size: UpperTitleSize;
}

interface TitleProps {
  text: string;
  tag: keyof JSX.IntrinsicElements;
  size: Size;
  color: Color;
  align: Align;
  upperTitle: UpperTitleProps | null;
}

function getColor(color: Color) {
  return `color-${color}`;
}

function getSize(size: Size) {
  return `size-${size}`;
}

function getAlign(align: Align) {
  return `align-${align}`;
}

export default function Title({ text, tag, size, color, align, upperTitle }: TitleProps) {
  const Tag = tag;
  const titleClassName = ["title", getColor(color), getSize(size), getAlign(align)].join(" ");

  const header = <Tag className={titleClassName}>{text}</Tag>;

  if (upperTitle) {
    const UpperTitleTag = upperTitle.tag;
    const className = [
      "upper-title",
      getColor(upperTitle.color),
      getAlign(upperTitle.align),
      getSize(upperTitle.size),
    ].join(" ");

    return (
      <>
        <UpperTitleTag className={className}>{upperTitle.text}</UpperTitleTag>
        {header}
      </>
    );
  }

  return header;
}
