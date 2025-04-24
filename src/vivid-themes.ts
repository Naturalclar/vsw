/**
 * Vivid theme definitions
 */
import type { ThemeColors } from './theme-colors';

/**
 * Vivid theme interface
 */
export interface VividTheme {
  name: string;
  type: 'dark' | 'light';
  description: string;
}

/**
 * Vivid theme presets
 */
export const vividThemes: VividTheme[] = [
  {
    name: 'Neon Lights',
    type: 'dark',
    description: 'A vibrant dark theme with neon accents',
  },
  {
    name: 'Synthwave',
    type: 'dark',
    description: 'A retro-futuristic theme with bright colors',
  },
  {
    name: 'Cyberpunk',
    type: 'dark',
    description: 'A high-contrast theme with electric colors',
  },
  {
    name: 'Tropical',
    type: 'light',
    description: 'A bright theme with vivid tropical colors',
  },
  {
    name: 'Candy',
    type: 'light',
    description: 'A colorful theme with sweet candy colors',
  },
];

/**
 * Get vivid themes by type
 */
export const getVividThemesByType = (type: 'dark' | 'light'): VividTheme[] => {
  return vividThemes.filter((theme) => theme.type === type);
};

/**
 * Get all vivid themes
 */
export const getAllVividThemes = (): VividTheme[] => {
  return vividThemes;
};

/**
 * Get vivid theme by name
 */
export const getVividThemeByName = (name: string): VividTheme | undefined => {
  return vividThemes.find((theme) => theme.name === name);
};

/**
 * Neon Lights theme colors
 */
export const neonLightsColors: ThemeColors = {
  workbench: {
    'activityBar.background': '#0f0f1b',
    'activityBar.foreground': '#00ffff',
    'editor.background': '#0f0f1b',
    'editor.foreground': '#ffffff',
    'editor.lineHighlightBackground': '#1a1a2e',
    'editorGroupHeader.tabsBackground': '#0a0a14',
    'sideBar.background': '#0a0a14',
    'statusBar.background': '#0a0a14',
    'tab.activeBackground': '#0f0f1b',
    'tab.inactiveBackground': '#0a0a14',
    'titleBar.activeBackground': '#0a0a14',
  },
  editor: {
    tokenColors: [
      {
        scope: ['comment', 'punctuation.definition.comment'],
        settings: {
          foreground: '#4d4d7a',
        },
      },
      {
        scope: ['string', 'constant.other.symbol'],
        settings: {
          foreground: '#ff00ff',
        },
      },
      {
        scope: ['constant.numeric', 'constant.language'],
        settings: {
          foreground: '#00ffff',
        },
      },
      {
        scope: ['keyword', 'storage.type', 'storage.modifier'],
        settings: {
          foreground: '#ff00aa',
        },
      },
      {
        scope: ['entity.name.function', 'support.function'],
        settings: {
          foreground: '#00ff00',
        },
      },
      {
        scope: ['variable', 'support.variable'],
        settings: {
          foreground: '#ffff00',
        },
      },
    ],
  },
};

/**
 * Synthwave theme colors
 */
export const synthwaveColors: ThemeColors = {
  workbench: {
    'activityBar.background': '#241b2f',
    'activityBar.foreground': '#ff7edb',
    'editor.background': '#241b2f',
    'editor.foreground': '#ffffff',
    'editor.lineHighlightBackground': '#34294f',
    'editorGroupHeader.tabsBackground': '#1e1727',
    'sideBar.background': '#1e1727',
    'statusBar.background': '#1e1727',
    'tab.activeBackground': '#241b2f',
    'tab.inactiveBackground': '#1e1727',
    'titleBar.activeBackground': '#1e1727',
  },
  editor: {
    tokenColors: [
      {
        scope: ['comment', 'punctuation.definition.comment'],
        settings: {
          foreground: '#6d5a7d',
        },
      },
      {
        scope: ['string', 'constant.other.symbol'],
        settings: {
          foreground: '#ff8b39',
        },
      },
      {
        scope: ['constant.numeric', 'constant.language'],
        settings: {
          foreground: '#f97e72',
        },
      },
      {
        scope: ['keyword', 'storage.type', 'storage.modifier'],
        settings: {
          foreground: '#ff7edb',
        },
      },
      {
        scope: ['entity.name.function', 'support.function'],
        settings: {
          foreground: '#36f9f6',
        },
      },
      {
        scope: ['variable', 'support.variable'],
        settings: {
          foreground: '#fdfdfd',
        },
      },
    ],
  },
};

/**
 * Cyberpunk theme colors
 */
export const cyberpunkColors: ThemeColors = {
  workbench: {
    'activityBar.background': '#120b20',
    'activityBar.foreground': '#00ff9c',
    'editor.background': '#120b20',
    'editor.foreground': '#eeffff',
    'editor.lineHighlightBackground': '#1a1133',
    'editorGroupHeader.tabsBackground': '#0d0819',
    'sideBar.background': '#0d0819',
    'statusBar.background': '#0d0819',
    'tab.activeBackground': '#120b20',
    'tab.inactiveBackground': '#0d0819',
    'titleBar.activeBackground': '#0d0819',
  },
  editor: {
    tokenColors: [
      {
        scope: ['comment', 'punctuation.definition.comment'],
        settings: {
          foreground: '#495495',
        },
      },
      {
        scope: ['string', 'constant.other.symbol'],
        settings: {
          foreground: '#ff9c00',
        },
      },
      {
        scope: ['constant.numeric', 'constant.language'],
        settings: {
          foreground: '#ff0055',
        },
      },
      {
        scope: ['keyword', 'storage.type', 'storage.modifier'],
        settings: {
          foreground: '#d57bff',
        },
      },
      {
        scope: ['entity.name.function', 'support.function'],
        settings: {
          foreground: '#00ff9c',
        },
      },
      {
        scope: ['variable', 'support.variable'],
        settings: {
          foreground: '#00b0ff',
        },
      },
    ],
  },
};

/**
 * Tropical theme colors
 */
export const tropicalColors: ThemeColors = {
  workbench: {
    'activityBar.background': '#ffffff',
    'activityBar.foreground': '#ff4081',
    'editor.background': '#ffffff',
    'editor.foreground': '#333333',
    'editor.lineHighlightBackground': '#f5f5f5',
    'editorGroupHeader.tabsBackground': '#f0f0f0',
    'sideBar.background': '#f0f0f0',
    'statusBar.background': '#f0f0f0',
    'tab.activeBackground': '#ffffff',
    'tab.inactiveBackground': '#f0f0f0',
    'titleBar.activeBackground': '#f0f0f0',
  },
  editor: {
    tokenColors: [
      {
        scope: ['comment', 'punctuation.definition.comment'],
        settings: {
          foreground: '#999999',
        },
      },
      {
        scope: ['string', 'constant.other.symbol'],
        settings: {
          foreground: '#ff4081',
        },
      },
      {
        scope: ['constant.numeric', 'constant.language'],
        settings: {
          foreground: '#00bcd4',
        },
      },
      {
        scope: ['keyword', 'storage.type', 'storage.modifier'],
        settings: {
          foreground: '#7c4dff',
        },
      },
      {
        scope: ['entity.name.function', 'support.function'],
        settings: {
          foreground: '#00e676',
        },
      },
      {
        scope: ['variable', 'support.variable'],
        settings: {
          foreground: '#ff9100',
        },
      },
    ],
  },
};

/**
 * Candy theme colors
 */
export const candyColors: ThemeColors = {
  workbench: {
    'activityBar.background': '#ffffff',
    'activityBar.foreground': '#ff4d4d',
    'editor.background': '#ffffff',
    'editor.foreground': '#333333',
    'editor.lineHighlightBackground': '#f9f9f9',
    'editorGroupHeader.tabsBackground': '#f0f0f0',
    'sideBar.background': '#f0f0f0',
    'statusBar.background': '#f0f0f0',
    'tab.activeBackground': '#ffffff',
    'tab.inactiveBackground': '#f0f0f0',
    'titleBar.activeBackground': '#f0f0f0',
  },
  editor: {
    tokenColors: [
      {
        scope: ['comment', 'punctuation.definition.comment'],
        settings: {
          foreground: '#aaaaaa',
        },
      },
      {
        scope: ['string', 'constant.other.symbol'],
        settings: {
          foreground: '#ff4d4d',
        },
      },
      {
        scope: ['constant.numeric', 'constant.language'],
        settings: {
          foreground: '#4dc4ff',
        },
      },
      {
        scope: ['keyword', 'storage.type', 'storage.modifier'],
        settings: {
          foreground: '#ff4dff',
        },
      },
      {
        scope: ['entity.name.function', 'support.function'],
        settings: {
          foreground: '#4dff4d',
        },
      },
      {
        scope: ['variable', 'support.variable'],
        settings: {
          foreground: '#ffb84d',
        },
      },
    ],
  },
};

/**
 * Get vivid theme colors by name
 */
export const getVividThemeColors = (themeName: string): ThemeColors | undefined => {
  switch (themeName) {
    case 'Neon Lights':
      return neonLightsColors;
    case 'Synthwave':
      return synthwaveColors;
    case 'Cyberpunk':
      return cyberpunkColors;
    case 'Tropical':
      return tropicalColors;
    case 'Candy':
      return candyColors;
    default:
      return undefined;
  }
};
