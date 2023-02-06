import React from "react";
import { Align, Color, getAlign, getColor, getSize, Size } from "@/types/TextTypes";
import "./Paragraph.scss";

interface ParagraphProps {
  text: string;
  size: Size;
  color: Color;
  align: Align;
}
function fixColor(text: string) {
  return text.replace("color: #ff6600", "color: var(--color-orange-light)");
}

export default function Paragraph({ text, size, color, align }: ParagraphProps) {
  const titleClassName = ["paragraph", getColor(color), getSize(size), getAlign(align)].join(" ");

  const t = { __html: fixColor(text) };

  // eslint-disable-next-line react/no-danger
  return <p className={titleClassName} dangerouslySetInnerHTML={t} />;
}
