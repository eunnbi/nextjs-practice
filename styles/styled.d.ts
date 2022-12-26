import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    name: "dark" | "light";
    shadowColor: string;
    menuColor: string;
  }
}
