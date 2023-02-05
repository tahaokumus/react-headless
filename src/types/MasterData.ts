export default interface MasterData {
  lang: string;
  dir: string;
  props: {
    header: {
      lightLogo: string;
      darkLogo: string;
    };
    [key: string]: any;
  };
}
