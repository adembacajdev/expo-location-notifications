export type Theme = {
  dark: boolean;
  toggle?: () => void;
  colors: {
    white: string;
    black: string;
    tabLight: string;
    tabDark: string;
    background: string;
    border: string;
  };
};
