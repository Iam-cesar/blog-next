import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secundary: string;
      text: string;
      background: string;
      topbar: string;
      buttonBackground: string;
      buttonText: string;
      inputBackgroundColor: string;
      modalBackgroundColor: string;
      borderColor: string;
      disabled: string;
      delete: string;
    };

    effects: {
      boxShadow: string;
    };
  }
}
