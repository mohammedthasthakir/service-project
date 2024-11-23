import { deepmerge } from "@mui/utils";
import { lightTheme, darkTheme } from "./theme";

export const getTheme = (mode) => (mode === "dark" ? darkTheme : lightTheme);

/**
 * Extend the base theme with custom components
 */
export const extendTheme = (baseTheme, customComponents) =>
  deepmerge(baseTheme, { components: customComponents });
