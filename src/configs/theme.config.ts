import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primaryDark: "#001049",
      primaryLight: "#484CB8",
      gray: "#EFF0F6",
      white: "#FFFFFF",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "24px",
    },
    radii: {
      1: "4px",
      2: "8px",
      3: "16px",
    },
  },
});
