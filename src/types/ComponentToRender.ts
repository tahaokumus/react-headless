import ComponentData from "@/types/ComponentData";

export default interface ComponentToRender extends ComponentData {
  Component: React.ExoticComponent<any>;
}
