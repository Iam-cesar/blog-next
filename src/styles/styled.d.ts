import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secundary: string;
      text: string;
      background: string;
      navbar: string;
      buttonBackground: string;
      buttonText: string;
      inputBackgroundColor: string;
      modalBackgroundColor: string;
      borderColor: string;
    };

    effects: {
      boxShadow: string;
    };
  }
}
