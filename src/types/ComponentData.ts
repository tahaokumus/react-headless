export default interface ComponentData {
  name: string;
  props: {
    [key: string]: any;
    children?: Array<ComponentData>;
  };
}
