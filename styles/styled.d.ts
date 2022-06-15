import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    name: string;
    shadowColor: string;
    menuColor: string;
  }
}
