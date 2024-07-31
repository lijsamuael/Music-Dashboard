// styles/theme.ts
import { Theme } from "@emotion/react";

export const theme: Theme = {
  colors: {
    primary: "#6200ea",
    secondary: "#03dac6",
    background: "#f5f5f5",
    text: "#000000",
    error: "#b00020",
  },
  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
    xxl: "1400px",
  },
  space: [0, 4, 8, 16, 32, 64, 128],
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Georgia, serif",
  },
  buttons: {
    primary: {
      color: "#F02A3F",
      backgroundColor: "transparent",
      borderColor: "#F02A3F",
    },
    secondary: {
      color: "white",
      backgroundColor: "#282a34",
      borderColor: "#282a34",
    },
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48],
};
