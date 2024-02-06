import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors: {
    red: {
      50: "#ffe8e8",
      100: "#f2c2c2",
      200: "#e49b9c",
      300: "#d87474",
      400: "#cb4d4d",
      500: "#b23434",
      600: "#8b2727",
      700: "#641b1c",
      800: "#3e0f0f",
      900: "#1c0202",
    },
  },
});

export default theme;
