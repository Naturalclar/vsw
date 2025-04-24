/**
 * Color definitions for pastel themes
 */

/**
 * Theme color interface
 */
export interface ThemeColors {
  workbench: Record<string, string>;
  editor: {
    tokenColors: Array<{
      scope: string[] | string;
      settings: {
        foreground?: string;
        fontStyle?: string;
      };
    }>;
  };
}

/**
 * Pastel Light theme colors
 */
export const pastelLightColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#f8f9fa",
    "activityBar.foreground": "#7c8495",
    "editor.background": "#f8f9fa",
    "editor.foreground": "#545c6b",
    "editor.lineHighlightBackground": "#f1f2f4",
    "editorGroupHeader.tabsBackground": "#f1f2f4",
    "sideBar.background": "#f1f2f4",
    "statusBar.background": "#e9ecef",
    "tab.activeBackground": "#f8f9fa",
    "tab.inactiveBackground": "#f1f2f4",
    "titleBar.activeBackground": "#e9ecef",
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#a0a8b7",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#91c4a9",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#c191a1",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#a191c4",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#91a1c4",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#c4a191",
        },
      },
    ],
  },
};

/**
 * Pastel Dark theme colors
 */
export const pastelDarkColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#282c34",
    "activityBar.foreground": "#c5c8d1",
    "editor.background": "#282c34",
    "editor.foreground": "#c5c8d1",
    "editor.lineHighlightBackground": "#2c313a",
    "editorGroupHeader.tabsBackground": "#21252b",
    "sideBar.background": "#21252b",
    "statusBar.background": "#21252b",
    "tab.activeBackground": "#282c34",
    "tab.inactiveBackground": "#21252b",
    "titleBar.activeBackground": "#21252b",
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#7f848e",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#b5cea8",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#d7a1a0",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#c5a1d7",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#a1c5d7",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#d7c5a1",
        },
      },
    ],
  },
};

/**
 * Panda Syntax theme colors
 */
export const pandaSyntaxColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#292a2b",
    "activityBar.foreground": "#e6e6e6",
    "editor.background": "#292a2b",
    "editor.foreground": "#e6e6e6",
    "editor.lineHighlightBackground": "#31353a",
    "editorGroupHeader.tabsBackground": "#242526",
    "sideBar.background": "#242526",
    "statusBar.background": "#242526",
    "tab.activeBackground": "#292a2b",
    "tab.inactiveBackground": "#242526",
    "titleBar.activeBackground": "#242526",
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#676b79",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#19f9d8",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#ffb86c",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#ff75b5",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#6fc1ff",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#e6e6e6",
        },
      },
    ],
  },
};

/**
 * Fairy Floss theme colors
 */
export const fairyFlossColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#5a5475",
    "activityBar.foreground": "#f8f8f2",
    "editor.background": "#5a5475",
    "editor.foreground": "#f8f8f2",
    "editor.lineHighlightBackground": "#6a6483",
    "editorGroupHeader.tabsBackground": "#4b4466",
    "sideBar.background": "#4b4466",
    "statusBar.background": "#4b4466",
    "tab.activeBackground": "#5a5475",
    "tab.inactiveBackground": "#4b4466",
    "titleBar.activeBackground": "#4b4466",
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#e6c000",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#ffea00",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#c5a3ff",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#ff857f",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#fff352",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#f8f8f2",
        },
      },
    ],
  },
};

/**
 * Rainglow Piggy Light theme colors
 */
export const rainglowPiggyLightColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#f9f6f9",
    "activityBar.foreground": "#7a6e71",
    "editor.background": "#f9f6f9",
    "editor.foreground": "#7a6e71",
    "editor.lineHighlightBackground": "#f0edf0",
    "editorGroupHeader.tabsBackground": "#f0edf0",
    "sideBar.background": "#f0edf0",
    "statusBar.background": "#e7e4e7",
    "tab.activeBackground": "#f9f6f9",
    "tab.inactiveBackground": "#f0edf0",
    "titleBar.activeBackground": "#e7e4e7",
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#a99ea1",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#f06c6c",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#a3a3e0",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#e58a8a",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#c58ac5",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#7a6e71",
        },
      },
    ],
  },
};

/**
 * Rainglow Lavender Light theme colors
 */
export const rainglowLavenderLightColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#f7f5fe",
    "activityBar.foreground": "#7e7a8f",
    "editor.background": "#f7f5fe",
    "editor.foreground": "#7e7a8f",
    "editor.lineHighlightBackground": "#eeedf5",
    "editorGroupHeader.tabsBackground": "#eeedf5",
    "sideBar.background": "#eeedf5",
    "statusBar.background": "#e5e4ec",
    "tab.activeBackground": "#f7f5fe",
    "tab.inactiveBackground": "#eeedf5",
    "titleBar.activeBackground": "#e5e4ec",
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#aba7bc",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#a29dfa",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#7a77fe",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#8d89ad",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#b5b2fa",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#7e7a8f",
        },
      },
    ],
  },
};

/**
 * Rainglow Tonic theme colors
 */
export const rainglowTonicColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#2a2a2a",
    "activityBar.foreground": "#e3e2e0",
    "editor.background": "#2a2a2a",
    "editor.foreground": "#e3e2e0",
    "editor.lineHighlightBackground": "#333333",
    "editorGroupHeader.tabsBackground": "#222222",
    "sideBar.background": "#222222",
    "statusBar.background": "#222222",
    "tab.activeBackground": "#2a2a2a",
    "tab.inactiveBackground": "#222222",
    "titleBar.activeBackground": "#222222",
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#777777",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#96e0c0",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#96c0e0",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#e0c096",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#c0e096",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#e3e2e0",
        },
      },
    ],
  },
};

/**
 * Horizon theme colors
 */
export const horizonColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#1c1e26",
    "activityBar.foreground": "#d5d8da",
    "editor.background": "#1c1e26",
    "editor.foreground": "#d5d8da",
    "editor.lineHighlightBackground": "#232530",
    "editorGroupHeader.tabsBackground": "#16181f",
    "sideBar.background": "#16181f",
    "statusBar.background": "#16181f",
    "tab.activeBackground": "#1c1e26",
    "tab.inactiveBackground": "#16181f",
    "titleBar.activeBackground": "#16181f",
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#6c6f93",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#e95678",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#fab795",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#b877db",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#25b0bc",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#fac29a",
        },
      },
    ],
  },
};

/**
 * Ayu Light theme colors
 */
export const ayuLightColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#f8f9fa",
    "activityBar.foreground": "#5c6773",
    "editor.background": "#f8f9fa",
    "editor.foreground": "#5c6773",
    "editor.lineHighlightBackground": "#f2f2f2",
    "editorGroupHeader.tabsBackground": "#f2f2f2",
    "sideBar.background": "#f2f2f2",
    "statusBar.background": "#e7e8e9",
    "tab.activeBackground": "#f8f9fa",
    "tab.inactiveBackground": "#f2f2f2",
    "titleBar.activeBackground": "#e7e8e9",
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#abb0b6",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#86b300",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#ff9940",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#fa8d3e",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#55b4d4",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#5c6773",
        },
      },
    ],
  },
};

/**
 * Winter is Coming Light theme colors
 */
export const winterIsComingLightColors: ThemeColors = {
  workbench: {
    "activityBar.background": "#e7e7e7",
    "activityBar.foreground": "#444444",
    "editor.background": "#fff",
    "editor.foreground": "#444444",
    "editor.lineHighlightBackground": "#f0f0f0",
    "editorGroupHeader.tabsBackground": "#e7e7e7",
    "sideBar.background": "#e7e7e7",
    "statusBar.background": "#e0e0e0",
    "tab.activeBackground": "#fff",
    "tab.inactiveBackground": "#e7e7e7",
    "titleBar.activeBackground": "#e0e0e0",
  },
  editor: {
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#a0a1a7",
        },
      },
      {
        scope: ["string", "constant.other.symbol"],
        settings: {
          foreground: "#4c9858",
        },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: {
          foreground: "#986801",
        },
      },
      {
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#0c969b",
        },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: {
          foreground: "#4078f2",
        },
      },
      {
        scope: ["variable", "support.variable"],
        settings: {
          foreground: "#444444",
        },
      },
    ],
  },
};

/**
 * Get theme colors by name
 */
export const getThemeColors = (themeName: string): ThemeColors | undefined => {
  switch (themeName) {
    case "Pastel Light":
      return pastelLightColors;
    case "Pastel Dark":
      return pastelDarkColors;
    case "Panda Syntax":
      return pandaSyntaxColors;
    case "Fairy Floss":
      return fairyFlossColors;
    case "Rainglow - Piggy Light":
      return rainglowPiggyLightColors;
    case "Rainglow - Lavender Light":
      return rainglowLavenderLightColors;
    case "Rainglow - Tonic":
      return rainglowTonicColors;
    case "Horizon":
      return horizonColors;
    case "Ayu Light":
      return ayuLightColors;
    case "Winter is Coming (Light)":
      return winterIsComingLightColors;
    default:
      return undefined;
  }
};
