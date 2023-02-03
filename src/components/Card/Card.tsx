import React from "react";
import useComponents from "@/hooks/useComponents";
import ComponentData from "@/types/ComponentData";
import AsyncRenderer from "@/components/_AsyncRenderer";

interface CardProps {
  children: Array<ComponentData>;
}

export default function Card({ children }: CardProps) {
  const components = useComponents(children);

  return (
    <div className="card" style={{ width: "250px", height: "250px", backgroundColor: "wheat" }}>
      <AsyncRenderer components={components} />
    </div>
  );
}
