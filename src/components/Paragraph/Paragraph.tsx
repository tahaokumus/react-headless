import React from "react";
import { Align, Color, getAlign, getColor, getSize, Size } from "@/types/TextTypes";
import "./Paragraph.scss";

interface ParagraphProps {
  text: string;
  size: Size;
  color: Color;
  align: Align;
}

export default function Paragraph({ text, size, color, align }: ParagraphProps) {
  const titleClassName = ["paragraph", getColor(color), getSize(size), getAlign(align)].join(" ");

  return <p className={titleClassName}>{text}</p>;
}
