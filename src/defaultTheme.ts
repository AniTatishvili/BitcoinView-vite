// export default theme;
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

interface Colors {
  brand: {
    black: string;
    white: string;
    dark: string;
    light: string;
    grey: string;
    gold: string;
    green: string;
    red: string;
  };
}

interface CustomStyles {
  global: (props: StyleFunctionProps) => Record<string, object>;
}

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles: CustomStyles = {
  global: (props) => ({
    body: {
      bg: mode("brand.white", "brand.dark")(props),
    },
    p: {},
    a: {},
    button: {},
    svg: {},
    select: {},
    footer: {},
  }),
};

const fonts = {
  heading: `'Karla', sans-serif`,
  body: `'Monserrat', sans-serif`,
};

const colors: Colors = {
  brand: {
    black: "#000000",
    white: "#ffffff",
    dark: "#141316",
    light: "#f2f2f2",
    grey: "#eaeaea",
    gold: "#745C26",
    green: "#39884f",
    red: "#b92c2c",
  },
};

export const defaultTheme = extendTheme({
  config,
  styles,
  colors,
  fonts,
});
