import { useColorScheme } from "react-native";
import { Colors } from "./colors";
import { Theme } from "./types";

const LightTheme: Theme = {
  dark: false,
  toggle: () => {},
  colors: Colors.light,
};
const themes = {
  light: LightTheme,
  dark: LightTheme, //DarkTheme,
};

export function useTheme(): Theme {
  const scheme = useColorScheme();
  return scheme === "light" ? themes.light : themes.dark;
}

export const theme = themes.light;
