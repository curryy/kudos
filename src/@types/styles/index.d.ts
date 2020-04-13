import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      button: string;
      text: string;
      additionalText: string;
      inputText: string;
      inputBorder: string;
      background: string;
      error: string;
      lightBorder: string;
    };
  }
}
