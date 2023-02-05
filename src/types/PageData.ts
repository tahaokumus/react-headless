import ComponentData from "@/types/ComponentData";

export default interface PageData {
  path: string;
  title: string;
  theme: string;
  components: Array<ComponentData>;
}
