import ComponentData from "@/types/ComponentData";

export default interface PageData {
  metadata: {};
  path: string;
  title: string;
  components: Array<ComponentData>;
}
