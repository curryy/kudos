import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      button: string;
      text: string;
      additionalText: string;
    };
  }
}
