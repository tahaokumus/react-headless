import ComponentData from "@/types/ComponentData";

export default interface PageData {
  path: string;
  title: string;
  lang: string;
  dir: string;
  components: Array<ComponentData>;
}
