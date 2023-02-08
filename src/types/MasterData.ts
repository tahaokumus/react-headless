import { FooterProps } from "@/components/Footer/Footer";
import { HeaderProps } from "@/components/Header/Header";

export default interface MasterData {
  lang: string;
  dir: string;
  header: HeaderProps;
  footer: FooterProps;
  [key: string]: any;
}
