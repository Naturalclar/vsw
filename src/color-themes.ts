/**
 * Color-based theme definitions
 */
import type { ThemeColors } from "./theme-colors";

/**
 * Color theme interface
 */
export interface ColorTheme {
  name: string;
  type: "dark" | "light";
  description: string;
}

/**
 * Color theme presets
 */
export const colorThemes: ColorTheme[] = [
  {
    name: "Ruby Red",
    type: "dark",
    description: "A dark theme with rich red accents",
  },
  {
    name: "Emerald Green",
    type: "dark",
    description: "A dark theme with vibrant green accents",
  },
  {
    name: "Sapphire Blue",
    type: "dark",
    description: "A dark theme with deep blue accents",
  },
  {
    name: "Royal Purple",
    type: "dark",
    description: "A dark theme with elegant purple accents",
  },
  {
    name: "Sunset Orange",
    type: "dark",
    description: "A dark theme with warm orange accents",
  },
  {
    name: "Chocolate Brown",
    type: "dark",
    description: "A dark theme with earthy brown accents",
  },
  {
    name: "Cherry Red",
    type: "light",
    description: "A light theme with bright red accents",
  },
  {
    name: "Mint Green",
    type: "light",
    description: "A light theme with fresh green accents",
  },
  {
    name: "Sky Blue",
    type: "light",
    description: "A light theme with clear blue accents",
  },
  {
    name: "Lavender Purple",
    type: "light",
    description: "A light theme with soft purple accents",
  },
  {
    name: "Peach Orange",
    type: "light",
    description: "A light theme with gentle orange accents",
  },
  {
    name: "Caramel Brown",
    type: "light",
    description: "A light theme with warm brown accents",
  },
];

/**
 * Get color themes by type
 */
export const getColorThemesByType = (type: "dark" | "light"): ColorTheme[] => {
  return colorThemes.filter((theme) => theme.type === type);
};

/**
 * Get all color themes
 */
export const getAllColorThemes = (): ColorTheme[] => {
  return colorThemes;
};

/**
 * Get color theme by name
 */
export const getColorThemeByName = (name: string): ColorTheme | undefined => {
  return colorThemes.find((theme) => theme.name === name);
};

/**
 * Ruby Red theme colors
 */
export const rubyRedColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#1a0000",
    "activityBar.foreground": "#ff3333",
    "editor.background": "#1a0000",
    "editor.foreground": "#f0f0f0",
    "editor.lineHighlightBackground": "#2a0000",
    "editorGroupHeader.tabsBackground": "#150000",
    "sideBar.background": "#150000",
    "statusBar.background": "#150000",
    "tab.activeBackground": "#1a0000",
    "tab.inactiveBackground": "#150000",
    "titleBar.activeBackground": "#150000",
  },
  terminal: {
    background: "#150000", // Same as sideBar background
    foreground: "#ff3333", // Same as activityBar foreground for a ruby red effect
  },
  input: {
    background: "#150000", // Same as sideBar background for consistency
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#664444",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#ff6666",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#ff9999",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#ff3333",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#ffcccc",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#f0f0f0",
        },
      },
    ],
  },
};

/**
 * Emerald Green theme colors
 */
export const emeraldGreenColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#001a00",
    "activityBar.foreground": "#33ff33",
    "editor.background": "#001a00",
    "editor.foreground": "#f0f0f0",
    "editor.lineHighlightBackground": "#002a00",
    "editorGroupHeader.tabsBackground": "#001500",
    "sideBar.background": "#001500",
    "statusBar.background": "#001500",
    "tab.activeBackground": "#001a00",
    "tab.inactiveBackground": "#001500",
    "titleBar.activeBackground": "#001500",
  },
  terminal: {
    background: "#001500", // Same as sideBar background
    foreground: "#33ff33", // Same as activityBar foreground for an emerald green effect
  },
  input: {
    background: "#001500", // Same as sideBar background for consistency
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#446644",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#66ff66",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#99ff99",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#33ff33",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#ccffcc",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#f0f0f0",
        },
      },
    ],
  },
};

/**
 * Sapphire Blue theme colors
 */
export const sapphireBlueColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#00001a",
    "activityBar.foreground": "#3333ff",
    "editor.background": "#00001a",
    "editor.foreground": "#f0f0f0",
    "editor.lineHighlightBackground": "#00002a",
    "editorGroupHeader.tabsBackground": "#000015",
    "sideBar.background": "#000015",
    "statusBar.background": "#000015",
    "tab.activeBackground": "#00001a",
    "tab.inactiveBackground": "#000015",
    "titleBar.activeBackground": "#000015",
  },
  terminal: {
    background: "#000015", // Same as sideBar background
    foreground: "#3333ff", // Same as activityBar foreground for a sapphire blue effect
  },
  input: {
    background: "#000015", // Same as sideBar background for consistency
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#444466",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#6666ff",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#9999ff",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#3333ff",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#ccccff",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#f0f0f0",
        },
      },
    ],
  },
};

/**
 * Royal Purple theme colors
 */
export const royalPurpleColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#1a001a",
    "activityBar.foreground": "#cc33cc",
    "editor.background": "#1a001a",
    "editor.foreground": "#f0f0f0",
    "editor.lineHighlightBackground": "#2a002a",
    "editorGroupHeader.tabsBackground": "#150015",
    "sideBar.background": "#150015",
    "statusBar.background": "#150015",
    "tab.activeBackground": "#1a001a",
    "tab.inactiveBackground": "#150015",
    "titleBar.activeBackground": "#150015",
  },
  terminal: {
    background: "#150015", // Same as sideBar background
    foreground: "#cc33cc", // Same as activityBar foreground for a royal purple effect
  },
  input: {
    background: "#150015", // Same as sideBar background for consistency
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#664466",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#cc66cc",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#cc99cc",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#cc33cc",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#ccccff",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#f0f0f0",
        },
      },
    ],
  },
};

/**
 * Sunset Orange theme colors
 */
export const sunsetOrangeColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#1a0d00",
    "activityBar.foreground": "#ff8533",
    "editor.background": "#1a0d00",
    "editor.foreground": "#f0f0f0",
    "editor.lineHighlightBackground": "#2a1500",
    "editorGroupHeader.tabsBackground": "#150b00",
    "sideBar.background": "#150b00",
    "statusBar.background": "#150b00",
    "tab.activeBackground": "#1a0d00",
    "tab.inactiveBackground": "#150b00",
    "titleBar.activeBackground": "#150b00",
  },
  terminal: {
    background: "#150b00", // Same as sideBar background
    foreground: "#ff8533", // Same as activityBar foreground for a sunset orange effect
  },
  input: {
    background: "#150b00", // Same as sideBar background for consistency
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#665544",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#ff9966",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#ffcc99",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#ff8533",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#ffddcc",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#f0f0f0",
        },
      },
    ],
  },
};

/**
 * Chocolate Brown theme colors
 */
export const chocolateBrownColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#1a0d00",
    "activityBar.foreground": "#cc8033",
    "editor.background": "#1a0d00",
    "editor.foreground": "#f0f0f0",
    "editor.lineHighlightBackground": "#2a1500",
    "editorGroupHeader.tabsBackground": "#150b00",
    "sideBar.background": "#150b00",
    "statusBar.background": "#150b00",
    "tab.activeBackground": "#1a0d00",
    "tab.inactiveBackground": "#150b00",
    "titleBar.activeBackground": "#150b00",
  },
  terminal: {
    background: "#150b00", // Same as sideBar background
    foreground: "#cc8033", // Same as activityBar foreground for a chocolate brown effect
  },
  input: {
    background: "#150b00", // Same as sideBar background for consistency
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#665544",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#cc9966",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#ccaa99",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#cc8033",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#ccbbaa",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#f0f0f0",
        },
      },
    ],
  },
};

/**
 * Cherry Red theme colors
 */
export const cherryRedColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#ffffff",
    "activityBar.foreground": "#cc0000",
    "editor.background": "#ffffff",
    "editor.foreground": "#333333",
    "editor.lineHighlightBackground": "#f5f5f5",
    "editorGroupHeader.tabsBackground": "#f0f0f0",
    "sideBar.background": "#f0f0f0",
    "statusBar.background": "#f0f0f0",
    "tab.activeBackground": "#ffffff",
    "tab.inactiveBackground": "#f0f0f0",
    "titleBar.activeBackground": "#f0f0f0",
  },
  terminal: {
    background: "#ffffff", // Same as editor background
    foreground: "#cc0000", // Same as activityBar foreground for a cherry red effect
  },
  input: {
    background: "#f0f0f0", // Same as sideBar background for consistency
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#999999",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#cc0000",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#ff3333",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#990000",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#cc3333",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#333333",
        },
      },
    ],
  },
};

/**
 * Mint Green theme colors
 */
export const mintGreenColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#ffffff",
    "activityBar.foreground": "#00cc66",
    "editor.background": "#ffffff",
    "editor.foreground": "#333333",
    "editor.lineHighlightBackground": "#f5f5f5",
    "editorGroupHeader.tabsBackground": "#f0f0f0",
    "sideBar.background": "#f0f0f0",
    "statusBar.background": "#f0f0f0",
    "tab.activeBackground": "#ffffff",
    "tab.inactiveBackground": "#f0f0f0",
    "titleBar.activeBackground": "#f0f0f0",
  },
  terminal: {
    background: "#ffffff", // Same as editor background
    foreground: "#00cc66", // Same as activityBar foreground for a mint green effect
  },
  input: {
    background: "#f0f0f0", // Same as sideBar background for consistency
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#999999",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#00cc66",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#33cc99",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#009933",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#33cc66",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#333333",
        },
      },
    ],
  },
};

/**
 * Sky Blue theme colors
 */
export const skyBlueColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#ffffff",
    "activityBar.foreground": "#0099cc",
    "editor.background": "#ffffff",
    "editor.foreground": "#333333",
    "editor.lineHighlightBackground": "#f5f5f5",
    "editorGroupHeader.tabsBackground": "#f0f0f0",
    "sideBar.background": "#f0f0f0",
    "statusBar.background": "#f0f0f0",
    "tab.activeBackground": "#ffffff",
    "tab.inactiveBackground": "#f0f0f0",
    "titleBar.activeBackground": "#f0f0f0",
  },
  terminal: {
    background: "#ffffff", // Same as editor background
    foreground: "#0099cc", // Same as activityBar foreground for a sky blue effect
  },
  input: {
    background: "#f0f0f0", // Same as sideBar background for consistency
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#999999",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#0099cc",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#33ccff",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#0066cc",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#3399cc",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#333333",
        },
      },
    ],
  },
};

/**
 * Lavender Purple theme colors
 */
export const lavenderPurpleColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#ffffff",
    "activityBar.foreground": "#9966cc",
    "editor.background": "#ffffff",
    "editor.foreground": "#333333",
    "editor.lineHighlightBackground": "#f5f5f5",
    "editorGroupHeader.tabsBackground": "#f0f0f0",
    "sideBar.background": "#f0f0f0",
    "statusBar.background": "#f0f0f0",
    "tab.activeBackground": "#ffffff",
    "tab.inactiveBackground": "#f0f0f0",
    "titleBar.activeBackground": "#f0f0f0",
  },
  terminal: {
    background: "#ffffff", // Same as editor background
    foreground: "#9966cc", // Same as activityBar foreground for a lavender purple effect
  },
  input: {
    background: "#f0f0f0", // Same as sideBar background for consistency
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#999999",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#9966cc",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#cc99ff",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#6633cc",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#9966ff",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#333333",
        },
      },
    ],
  },
};

/**
 * Peach Orange theme colors
 */
export const peachOrangeColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#ffffff",
    "activityBar.foreground": "#ff9933",
    "editor.background": "#ffffff",
    "editor.foreground": "#333333",
    "editor.lineHighlightBackground": "#f5f5f5",
    "editorGroupHeader.tabsBackground": "#f0f0f0",
    "sideBar.background": "#f0f0f0",
    "statusBar.background": "#f0f0f0",
    "tab.activeBackground": "#ffffff",
    "tab.inactiveBackground": "#f0f0f0",
    "titleBar.activeBackground": "#f0f0f0",
  },
  terminal: {
    background: "#ffffff", // Same as editor background
    foreground: "#ff9933", // Same as activityBar foreground for a peach orange effect
  },
  input: {
    background: "#f0f0f0", // Same as sideBar background for consistency
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#999999",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#ff9933",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#ffcc99",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#cc6600",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#ff9966",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#333333",
        },
      },
    ],
  },
};

/**
 * Caramel Brown theme colors
 */
export const caramelBrownColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#ffffff",
    "activityBar.foreground": "#996633",
    "editor.background": "#ffffff",
    "editor.foreground": "#333333",
    "editor.lineHighlightBackground": "#f5f5f5",
    "editorGroupHeader.tabsBackground": "#f0f0f0",
    "sideBar.background": "#f0f0f0",
    "statusBar.background": "#f0f0f0",
    "tab.activeBackground": "#ffffff",
    "tab.inactiveBackground": "#f0f0f0",
    "titleBar.activeBackground": "#f0f0f0",
  },
  terminal: {
    background: "#ffffff", // Same as editor background
    foreground: "#996633", // Same as activityBar foreground for a caramel brown effect
  },
  input: {
    background: "#f0f0f0", // Same as sideBar background for consistency
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#999999",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#996633",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#cc9966",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#663300",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#996666",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#333333",
        },
      },
    ],
  },
};

/**
 * Get color theme colors by name
 */
export const getColorThemeColors = (
  themeName: string
): ThemeColors | undefined => {
  switch (themeName) {
    case "Ruby Red":
      return rubyRedColors;
    case "Emerald Green":
      return emeraldGreenColors;
    case "Sapphire Blue":
      return sapphireBlueColors;
    case "Royal Purple":
      return royalPurpleColors;
    case "Sunset Orange":
      return sunsetOrangeColors;
    case "Chocolate Brown":
      return chocolateBrownColors;
    case "Cherry Red":
      return cherryRedColors;
    case "Mint Green":
      return mintGreenColors;
    case "Sky Blue":
      return skyBlueColors;
    case "Lavender Purple":
      return lavenderPurpleColors;
    case "Peach Orange":
      return peachOrangeColors;
    case "Caramel Brown":
      return caramelBrownColors;
    default:
      return undefined;
  }
};
