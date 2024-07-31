import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      error: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    space: number[];
    fonts: {
      body: string;
      heading: string;
    };
    buttons: {
      primary: {
        color: string;
        backgroundColor: string;
        borderColor: string;
      };
      secondary: {
        color: string;
        backgroundColor: string;
        borderColor: string;
      };
    };
    fontSizes: number[];
  }
}
