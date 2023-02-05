export type Color = "white" | "black" | "orange" | "gray";
export type Size = "small" | "medium" | "large";
export type Align = "start" | "center" | "end";

export function getColor(color: Color) {
  return `color-${color}`;
}

export function getSize(size: Size) {
  return `size-${size}`;
}

export function getAlign(align: Align) {
  return `align-${align}`;
}
